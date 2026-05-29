import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import {
  ACHIEVEMENTS,
  GAME_MODES,
  MISSIONS,
  UPGRADE_DEFS,
  WEATHER_PRESETS
} from "./config.js";
import { AudioManager } from "./audio.js";
import { InputManager } from "./input.js";
import { addLeaderboardEntry, loadLeaderboard, loadSave, resetTuning, saveProgress } from "./storage.js";
import { UIController } from "./ui.js";
import { applyGlassTint, createPlayerCar, createTrafficVehicle } from "./vehicleFactory.js";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (from, to, alpha) => from + (to - from) * alpha;
const rand = (min, max) => min + Math.random() * (max - min);
const choose = (items) => items[Math.floor(Math.random() * items.length)];
const damp = (current, target, smoothing, dt) => lerp(current, target, 1 - Math.exp(-smoothing * dt));
const kmhToMps = (value) => value / 3.6;
const mpsToKph = (value) => value * 3.6;
const currentDayStamp = () => new Date().toISOString().slice(0, 10);

function createGradientTexture(stops) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  stops.forEach((stop) => gradient.addColorStop(stop.position, stop.color));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createCloudTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const circles = [
    [60, 70, 34],
    [94, 52, 40],
    [132, 72, 36],
    [172, 62, 32]
  ];
  const gradient = ctx.createLinearGradient(0, 20, 0, 120);
  gradient.addColorStop(0, "rgba(255,255,255,0.95)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  circles.forEach(([x, y, radius]) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function weightedVehicleType() {
  const roll = Math.random();
  if (roll < 0.42) return "car";
  if (roll < 0.54) return "van";
  if (roll < 0.68) return "motorcycle";
  if (roll < 0.82) return "truck";
  return "bus";
}

function formatWeatherLabel(id) {
  return id.charAt(0).toUpperCase() + id.slice(1);
}

export class HighwayGame {
  constructor({ canvas, touchRoot }) {
    this.canvas = canvas;
    this.touchRoot = touchRoot;
    this.saveData = loadSave();
    this.leaderboard = loadLeaderboard();
    this.ui = new UIController(this.saveData);
    this.ui.renderLeaderboard(this.leaderboard);
    this.input = new InputManager({ touchRoot });
    this.audio = new AudioManager();

    this.renderer = null;
    this.scene = null;
    this.composer = null;
    this.renderPass = null;
    this.bloomPass = null;
    this.filmPass = null;
    this.skyMaterial = null;
    this.sunLight = null;
    this.hemiLight = null;
    this.sunSprite = null;
    this.activeCamera = null;
    this.lastTick = performance.now();

    this.playerCar = null;
    this.playerHeadlights = [];
    this.nitroFlames = [];
    this.engineSmokeAnchor = null;

    this.worldRoot = new THREE.Group();
    this.roadGroup = new THREE.Group();
    this.trafficGroup = new THREE.Group();
    this.policeGroup = new THREE.Group();
    this.fxGroup = new THREE.Group();
    this.cloudGroup = new THREE.Group();

    this.road = {
      laneCount: 6,
      laneWidth: 4.2,
      roadWidth: 29.5,
      shoulderWidth: 2.6,
      segmentLength: 42,
      segmentCount: 28,
      segments: []
    };
    this.laneCenters = Array.from({ length: this.road.laneCount }, (_, index) => {
      return (index - (this.road.laneCount - 1) / 2) * this.road.laneWidth;
    });

    this.materials = {};
    this.textures = {};
    this.weatherState = {
      current: "day",
      target: "day",
      blend: 1
    };
    this.graphicsProfile = {
      trafficCap: 22,
      particleCap: 120,
      pixelRatio: 1.5
    };

    this.cameras = {
      chase: new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.1, 2600),
      cockpit: new THREE.PerspectiveCamera(82, window.innerWidth / window.innerHeight, 0.05, 2200),
      hood: new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 2200),
      cinematic: new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.1, 2600),
      orbit: new THREE.PerspectiveCamera(66, window.innerWidth / window.innerHeight, 0.1, 2600)
    };

    this.player = {
      x: this.laneCenters[4],
      z: 0,
      speedMps: 0,
      lateralVelocity: 0,
      yaw: 0,
      slipAngle: 0,
      steerInput: 0,
      steering: 0,
      wheelSpin: 0,
      gear: 1,
      rpm: 900,
      nitro: 1,
      damage: 0,
      throttle: 0,
      brakePressure: 0,
      headlights: true,
      leftSignal: false,
      rightSignal: false,
      signalTimer: 0,
      signalCommitted: false,
      indicatorPhase: false,
      hazard: false,
      offroad: false,
      reversing: false
    };

    this.session = null;
    this.phase = "loading";
    this.currentMode = GAME_MODES[0];
    this.cameraMode = "orbit";
    this.traffic = [];
    this.police = [];
    this.particles = [];
    this.tmpVec = new THREE.Vector3();
    this.tmpVec2 = new THREE.Vector3();
    this.tmpVec3 = new THREE.Vector3();
    this.tmpVec4 = new THREE.Vector3();
    this.upAxis = new THREE.Vector3(0, 1, 0);
    this.cameraPosition = new THREE.Vector3();
    this.cameraTarget = new THREE.Vector3();
    this.vehicleId = 0;
    this.smokeTimer = 0;
    this.dustTimer = 0;
    this.pauseSettingsOpen = false;
    this.pendingNicknamePrompt = false;
  }

  async init() {
    this.ui.setLoading(0.08, "Loading driver profile...");
    this.input.bind();
    this.bindUI();
    this.bindRuntimeEvents();
    await this.nextFrame();

    this.ui.setLoading(0.22, "Creating renderer and post effects...");
    this.setupRenderer();
    await this.nextFrame();

    this.ui.setLoading(0.44, "Building highway geometry and scenery...");
    this.buildWorld();
    await this.nextFrame();

    this.ui.setLoading(0.67, "Assembling the debadged sports sedan...");
    this.rebuildPlayerCar();
    await this.nextFrame();

    this.ui.setLoading(0.86, "Applying tuning, audio, and controls...");
    this.applySettings(this.saveData.settings, true);
    this.enterMenu("main-menu");
    this.ui.finishLoading();
    this.lastTick = performance.now();
    this.animate();
  }

  nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.28;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xb5d0e5, 0.0016);
    this.scene.add(this.worldRoot);
    this.worldRoot.add(this.roadGroup, this.trafficGroup, this.policeGroup, this.fxGroup, this.cloudGroup);

    const skyGeometry = new THREE.SphereGeometry(1600, 32, 15);
    this.skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(WEATHER_PRESETS.day.skyTop) },
        bottomColor: { value: new THREE.Color(WEATHER_PRESETS.day.skyBottom) },
        offset: { value: 80 },
        exponent: { value: 0.65 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          float mixStrength = max(pow(max(h, 0.0), exponent), 0.0);
          gl_FragColor = vec4(mix(bottomColor, topColor, mixStrength), 1.0);
        }
      `
    });
    const sky = new THREE.Mesh(skyGeometry, this.skyMaterial);
    this.scene.add(sky);

    const sunTexture = createGradientTexture([
      { position: 0, color: "rgba(255,255,255,1)" },
      { position: 0.18, color: "rgba(255,244,210,0.9)" },
      { position: 0.42, color: "rgba(255,204,134,0.45)" },
      { position: 1, color: "rgba(255,160,50,0)" }
    ]);
    this.sunSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: sunTexture,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    this.sunSprite.scale.setScalar(240);
    this.sunSprite.position.set(-260, 220, -720);
    this.scene.add(this.sunSprite);

    const cloudTexture = createCloudTexture();
    for (let index = 0; index < 14; index += 1) {
      const cloud = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: cloudTexture,
          transparent: true,
          opacity: rand(0.22, 0.52),
          depthWrite: false
        })
      );
      cloud.position.set(rand(-260, 260), rand(120, 220), rand(-680, 680));
      cloud.scale.set(rand(110, 190), rand(55, 90), 1);
      cloud.userData.drift = rand(0.4, 1.2);
      this.cloudGroup.add(cloud);
    }

    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x344b5d, 1.08);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff3dd, 1.38);
    this.sunLight.position.set(48, 65, -18);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.left = -80;
    this.sunLight.shadow.camera.right = 80;
    this.sunLight.shadow.camera.top = 80;
    this.sunLight.shadow.camera.bottom = -80;
    this.sunLight.shadow.camera.far = 180;
    this.scene.add(this.sunLight);

    this.activeCamera = this.cameras.orbit;
    this.renderPass = new RenderPass(this.scene, this.activeCamera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.72,
      0.62,
      0.08
    );
    this.filmPass = new FilmPass(0.12, 0.018, 512, false);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.filmPass);
  }

  buildWorld() {
    this.materials.road = new THREE.MeshStandardMaterial({
      color: 0x373d43,
      roughness: 0.86,
      metalness: 0.18
    });
    this.materials.shoulder = new THREE.MeshStandardMaterial({
      color: 0x424a52,
      roughness: 0.96,
      metalness: 0.08
    });
    this.materials.lane = new THREE.MeshStandardMaterial({
      color: 0xfff9db,
      emissive: 0xffffff,
      emissiveIntensity: 0.16,
      roughness: 0.45,
      metalness: 0.15
    });
    this.materials.centerLine = new THREE.MeshStandardMaterial({
      color: 0xffd16c,
      emissive: 0xffa23b,
      emissiveIntensity: 0.18,
      roughness: 0.4,
      metalness: 0.2
    });
    this.materials.guardrail = new THREE.MeshStandardMaterial({
      color: 0xaeb8c4,
      roughness: 0.35,
      metalness: 0.95
    });
    this.materials.terrain = new THREE.MeshStandardMaterial({
      color: 0x4a684d,
      roughness: 1,
      metalness: 0
    });
    this.materials.city = new THREE.MeshStandardMaterial({
      color: 0x4b6071,
      emissive: 0x0d1f2c,
      emissiveIntensity: 0.25,
      roughness: 0.92,
      metalness: 0.25
    });
    this.materials.lightPole = new THREE.MeshStandardMaterial({
      color: 0x5f6873,
      roughness: 0.62,
      metalness: 0.8
    });

    for (let index = 0; index < this.road.segmentCount; index += 1) {
      const segment = this.createRoadSegment(index);
      this.road.segments.push(segment);
      this.roadGroup.add(segment);
    }

    this.resetRoadAround(0);
    this.createRainSystem();
    this.createParticlePool();
    this.applyWeather("day", true);
  }

  createRoadSegment(index) {
    const segment = new THREE.Group();
    segment.userData.index = index;
    segment.userData.baseFeature = choose(["sign", "billboard", "bridge", "none", "tunnel", "lamps"]);

    const road = new THREE.Mesh(
      new THREE.BoxGeometry(this.road.roadWidth, 0.12, this.road.segmentLength),
      this.materials.road
    );
    road.receiveShadow = true;
    road.position.y = -0.02;
    segment.add(road);

    const shoulderWidth = (this.road.roadWidth + this.road.shoulderWidth * 2) / 2;
    const shoulderLeft = new THREE.Mesh(
      new THREE.BoxGeometry(this.road.shoulderWidth, 0.08, this.road.segmentLength),
      this.materials.shoulder
    );
    shoulderLeft.position.set(-shoulderWidth + this.road.shoulderWidth / 2, -0.03, 0);
    segment.add(shoulderLeft);

    const shoulderRight = shoulderLeft.clone();
    shoulderRight.position.x *= -1;
    segment.add(shoulderRight);

    const terrainWidth = 70;
    const terrainLeft = new THREE.Mesh(
      new THREE.PlaneGeometry(terrainWidth, this.road.segmentLength + 24),
      this.materials.terrain
    );
    terrainLeft.rotation.x = -Math.PI / 2;
    terrainLeft.position.set(-this.road.roadWidth / 2 - terrainWidth / 2 - 2, -0.11, 0);
    terrainLeft.receiveShadow = true;
    segment.add(terrainLeft);

    const terrainRight = terrainLeft.clone();
    terrainRight.position.x *= -1;
    segment.add(terrainRight);

    const laneDividerPositions = this.laneCenters
      .slice(0, -1)
      .map((center, idx) => center + this.road.laneWidth / 2 + (idx === 2 ? 0 : 0));

    laneDividerPositions.forEach((x, dividerIndex) => {
      const isCenter = dividerIndex === 2;
      for (let dash = -2; dash < 4; dash += 1) {
        const mark = new THREE.Mesh(
          new THREE.BoxGeometry(isCenter ? 0.13 : 0.09, 0.02, isCenter ? 4.5 : 3.3),
          isCenter ? this.materials.centerLine : this.materials.lane
        );
        mark.position.set(x + (isCenter ? -0.14 : 0), 0.04, dash * 7.5);
        segment.add(mark);
        if (isCenter) {
          const pair = mark.clone();
          pair.position.x = x + 0.14;
          segment.add(pair);
        }
      }
    });

    const edgeStripeOffset = this.road.roadWidth / 2 - 0.2;
    [-edgeStripeOffset, edgeStripeOffset].forEach((x) => {
      for (let dash = -2; dash < 4; dash += 1) {
        const stripe = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.02, 5.5),
          this.materials.lane
        );
        stripe.position.set(x, 0.04, dash * 7.2);
        segment.add(stripe);
      }
    });

    const railOffset = this.road.roadWidth / 2 + 1.75;
    const railGeometry = new THREE.BoxGeometry(0.18, 0.5, this.road.segmentLength);
    const railLeft = new THREE.Mesh(railGeometry, this.materials.guardrail);
    railLeft.position.set(-railOffset, 0.25, 0);
    railLeft.castShadow = true;
    segment.add(railLeft);
    const railRight = railLeft.clone();
    railRight.position.x *= -1;
    segment.add(railRight);

    for (let side of [-1, 1]) {
      for (let i = 0; i < 3; i += 1) {
        const city = new THREE.Mesh(
          new THREE.BoxGeometry(rand(6, 18), rand(12, 42), rand(8, 16)),
          this.materials.city
        );
        city.position.set(side * rand(28, 66), city.geometry.parameters.height / 2 - 0.15, rand(-15, 15));
        city.castShadow = true;
        city.receiveShadow = true;
        segment.add(city);
      }
      const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(rand(12, 22), rand(22, 40), 6),
        this.materials.terrain
      );
      mountain.position.set(side * rand(70, 110), mountain.geometry.parameters.height / 2 - 0.1, rand(-12, 12));
      mountain.rotation.y = rand(0, Math.PI);
      mountain.receiveShadow = true;
      segment.add(mountain);
    }

    const addLamp = (side, zPos) => {
      const pole = new THREE.Group();
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 7.4, 10), this.materials.lightPole);
      stem.position.y = 3.7;
      stem.castShadow = true;
      pole.add(stem);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.12), this.materials.lightPole);
      arm.position.set(side * -1.1, 6.95, 0);
      pole.add(arm);
      const lamp = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.22, 0.35),
        new THREE.MeshStandardMaterial({
          color: 0xe8f7ff,
          emissive: 0xfff2c7,
          emissiveIntensity: 1.3
        })
      );
      lamp.position.set(side * -2.15, 6.9, 0);
      pole.add(lamp);
      pole.position.set(side * (this.road.roadWidth / 2 + 3.3), 0, zPos);
      segment.add(pole);
    };

    addLamp(-1, -13);
    addLamp(1, 9);

    if (segment.userData.baseFeature === "billboard") {
      const board = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.32, 7.6, 0.32), this.materials.lightPole);
      pole.position.y = 3.8;
      board.add(pole);
      const sign = new THREE.Mesh(
        new THREE.BoxGeometry(6.5, 2.4, 0.28),
        new THREE.MeshStandardMaterial({
          color: 0x18212b,
          emissive: 0x11364e,
          emissiveIntensity: 1.15
        })
      );
      sign.position.set(0, 7.5, 0);
      board.add(sign);
      board.position.set(choose([-1, 1]) * (this.road.roadWidth / 2 + 8.4), 0, rand(-8, 8));
      board.rotation.y = choose([0, Math.PI]);
      board.traverse((child) => {
        child.castShadow = true;
      });
      segment.add(board);
    }

    if (segment.userData.baseFeature === "bridge") {
      const arch = new THREE.Mesh(
        new THREE.BoxGeometry(this.road.roadWidth + 8, 0.45, 3),
        this.materials.guardrail
      );
      arch.position.set(0, 8.7, 0);
      segment.add(arch);
      const pillarLeft = new THREE.Mesh(new THREE.BoxGeometry(0.6, 8.7, 0.9), this.materials.guardrail);
      pillarLeft.position.set(-this.road.roadWidth / 2 - 1.3, 4.35, 0);
      segment.add(pillarLeft);
      const pillarRight = pillarLeft.clone();
      pillarRight.position.x *= -1;
      segment.add(pillarRight);
    }

    if (segment.userData.baseFeature === "tunnel") {
      const tunnelMaterial = new THREE.MeshStandardMaterial({
        color: 0x2b3137,
        roughness: 0.84,
        metalness: 0.2
      });
      const roof = new THREE.Mesh(
        new THREE.BoxGeometry(this.road.roadWidth + 6.5, 0.6, this.road.segmentLength),
        tunnelMaterial
      );
      roof.position.set(0, 8.8, 0);
      segment.add(roof);
      const wallLeft = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 8.8, this.road.segmentLength),
        tunnelMaterial
      );
      wallLeft.position.set(-this.road.roadWidth / 2 - 2.6, 4.4, 0);
      segment.add(wallLeft);
      const wallRight = wallLeft.clone();
      wallRight.position.x *= -1;
      segment.add(wallRight);
    }

    if (segment.userData.baseFeature === "sign") {
      const sign = new THREE.Group();
      const support = new THREE.Mesh(new THREE.BoxGeometry(0.24, 5, 0.24), this.materials.lightPole);
      support.position.y = 2.5;
      sign.add(support);
      const board = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 1.3, 0.14),
        new THREE.MeshStandardMaterial({
          color: 0x1d5538,
          roughness: 0.4,
          metalness: 0.25
        })
      );
      board.position.set(0, 5.6, 0);
      sign.add(board);
      sign.position.set(-this.road.roadWidth / 2 - 5, 0, rand(-12, 12));
      segment.add(sign);
    }

    return segment;
  }

  createRainSystem() {
    const count = 900;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = rand(-18, 18);
      positions[i * 3 + 1] = rand(1, 28);
      positions[i * 3 + 2] = rand(-24, 24);
      speeds[i] = rand(14, 30);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xcde7ff,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });
    this.rain = new THREE.Points(geometry, material);
    this.rain.visible = false;
    this.rain.userData.speeds = speeds;
    this.fxGroup.add(this.rain);
  }

  createParticlePool() {
    this.textures.smoke = createGradientTexture([
      { position: 0, color: "rgba(255,255,255,0.9)" },
      { position: 0.32, color: "rgba(180,190,200,0.52)" },
      { position: 1, color: "rgba(120,130,140,0)" }
    ]);
    this.textures.spark = createGradientTexture([
      { position: 0, color: "rgba(255,255,255,1)" },
      { position: 0.22, color: "rgba(255,220,120,1)" },
      { position: 0.58, color: "rgba(255,120,40,0.55)" },
      { position: 1, color: "rgba(255,60,20,0)" }
    ]);
    this.textures.flame = createGradientTexture([
      { position: 0, color: "rgba(255,255,255,1)" },
      { position: 0.18, color: "rgba(150,225,255,0.95)" },
      { position: 0.45, color: "rgba(70,160,255,0.65)" },
      { position: 1, color: "rgba(70,160,255,0)" }
    ]);

    const particleCap = 150;
    for (let i = 0; i < particleCap; i += 1) {
      const material = new THREE.SpriteMaterial({
        map: this.textures.smoke,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        color: 0xffffff
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.setScalar(0);
      sprite.visible = false;
      this.fxGroup.add(sprite);
      this.particles.push({
        sprite,
        velocity: new THREE.Vector3(),
        gravity: 0,
        drag: 0.94,
        life: 0,
        maxLife: 1
      });
    }
  }

  rebuildPlayerCar() {
    const existing = this.playerCar;
    const preserve = existing
      ? {
          position: existing.position.clone(),
          rotationY: existing.rotation.y
        }
      : {
          position: new THREE.Vector3(this.player.x, 0, this.player.z),
          rotationY: 0
        };

    if (existing) {
      this.scene.remove(existing);
    }

    this.playerCar = createPlayerCar(this.saveData.customization);
    this.playerCar.position.copy(preserve.position);
    this.playerCar.rotation.y = preserve.rotationY;
    this.playerCar.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    const headlightLeft = new THREE.SpotLight(0xe3f4ff, 0, 160, Math.PI / 8, 0.32, 1.2);
    headlightLeft.position.set(-0.58, 0.84, 2.25);
    headlightLeft.target.position.set(-0.58, 0.3, 40);
    this.playerCar.add(headlightLeft, headlightLeft.target);

    const headlightRight = headlightLeft.clone();
    headlightRight.position.x *= -1;
    headlightRight.target.position.x *= -1;
    this.playerCar.add(headlightRight, headlightRight.target);
    this.playerHeadlights = [headlightLeft, headlightRight];

    const flameLeft = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.4, 8),
      new THREE.MeshBasicMaterial({
        color: 0x6ac8ff,
        transparent: true,
        opacity: 0.8
      })
    );
    flameLeft.rotation.x = -Math.PI / 2;
    flameLeft.position.set(-0.42, 0.34, -2.62);
    flameLeft.visible = false;
    this.playerCar.add(flameLeft);

    const flameRight = flameLeft.clone();
    flameRight.position.x *= -1;
    this.playerCar.add(flameRight);
    this.nitroFlames = [flameLeft, flameRight];

    this.engineSmokeAnchor = new THREE.Object3D();
    this.engineSmokeAnchor.position.set(0, 1.0, 1.35);
    this.playerCar.add(this.engineSmokeAnchor);

    this.scene.add(this.playerCar);
    this.updateDamageVisuals();
    this.updateLights(0);
  }

  bindUI() {
    this.ui.bindGarageHandlers({
      onUpgrade: (upgradeId) => this.purchaseUpgrade(upgradeId),
      onTuneChange: (tuneId, value) => {
        this.saveData.tuning[tuneId] = value;
        saveProgress(this.saveData);
      },
      onResetTuning: () => {
        this.saveData = resetTuning(this.saveData);
        this.refreshUI();
        saveProgress(this.saveData);
      },
      onCustomizationChange: (customization) => {
        this.saveData.customization = { ...this.saveData.customization, ...customization };
        this.rebuildPlayerCar();
        this.refreshUI();
        saveProgress(this.saveData);
      }
    });

    this.ui.bindSettingsHandlers((settings) => {
      this.applySettings(settings);
      this.refreshUI();
      saveProgress(this.saveData);
      this.pushEvent("Settings applied.");
    });

    this.ui.bindMenus({
      onStartRun: (modeId) => this.requestStartRun(modeId),
      onDailyReward: () => this.claimDailyReward(),
      onResume: () => this.togglePause(false),
      onPauseSettings: () => this.openPauseSettings(),
      onQuitRun: () => {
        this.togglePause(false);
        this.endRun("Session quit", false);
      },
      onRetry: () => this.requestStartRun(this.currentMode.id),
      onResultsGarage: () => this.enterMenu("garage-screen"),
      onCloseSettings: () => this.closePauseSettings(false)
    });
  }

  bindRuntimeEvents() {
    window.addEventListener("resize", () => this.handleResize());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.phase === "running") {
        this.togglePause(true);
      }
    });
    window.addEventListener(
      "pointerdown",
      () => {
        this.audio.start();
      },
      { passive: true }
    );
  }

  handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    Object.values(this.cameras).forEach((camera) => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
    this.ui.toggleTouchControls(window.matchMedia("(max-width: 900px)").matches);
  }

  applySettings(settings, initial = false) {
    this.saveData.settings = initial
      ? { ...this.saveData.settings, ...settings }
      : { ...this.saveData.settings, ...settings };

    const qualityProfiles = {
      low: { pixelRatio: 1, bloom: 0.32, film: false, shadows: false, trafficCap: 16, particleCap: 70 },
      medium: { pixelRatio: 1.2, bloom: 0.5, film: true, shadows: true, trafficCap: 20, particleCap: 95 },
      high: { pixelRatio: 1.5, bloom: 0.72, film: true, shadows: true, trafficCap: 26, particleCap: 130 },
      ultra: { pixelRatio: 2, bloom: 0.9, film: true, shadows: true, trafficCap: 32, particleCap: 150 }
    };
    this.graphicsProfile = qualityProfiles[this.saveData.settings.graphicsQuality] ?? qualityProfiles.high;

    if (this.renderer) {
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.graphicsProfile.pixelRatio));
      this.renderer.shadowMap.enabled = this.graphicsProfile.shadows;
    }
    if (this.bloomPass) {
      this.bloomPass.strength = this.graphicsProfile.bloom;
    }
    if (this.filmPass) {
      this.filmPass.enabled = this.graphicsProfile.film;
    }
    this.input.gamepadEnabled = this.saveData.settings.gamepadEnabled;
    this.input.gamepadDeadzone = this.saveData.settings.gamepadDeadzone;
    this.audio.setVolumes({
      masterVolume: this.saveData.settings.masterVolume,
      sfxVolume: this.saveData.settings.sfxVolume,
      musicVolume: this.saveData.settings.musicVolume,
      engineVolume: this.saveData.settings.engineVolume,
      ambienceVolume: this.saveData.settings.ambienceVolume
    });
    this.audio.setSceneState({
      menu: this.phase === "menu" || this.phase === "results",
      paused: this.phase === "paused",
      running: this.phase === "running" || this.phase === "intro" || this.phase === "crashReplay"
    });
    if (this.touchRoot) {
      this.touchRoot.classList.toggle("compact", this.saveData.settings.touchLayout === "compact");
    }
    this.ui.toggleTouchControls(window.matchMedia("(max-width: 900px)").matches);
    saveProgress(this.saveData);
  }

  refreshUI() {
    this.ui.refreshFromSave(this.saveData);
    this.ui.renderUpgradeCards();
    this.ui.renderTuningControls();
    this.ui.renderMissions();
    this.ui.renderAchievements();
    this.ui.renderLeaderboard(this.leaderboard);
  }

  getModeById(modeId) {
    return GAME_MODES.find((mode) => mode.id === modeId) ?? GAME_MODES[0];
  }

  getCurrentObjective(mode) {
    if (mode.id === "career") {
      const pending = MISSIONS.find((mission) => this.saveData.missionProgress[mission.id] < mission.goal);
      return pending?.title ?? "All missions complete. Chase a new best score.";
    }
    if (mode.id === "time-trial") return "Beat the timer and hold your average speed.";
    if (mode.id === "police") return "Build distance, outrun the interceptors, and escape roadblocks.";
    if (mode.id === "rain") return "Survive the slick surface and keep the combo alive.";
    if (mode.id === "night") return "Use headlights and push top speed after dark.";
    if (mode.id === "delivery") return "Deliver the package before the timer expires.";
    if (mode.id === "hardcore") return "One impact can end the run. Precision first.";
    if (mode.id === "free") return "Cruise and experiment with the car setup.";
    return "Survive traffic and stack close overtakes.";
  }

  getPerformanceSpec() {
    const upgrades = this.saveData.upgrades;
    const tuning = this.saveData.tuning;
    const damagePenalty = 1 - this.player.damage * 0.42;
    const wetness = WEATHER_PRESETS[this.weatherState.current]?.wetness ?? 0;

    return {
      maxSpeedMps:
        kmhToMps(
          258 *
            (1 + upgrades.engine * 0.038 + upgrades.ecu * 0.03 + upgrades.exhaust * 0.012) *
            (1 + (tuning.gearRatio - 1) * 0.25)
        ) * damagePenalty,
      accel:
        18 *
        (1 + upgrades.turbo * 0.1 + upgrades.weight * 0.04 + upgrades.gearbox * 0.035) *
        damagePenalty,
      brake:
        28 *
        (1 + upgrades.brakes * 0.08) *
        (0.92 + tuning.brakeBias * 0.2) *
        (1 + (tuning.abs ? 0.08 : -0.05)),
      grip:
        7.2 *
        (1 + upgrades.tires * 0.06 + upgrades.suspension * 0.05 + upgrades.diff * 0.03) *
        tuning.tireGrip *
        tuning.suspensionStiffness *
        (1 - wetness * 0.28),
      steer:
        10.8 *
        tuning.steeringSensitivity *
        (1 + upgrades.suspension * 0.025),
      nitroBoost:
        20 *
        tuning.nitroPower *
        (1 + upgrades.nitro * 0.09) *
        damagePenalty,
      nitroCapacity: 1 + upgrades.nitro * 0.12,
      driftAssist: tuning.driftAssist
    };
  }

  enterMenu(screenId = "main-menu") {
    this.pauseSettingsOpen = false;
    this.phase = "menu";
    this.ui.toggleMenu(true);
    this.ui.toggleHUD(false);
    this.ui.togglePause(false);
    this.ui.toggleResults(false);
    this.ui.setPauseSettingsOpen(false);
    this.ui.showScreen(screenId);
    this.cameraMode = "orbit";
    this.activeCamera = this.cameras.orbit;
    this.player.speedMps = damp(this.player.speedMps, kmhToMps(90), 0.25, 1);
    this.player.headlights = false;
    this.updateLights(0);
    this.audio.setSceneState({ menu: true, paused: false, running: false });
  }

  openPauseSettings() {
    if (!this.session || this.session.ended) {
      this.enterMenu("settings-screen");
      return;
    }
    this.pauseSettingsOpen = true;
    this.phase = "paused";
    this.ui.togglePause(false);
    this.ui.toggleMenu(true);
    this.ui.showScreen("settings-screen");
    this.ui.setPauseSettingsOpen(true);
    this.audio.setSceneState({ menu: false, paused: true, running: false });
  }

  closePauseSettings(resumeRun = false) {
    if (!this.pauseSettingsOpen) return;
    this.pauseSettingsOpen = false;
    this.ui.setPauseSettingsOpen(false);
    this.ui.toggleMenu(false);
    if (resumeRun) {
      this.phase = "running";
      this.ui.togglePause(false);
      this.audio.setSceneState({ menu: false, paused: false, running: true });
      return;
    }
    this.phase = "paused";
    this.ui.togglePause(true);
    this.audio.setSceneState({ menu: false, paused: true, running: false });
  }

  async requestStartRun(modeId) {
    if (this.pendingNicknamePrompt) return;
    const mode = this.getModeById(modeId);
    const activeRun = this.session && !this.session.ended && ["running", "intro"].includes(this.phase);
    const previousPhase = this.phase;

    if (activeRun) {
      this.phase = "paused";
      this.ui.togglePause(false);
      this.audio.setSceneState({ menu: false, paused: true, running: false });
    }

    this.pendingNicknamePrompt = true;
    const nickname = await this.ui.promptNickname(mode.name);
    this.pendingNicknamePrompt = false;

    if (!nickname) {
      if (activeRun) {
        this.phase = previousPhase;
        this.audio.setSceneState({ menu: false, paused: false, running: true });
      }
      return;
    }

    await this.startRun(mode.id, nickname);
  }

  async startRun(modeId, nickname = "Driver") {
    await this.audio.start();
    this.currentMode = this.getModeById(modeId);
    this.saveData.selectedMode = this.currentMode.id;
    saveProgress(this.saveData);

    this.phase = "intro";
    this.cameraMode = "chase";
    this.activeCamera = this.cameras.cinematic;
    this.pauseSettingsOpen = false;
    this.session = {
      mode: this.currentMode,
      nickname,
      score: 0,
      displayMoney: 0,
      distanceKm: 0,
      distanceM: 0,
      topSpeed: 0,
      bestCombo: 1,
      combo: 1,
      comboTimer: 1,
      comboWindow: 4.2,
      nearMisses: 0,
      bestNearMissStreak: 0,
      closeCallStreak: 0,
      damage: 0,
      wantedLevel: this.currentMode.police ? 1 : 0,
      peakWantedLevel: this.currentMode.police ? 1 : 0,
      wantedHeat: this.currentMode.police ? 0.25 : 0,
      policeEscapeTime: 0,
      policeEscapeBonus: 0,
      wrongLaneTime: 0,
      timerRemaining: this.currentMode.timer,
      objective: this.getCurrentObjective(this.currentMode),
      activeCameraLabel: "Cinematic Launch",
      runTime: 0,
      averageSpeedAccumulator: 0,
      averageSpeedSamples: 0,
      truckPasses: 0,
      noCrash: true,
      crashReplayTimer: 0,
      roadblockCooldown: 16,
      weatherTimer: rand(45, 75),
      introTimer: 1.4,
      repairCost: 0,
      ended: false,
      success: false,
      missionPulse: false
    };

    this.player = {
      ...this.player,
      x: this.laneCenters[4],
      z: 0,
      speedMps: 0,
      lateralVelocity: 0,
      yaw: 0,
      steering: 0,
      steerInput: 0,
      slipAngle: 0,
      wheelSpin: 0,
      gear: 1,
      rpm: 900,
      nitro: 1,
      damage: 0,
      throttle: 0,
      brakePressure: 0,
      headlights: ["night", "rain", "storm", "fog"].includes(this.currentMode.weather),
      leftSignal: false,
      rightSignal: false,
      signalTimer: 0,
      signalCommitted: false,
      indicatorPhase: false,
      hazard: false,
      offroad: false,
      reversing: false
    };
    this.player.nitro = this.getPerformanceSpec().nitroCapacity;
    this.repositionPlayerCar();

    this.clearTraffic();
    this.resetRoadAround(this.player.z);
    this.applyWeather(this.currentMode.weather, true);
    this.ui.toggleMenu(false);
    this.ui.toggleResults(false);
    this.ui.toggleHUD(true);
    this.ui.togglePause(false);
    this.ui.setPauseSettingsOpen(false);
    this.ui.events.length = 0;
    this.ui.el.eventFeed.innerHTML = "";
    this.pushEvent(`${nickname} started ${this.currentMode.name}. ${this.session.objective}`);
    this.audio.setSceneState({ menu: false, paused: false, running: true });

    for (let i = 0; i < 12; i += 1) this.spawnTrafficVehicle(true);
    if (this.currentMode.police) {
      for (let i = 0; i < 2; i += 1) this.spawnPoliceVehicle(i === 1);
    }
  }

  clearTraffic() {
    this.traffic.forEach((vehicle) => this.trafficGroup.remove(vehicle.mesh));
    this.police.forEach((vehicle) => this.policeGroup.remove(vehicle.mesh));
    this.traffic = [];
    this.police = [];
  }

  resetRoadAround(centerZ) {
    const startZ = centerZ - this.road.segmentLength * 4;
    this.road.segments.forEach((segment, index) => {
      segment.position.set(0, 0, startZ + index * this.road.segmentLength);
    });
  }

  repositionPlayerCar() {
    if (!this.playerCar) return;
    this.playerCar.position.set(this.player.x, 0, this.player.z);
    this.playerCar.rotation.y = this.player.yaw;
  }

  applyWeather(weatherId, immediate = false) {
    this.weatherState.target = weatherId;
    this.weatherState.current = immediate ? weatherId : this.weatherState.current;
    this.weatherState.blend = immediate ? 1 : 0;
    if (immediate) {
      this.updateWeatherMaterialState(WEATHER_PRESETS[weatherId]);
    }
  }

  updateWeather(dt) {
    if (!this.session && this.phase !== "menu") return;

    const target = WEATHER_PRESETS[this.weatherState.target];
    const current = WEATHER_PRESETS[this.weatherState.current];

    if (this.weatherState.current !== this.weatherState.target) {
      this.weatherState.blend = Math.min(1, this.weatherState.blend + dt * 0.18);
      const lerped = {
        skyTop: new THREE.Color(current.skyTop).lerp(new THREE.Color(target.skyTop), this.weatherState.blend),
        skyBottom: new THREE.Color(current.skyBottom).lerp(
          new THREE.Color(target.skyBottom),
          this.weatherState.blend
        ),
        fog: new THREE.Color(current.fog).lerp(new THREE.Color(target.fog), this.weatherState.blend),
        ambient: new THREE.Color(current.ambient).lerp(
          new THREE.Color(target.ambient),
          this.weatherState.blend
        ),
        sun: new THREE.Color(current.sun).lerp(new THREE.Color(target.sun), this.weatherState.blend),
        lightIntensity: lerp(current.lightIntensity, target.lightIntensity, this.weatherState.blend),
        wetness: lerp(current.wetness, target.wetness, this.weatherState.blend),
        rain: lerp(current.rain, target.rain, this.weatherState.blend),
        night: lerp(current.night, target.night, this.weatherState.blend)
      };
      this.updateWeatherMaterialState(lerped);

      if (this.weatherState.blend >= 1) {
        this.weatherState.current = this.weatherState.target;
      }
    } else {
      this.updateWeatherMaterialState(target);
    }
  }

  updateWeatherMaterialState(preset) {
    this.skyMaterial.uniforms.topColor.value.copy(
      preset.skyTop instanceof THREE.Color ? preset.skyTop : new THREE.Color(preset.skyTop)
    );
    this.skyMaterial.uniforms.bottomColor.value.copy(
      preset.skyBottom instanceof THREE.Color ? preset.skyBottom : new THREE.Color(preset.skyBottom)
    );
    const fogColor = preset.fog instanceof THREE.Color ? preset.fog : new THREE.Color(preset.fog);
    this.scene.fog.color.copy(fogColor);
    this.scene.fog.density = 0.00115 + (preset.night || 0) * 0.00055 + (preset.rain || 0) * 0.00022;
    this.renderer.setClearColor(fogColor);
    this.hemiLight.color.copy(
      preset.ambient instanceof THREE.Color ? preset.ambient : new THREE.Color(preset.ambient)
    );
    this.hemiLight.intensity = 0.95 + (preset.night || 0) * 0.38 + (preset.rain || 0) * 0.08;
    this.sunLight.color.copy(preset.sun instanceof THREE.Color ? preset.sun : new THREE.Color(preset.sun));
    this.sunLight.intensity = preset.lightIntensity * 1.16;
    this.sunSprite.material.opacity = 0.78 - (preset.night || 0) * 0.22;
    this.sunSprite.position.y = 220 - (preset.night || 0) * 80;

    this.materials.road.roughness = 0.93 - preset.wetness * 0.4;
    this.materials.road.metalness = 0.12 + preset.wetness * 0.42;
    this.materials.road.color.setHSL(0.58, 0.05, 0.25 - (preset.night || 0) * 0.025);
    this.materials.lane.emissiveIntensity = 0.16 + (preset.night || 0) * 0.44 + (preset.rain || 0) * 0.12;
    this.materials.centerLine.emissiveIntensity = 0.18 + (preset.night || 0) * 0.48 + (preset.rain || 0) * 0.1;

    this.rain.visible = preset.rain > 0.05;
    this.rain.material.opacity = 0.22 + preset.rain * 0.28;
    this.ui.toggleCockpit(
      this.cameraMode === "cockpit",
      clamp(preset.rain * 0.3 + this.player.speedMps * 0.0012 * preset.rain, 0, 0.65),
      clamp(this.player.damage * 1.1, 0, 0.75)
    );
  }

  updateRain(dt) {
    if (!this.rain.visible) return;
    const positions = this.rain.geometry.attributes.position.array;
    const speeds = this.rain.userData.speeds;

    for (let i = 0; i < speeds.length; i += 1) {
      positions[i * 3] += Math.sin(performance.now() * 0.002 + i) * 0.003;
      positions[i * 3 + 1] -= speeds[i] * dt;
      positions[i * 3 + 2] += (this.player.speedMps * 0.6 + speeds[i]) * dt * 0.08;

      if (positions[i * 3 + 1] < -1 || positions[i * 3 + 2] > 28) {
        positions[i * 3] = rand(-18, 18);
        positions[i * 3 + 1] = rand(12, 30);
        positions[i * 3 + 2] = rand(-26, 10);
      }
    }
    this.rain.position.set(this.player.x, 1, this.player.z + 4);
    this.rain.geometry.attributes.position.needsUpdate = true;
  }

  spawnParticle({
    position,
    velocity,
    life = 0.7,
    scale = 1,
    color = 0xffffff,
    texture = "smoke",
    opacity = 0.7,
    gravity = 1.5,
    drag = 0.94
  }) {
    const particle = this.particles.find((entry) => entry.life <= 0);
    if (!particle) return;
    particle.life = life;
    particle.maxLife = life;
    particle.gravity = gravity;
    particle.drag = drag;
    particle.velocity.copy(velocity);
    particle.sprite.position.copy(position);
    particle.sprite.scale.setScalar(scale);
    particle.sprite.material.map = this.textures[texture];
    particle.sprite.material.color.set(color);
    particle.sprite.material.opacity = opacity;
    particle.sprite.visible = true;
  }

  pushEvent(text) {
    this.ui.addEvent(text);
  }

  purchaseUpgrade(upgradeId) {
    const def = UPGRADE_DEFS.find((upgrade) => upgrade.id === upgradeId);
    if (!def) return;
    const level = this.saveData.upgrades[upgradeId];
    if (level >= def.max) return;
    const cost = Math.round(def.baseCost * (1 + level * 0.55));
    if (this.saveData.money < cost) {
      this.pushEvent("Not enough credits for that upgrade.");
      return;
    }
    this.saveData.money -= cost;
    this.saveData.upgrades[upgradeId] += 1;
    this.refreshUI();
    saveProgress(this.saveData);
    this.pushEvent(`${def.label} upgraded to level ${this.saveData.upgrades[upgradeId]}.`);
  }

  claimDailyReward() {
    const day = currentDayStamp();
    if (this.saveData.dailyReward.lastClaimDay === day) {
      this.pushEvent("Daily reward already claimed today.");
      return;
    }

    const lastClaim = this.saveData.dailyReward.lastClaimDay;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    this.saveData.dailyReward.streak = lastClaim === yesterday ? this.saveData.dailyReward.streak + 1 : 1;
    this.saveData.dailyReward.lastClaimDay = day;
    const reward = 600 + this.saveData.dailyReward.streak * 180;
    this.saveData.money += reward;
    this.saveData.stats.totalMoneyEarned += reward;
    this.refreshUI();
    saveProgress(this.saveData);
    this.pushEvent(`Daily reward claimed: ${reward} credits.`);
  }

  handleActions() {
    const actions = this.input.consumeActions();
    actions.forEach((action) => {
      if (action === "camera" && (this.phase === "running" || this.phase === "intro")) this.cycleCamera();
      if (action === "reset" && this.session && !this.session.ended) this.requestStartRun(this.currentMode.id);
      if (action === "pause") {
        if (this.pauseSettingsOpen) {
          this.closePauseSettings(false);
        } else if (this.phase === "running" || this.phase === "intro" || this.phase === "paused") {
          this.togglePause();
        }
      }
      if (action === "map" && this.session) {
        this.saveData.settings.showMap = !this.saveData.settings.showMap;
        saveProgress(this.saveData);
      }
      if (action === "headlights" && this.session) {
        this.player.headlights = !this.player.headlights;
        this.pushEvent(`Headlights ${this.player.headlights ? "on" : "off"}.`);
      }
      if (action === "signalLeft" && this.session) {
        this.player.leftSignal = !this.player.leftSignal;
        this.player.rightSignal = false;
        this.player.signalTimer = 0;
        this.player.signalCommitted = false;
      }
      if (action === "signalRight" && this.session) {
        this.player.rightSignal = !this.player.rightSignal;
        this.player.leftSignal = false;
        this.player.signalTimer = 0;
        this.player.signalCommitted = false;
      }
    });
  }

  cycleCamera() {
    const cycle = ["chase", "cockpit", "hood"];
    const index = cycle.indexOf(this.cameraMode);
    this.cameraMode = cycle[(index + 1 + cycle.length) % cycle.length];
    this.pushEvent(`Camera switched to ${this.getCameraLabel(this.cameraMode)} view.`);
  }

  getCameraLabel(mode) {
    if (mode === "cockpit") return "Cockpit";
    if (mode === "hood") return "Hood";
    if (mode === "cinematic") return "Cinematic";
    if (mode === "orbit") return "Garage Orbit";
    return "Chase";
  }

  togglePause(force) {
    if (!this.session || this.session.ended) return;
    if (this.pauseSettingsOpen && force === false) {
      this.closePauseSettings(true);
      return;
    }
    const next = force ?? this.phase !== "paused";
    this.phase = next ? "paused" : "running";
    this.ui.togglePause(next);
    this.ui.toggleMenu(false);
    this.ui.setPauseSettingsOpen(false);
    this.pauseSettingsOpen = false;
    this.audio.setSceneState({ menu: false, paused: next, running: !next });
  }

  spawnTrafficVehicle(forceCluster = false, typeOverride = null, forcedLane = null, forcedOncoming = null) {
    if (this.traffic.length >= this.graphicsProfile.trafficCap) return null;

    const type = typeOverride ?? weightedVehicleType();
    const vehicle = createTrafficVehicle(type, {
      wheelStyle: choose(["sport", "mesh", "track"])
    });
    const isTwoWay = ["two-way", "police", "hardcore"].includes(this.currentMode.id);
    const canBeOncoming = isTwoWay && !["bus", "truck"].includes(type);
    const isOncoming = forcedOncoming ?? (canBeOncoming && Math.random() < 0.46);
    const laneOptions = isTwoWay
      ? isOncoming
        ? [0, 1, 2]
        : [3, 4, 5]
      : [0, 1, 2, 3, 4, 5];

    const laneIndex = forcedLane ?? choose(laneOptions);
    const laneX = this.laneCenters[laneIndex];
    const size = vehicle.userData.size;
    const baseSpeed = {
      motorcycle: rand(30, 44),
      van: rand(22, 32),
      bus: rand(20, 27),
      truck: rand(18, 24),
      car: rand(26, 38)
    }[type];
    const z = this.player.z + (isOncoming ? rand(220, 460) : rand(forceCluster ? 80 : 140, forceCluster ? 170 : 420));

    const overlap = this.traffic.some((existing) => {
      return (
        Math.abs(existing.z - z) < 26 &&
        Math.abs(existing.laneX - laneX) < this.road.laneWidth * 0.6 &&
        existing.direction === (isOncoming ? -1 : 1)
      );
    });
    if (overlap) {
      this.trafficGroup.remove(vehicle);
      return null;
    }

    const entry = {
      id: this.vehicleId += 1,
      mesh: vehicle,
      type,
      speedMps: baseSpeed,
      desiredSpeedMps: baseSpeed + rand(-3, 4),
      laneIndex,
      laneX,
      z,
      prevRelativeZ: z - this.player.z,
      direction: isOncoming ? -1 : 1,
      isOncoming,
      changingLane: false,
      targetLane: laneIndex,
      laneChangeT: 0,
      laneChangeCooldown: rand(2.5, 6.5),
      aggressive: Math.random() < 0.18,
      filtered: type === "motorcycle" && Math.random() < 0.52,
      nearMissAwarded: false,
      countedPass: false,
      brakeVisual: 0,
      size
    };

    vehicle.position.set(laneX, 0, z);
    vehicle.rotation.y = isOncoming ? Math.PI : 0;
    vehicle.userData.entry = entry;
    this.traffic.push(entry);
    this.trafficGroup.add(vehicle);
    return entry;
  }

  spawnPoliceVehicle(sideSpawn = false) {
    if (!this.session?.mode.police) return;
    const vehicle = createTrafficVehicle("police");
    const laneIndex = clamp(
      Math.round((this.player.x / this.road.laneWidth + (this.road.laneCount - 1) / 2)),
      3,
      5
    );
    const startLane = sideSpawn ? clamp(laneIndex + choose([-1, 1]), 3, 5) : laneIndex;
    const laneX = this.laneCenters[startLane];
    const z = this.player.z - (sideSpawn ? rand(12, 28) : rand(45, 70));
    const entry = {
      id: this.vehicleId += 1,
      mesh: vehicle,
      laneIndex: startLane,
      laneX,
      z,
      speedMps: this.player.speedMps + rand(5, 10),
      targetOffset: sideSpawn ? choose([-1, 1]) * this.road.laneWidth : 0,
      brakeVisual: 0,
      size: vehicle.userData.size,
      ramCooldown: rand(0.5, 2.3)
    };
    vehicle.position.set(laneX, 0, z);
    this.police.push(entry);
    this.policeGroup.add(vehicle);
  }

  spawnRoadblock() {
    if (!this.session || !this.session.mode.police || this.session.wantedLevel < 3) return;
    const ahead = this.player.z + rand(240, 320);
    [3, 4, 5].forEach((laneIndex, idx) => {
      const latest = this.spawnTrafficVehicle(false, idx === 1 ? "truck" : "car", laneIndex, false);
      if (!latest) return;
      latest.z = ahead + idx * 10;
      latest.speedMps = idx === 1 ? 8 : 14;
      latest.desiredSpeedMps = latest.speedMps;
      latest.mesh.position.z = latest.z;
      latest.mesh.userData.roadblock = true;
    });
    this.pushEvent("Roadblock reported ahead.");
  }

  updateTraffic(dt) {
    if (!this.session) return;
    const densityGrowth = clamp(this.session.runTime / 65, 0, 1);
    const modeDensity = {
      free: -4,
      rain: 1,
      night: 1,
      career: 1,
      "time-trial": 2,
      "two-way": 2,
      delivery: 4,
      hardcore: 3
    }[this.currentMode.id] ?? 0;
    const targetCount = Math.min(
      this.graphicsProfile.trafficCap,
      Math.max(6, Math.round(11 + densityGrowth * 10 + modeDensity + (this.currentMode.police ? 2 : 0)))
    );
    while (this.traffic.length < targetCount) {
      this.spawnTrafficVehicle(false);
    }

    const remove = [];
    const spec = this.getPerformanceSpec();

    this.traffic.forEach((vehicle) => {
      vehicle.laneChangeCooldown -= dt * (vehicle.aggressive ? 1.4 : 1);
      const lead = this.findLeadVehicle(vehicle, this.traffic);
      let targetSpeed = vehicle.desiredSpeedMps;

      if (lead && lead.distance < 18 + (vehicle.type === "truck" ? 8 : 0)) {
        targetSpeed = Math.min(targetSpeed, lead.entry.speedMps - rand(0.5, 2.4));
        vehicle.brakeVisual = clamp(vehicle.brakeVisual + dt * 2.8, 0, 1);
      } else {
        vehicle.brakeVisual = clamp(vehicle.brakeVisual - dt * 2.4, 0, 1);
      }

      if (!vehicle.isOncoming && vehicle.laneChangeCooldown <= 0 && Math.random() < dt * 0.35) {
        const candidates = [vehicle.laneIndex - 1, vehicle.laneIndex + 1].filter((laneIndex) => {
          const sameDirectionRange = ["two-way", "police", "hardcore"].includes(this.currentMode.id)
            ? [3, 4, 5]
            : [0, 1, 2, 3, 4, 5];
          return sameDirectionRange.includes(laneIndex);
        });
        const targetLane = candidates.find((laneIndex) => this.isLaneClear(laneIndex, vehicle.z, 24));
        if (targetLane !== undefined) {
          vehicle.changingLane = true;
          vehicle.targetLane = targetLane;
          vehicle.laneStart = vehicle.laneX;
          vehicle.laneGoal = this.laneCenters[targetLane];
          vehicle.laneChangeT = 0;
          vehicle.laneChangeCooldown = rand(3.8, 7.2);
        }
      }

      if (vehicle.filtered) {
        vehicle.laneX += Math.sin(this.session.runTime * 2.6 + vehicle.id) * dt * 0.6;
      }

      if (vehicle.changingLane) {
        vehicle.laneChangeT = Math.min(1, vehicle.laneChangeT + dt * 0.65);
        const eased = vehicle.laneChangeT * vehicle.laneChangeT * (3 - 2 * vehicle.laneChangeT);
        vehicle.laneX = lerp(vehicle.laneStart, vehicle.laneGoal, eased);
        if (vehicle.laneChangeT >= 1) {
          vehicle.changingLane = false;
          vehicle.laneIndex = vehicle.targetLane;
          vehicle.laneX = vehicle.laneGoal;
        }
      } else {
        vehicle.laneX = damp(vehicle.laneX, this.laneCenters[vehicle.laneIndex], 4.5, dt);
      }

      vehicle.speedMps = damp(vehicle.speedMps, Math.max(4, targetSpeed), vehicle.aggressive ? 2.4 : 1.8, dt);
      vehicle.z += vehicle.direction * vehicle.speedMps * dt;
      vehicle.mesh.position.set(vehicle.laneX, 0, vehicle.z);
      vehicle.mesh.rotation.y = (vehicle.isOncoming ? Math.PI : 0) + (vehicle.laneGoal ? (vehicle.laneGoal - vehicle.laneStart || 0) * 0.01 : 0);

      const lights = vehicle.mesh.userData.headlights ?? [];
      const brakelights = vehicle.mesh.userData.brakelights ?? [];
      const nightFactor = WEATHER_PRESETS[this.weatherState.current].night ?? 0;
      lights.forEach((light) => {
        light.material.emissiveIntensity = this.player.headlights || nightFactor > 0.5 ? 1.5 + nightFactor * 1.5 : 0.15;
      });
      brakelights.forEach((light) => {
        light.material.emissiveIntensity = 1.1 + vehicle.brakeVisual * 2.4 + nightFactor * 1.2;
      });

      const relativeZ = vehicle.z - this.player.z;
      const lateralGap = Math.abs(vehicle.laneX - this.player.x);
      const halfLength = vehicle.size.length * 0.5 + this.playerCar.userData.size.length * 0.38;
      const halfWidth = vehicle.size.width * 0.5 + this.playerCar.userData.size.width * 0.42;

      if (Math.abs(relativeZ) < halfLength && lateralGap < halfWidth) {
        this.handleCollision(vehicle, vehicle.isOncoming ? 1.2 : 0.9);
      }

      if (!vehicle.nearMissAwarded && vehicle.prevRelativeZ > 2 && relativeZ < -2 && lateralGap < 2.6 && lateralGap > halfWidth) {
        vehicle.nearMissAwarded = true;
        this.handleNearMiss(vehicle);
      }
      vehicle.prevRelativeZ = relativeZ;

      if (!vehicle.countedPass && relativeZ < -6) {
        vehicle.countedPass = true;
        if (vehicle.type === "truck") this.session.truckPasses += 1;
      }

      if (relativeZ < -180 || relativeZ > 620) {
        remove.push(vehicle);
      }
    });

    remove.forEach((vehicle) => {
      this.trafficGroup.remove(vehicle.mesh);
      this.traffic.splice(this.traffic.indexOf(vehicle), 1);
    });

    if (this.player.offroad && this.player.speedMps > kmhToMps(60)) {
      this.dustTimer -= dt;
      if (this.dustTimer <= 0) {
        this.spawnDust();
        this.dustTimer = 0.04;
      }
    }

    if (this.input.state.nitro > 0 && this.player.speedMps > kmhToMps(80) && this.player.nitro > 0) {
      this.spawnNitroParticles();
    }
  }

  updatePolice(dt) {
    if (!this.session?.mode.police) return;

    this.session.wantedHeat +=
      dt * (this.player.speedMps > kmhToMps(150) ? 0.16 : 0.07) +
      (this.player.x < 0 ? dt * 0.06 : 0) +
      (this.session.nearMisses > 0 ? dt * 0.01 : 0);
    if (this.player.speedMps > kmhToMps(210)) {
      this.session.policeEscapeTime += dt;
    }

    const nearbyPolice = this.police.some((unit) => this.player.z - unit.z < 55 && this.player.z - unit.z > -10);
    if (!nearbyPolice && this.player.speedMps > kmhToMps(185)) {
      this.session.wantedHeat = Math.max(0, this.session.wantedHeat - dt * 0.22);
    }

    const previousWanted = this.session.wantedLevel;
    this.session.wantedLevel = clamp(Math.ceil(this.session.wantedHeat), 0, 5);
    this.session.peakWantedLevel = Math.max(this.session.peakWantedLevel, this.session.wantedLevel);
    if (previousWanted > 0 && this.session.wantedLevel === 0) {
      this.session.policeEscapeBonus += 900;
      this.pushEvent("Police escaped. Bonus awarded.");
    }

    const targetCount = this.session.wantedLevel === 0 ? 0 : Math.min(5, 1 + this.session.wantedLevel);
    while (this.police.length < targetCount) this.spawnPoliceVehicle(Math.random() < 0.5);

    this.session.roadblockCooldown -= dt;
    if (this.session.roadblockCooldown <= 0 && this.session.wantedLevel >= 3) {
      this.spawnRoadblock();
      this.session.roadblockCooldown = rand(18, 32);
    }

    const remove = [];
    this.police.forEach((unit, index) => {
      const behindOffset = 16 + index * 7;
      const desiredZ = this.player.z - behindOffset;
      const laneBias = index % 2 === 0 ? 0 : choose([-1, 1]) * this.road.laneWidth * 0.4;
      const desiredX = clamp(this.player.x + unit.targetOffset * 0.35 + laneBias, this.laneCenters[3], this.laneCenters[5]);
      unit.laneX = damp(unit.laneX, desiredX, 1.6 + this.session.wantedLevel * 0.4, dt);
      unit.z = damp(unit.z, desiredZ, 0.9 + this.session.wantedLevel * 0.28, dt) + unit.speedMps * dt * 0.25;
      unit.speedMps = damp(unit.speedMps, this.player.speedMps + 4 + this.session.wantedLevel * 2.5, 1.8, dt);
      unit.mesh.position.set(unit.laneX, 0, unit.z);

      if (unit.mesh.userData.lightBar) {
        const pulse = (Math.sin(performance.now() * 0.024 + index) + 1) * 0.5;
        unit.mesh.userData.lightBar.material.emissive.setHex(pulse > 0.5 ? 0xff4646 : 0x53a7ff);
      }

      const dx = Math.abs(unit.laneX - this.player.x);
      const dz = Math.abs(unit.z - this.player.z);
      if (dx < 1.8 && dz < 4.2 && unit.ramCooldown <= 0) {
        this.handleCollision(unit, 0.8);
        unit.ramCooldown = rand(1.2, 2.5);
      }
      unit.ramCooldown -= dt;

      if (unit.z < this.player.z - 220 || unit.z > this.player.z + 180) {
        remove.push(unit);
      }
    });

    remove.forEach((unit) => {
      this.policeGroup.remove(unit.mesh);
      this.police.splice(this.police.indexOf(unit), 1);
    });
  }

  updatePlayer(dt, ambient = false) {
    const spec = this.getPerformanceSpec();
    const controls = ambient
      ? { accelerate: 0.65, brake: 0, left: 0, right: 0, handbrake: 0, nitro: 0, horn: 0 }
      : this.input.state;
    const steerInputRaw = (controls.right || 0) - (controls.left || 0);
    const wetness = WEATHER_PRESETS[this.weatherState.current].wetness;
    const steerFilter = this.saveData.settings.steeringFilter;
    const steerResponse = 7 + (1 - steerFilter) * 12;
    const steerReturn = 8 + this.saveData.settings.steerReturnSpeed * 9;
    this.player.steerInput = damp(
      this.player.steerInput,
      steerInputRaw,
      Math.abs(steerInputRaw) > 0.01 ? steerResponse : steerReturn,
      dt
    );
    const targetTopSpeed = spec.maxSpeedMps + (controls.nitro > 0 && this.player.nitro > 0 ? spec.nitroBoost : 0);

    if (!ambient) {
      if (controls.accelerate > 0) {
        this.player.speedMps += spec.accel * controls.accelerate * dt;
      } else {
        this.player.speedMps -= (4.2 + this.player.speedMps * 0.02) * dt;
      }
      if (controls.brake > 0) {
        this.player.speedMps -= spec.brake * controls.brake * dt;
      }
    } else {
      this.player.speedMps = damp(this.player.speedMps, kmhToMps(105), 0.8, dt);
    }

    const nitroActive = !ambient && controls.nitro > 0 && this.player.nitro > 0.02 && this.player.speedMps > kmhToMps(70);
    this.player.throttle = ambient ? 0.45 : controls.accelerate || 0;
    this.player.brakePressure = ambient ? 0 : controls.brake || 0;
    if (nitroActive) {
      this.player.speedMps += spec.nitroBoost * dt;
      this.player.nitro = clamp(this.player.nitro - dt * 0.17, 0, spec.nitroCapacity);
    } else {
      this.player.nitro = clamp(this.player.nitro + dt * 0.05, 0, spec.nitroCapacity);
    }
    this.player.nitro = clamp(this.player.nitro, 0, spec.nitroCapacity);
    this.player.speedMps = clamp(this.player.speedMps, 0, targetTopSpeed);

    const handbrake = controls.handbrake > 0 && !ambient;
    const speedRatio = clamp(this.player.speedMps / Math.max(1, spec.maxSpeedMps), 0, 1);
    const driftAssist = 0.7 + spec.driftAssist * 0.45;
    const tractionAssist = this.saveData.tuning.tractionControl ? 1 : 0.88;
    const grip = spec.grip * (handbrake ? 0.68 : 1) * (1 - wetness * 0.22) * tractionAssist;
    const steerAngle =
      this.player.steerInput *
      (0.52 - speedRatio * 0.18) *
      this.saveData.settings.steerSensitivity *
      (handbrake ? 1.12 : 1);
    const lateralTarget =
      steerAngle * spec.steer * (1.04 - speedRatio * 0.22) * (handbrake ? 1.06 + spec.driftAssist * 0.24 : 1);
    this.player.lateralVelocity = damp(
      this.player.lateralVelocity,
      lateralTarget,
      grip * (0.78 + speedRatio * 0.35),
      dt
    );
    this.player.x += this.player.lateralVelocity * dt;
    this.player.x = clamp(
      this.player.x,
      -this.road.roadWidth / 2 - this.road.shoulderWidth * 0.75,
      this.road.roadWidth / 2 + this.road.shoulderWidth * 0.75
    );
    this.player.offroad = Math.abs(this.player.x) > this.road.roadWidth / 2 - 0.9;

    if (this.player.offroad) {
      this.player.speedMps *= 1 - dt * (0.7 + wetness * 0.2);
      if (this.session) this.session.comboTimer = Math.max(0, this.session.comboTimer - dt * 0.5);
    }

    this.player.slipAngle = damp(
      this.player.slipAngle,
      handbrake ? steerAngle * driftAssist : this.player.lateralVelocity * 0.028,
      handbrake ? 4.2 + driftAssist : 8.5,
      dt
    );
    this.player.yaw = damp(
      this.player.yaw,
      -steerAngle * 0.32 - this.player.slipAngle * 0.52 + (handbrake ? this.player.steerInput * 0.05 : 0),
      7.2,
      dt
    );
    this.player.z += this.player.speedMps * dt;
    this.player.steering = damp(
      this.player.steering,
      this.player.steerInput,
      Math.abs(steerInputRaw) > 0.01 ? steerResponse * 0.9 : steerReturn * 1.1,
      dt
    );
    this.player.wheelSpin += this.player.speedMps * dt * 2.6;
    this.player.reversing = !ambient && controls.brake > 0 && controls.accelerate <= 0 && this.player.speedMps < kmhToMps(10);

    const signaling = this.player.leftSignal || this.player.rightSignal;
    if (signaling && !this.player.hazard) {
      this.player.signalTimer += dt;
      const matchingTurn =
        (this.player.leftSignal && this.player.steering < -0.16) ||
        (this.player.rightSignal && this.player.steering > 0.16);
      if (matchingTurn) {
        this.player.signalCommitted = true;
      }
      if (
        this.player.signalCommitted &&
        Math.abs(this.player.steering) < 0.08 &&
        this.player.signalTimer > 0.9
      ) {
        this.player.leftSignal = false;
        this.player.rightSignal = false;
        this.player.signalCommitted = false;
        this.player.signalTimer = 0;
      } else if (this.player.signalTimer > 8) {
        this.player.leftSignal = false;
        this.player.rightSignal = false;
        this.player.signalCommitted = false;
        this.player.signalTimer = 0;
      }
    } else if (!this.player.hazard) {
      this.player.signalTimer = 0;
      this.player.signalCommitted = false;
    }
    this.player.indicatorPhase = Math.sin(performance.now() * 0.018) > 0;

    this.repositionPlayerCar();
    this.playerCar.rotation.y += handbrake ? this.player.steering * 0.022 : 0;

    const wheelRotation = this.player.wheelSpin;
    this.playerCar.userData.wheels.forEach((wheel, index) => {
      wheel.rotation.x = wheelRotation;
      if (index < 2) wheel.rotation.y = -this.player.steering * 0.46;
    });
    this.playerCar.userData.steeringWheel.rotation.z = 0.18 - this.player.steering * 1.05;

    const speedKph = mpsToKph(this.player.speedMps);
    const gearRatios = [0, 3.5, 2.4, 1.82, 1.45, 1.2, 0.98, 0.82];
    let gear = clamp(Math.floor(speedKph / 34) + 1, 1, 7);
    const wheelRps = this.player.speedMps / 2.02;
    let targetRpm = 900 + wheelRps * gearRatios[gear] * (135 / this.saveData.tuning.gearRatio);
    while (gear < 7 && targetRpm > 6850) {
      gear += 1;
      targetRpm = 900 + wheelRps * gearRatios[gear] * (135 / this.saveData.tuning.gearRatio);
    }
    this.player.gear = gear;
    this.player.rpm = damp(
      this.player.rpm,
      clamp(targetRpm + this.player.throttle * 1100 + (nitroActive ? 260 : 0) + Math.abs(this.player.steering) * 160, 850, 7600),
      9,
      dt
    );

    this.updateLights(dt, controls);
    this.audio.updateEngine({
      speedKph,
      rpm: this.player.rpm,
      nitroActive,
      weatherRain: WEATHER_PRESETS[this.weatherState.current].rain,
      policeActive: this.currentMode.police && this.session?.wantedLevel > 0,
      throttle: this.player.throttle,
      brake: this.player.brakePressure,
      gear: this.player.gear,
      hornActive: controls.horn || 0,
      indicatorActive: this.player.leftSignal || this.player.rightSignal || this.player.hazard,
      indicatorPhase: this.player.indicatorPhase,
      skidAmount: clamp(Math.abs(this.player.slipAngle) * 1.8 + (handbrake ? 0.25 : 0), 0, 1)
    });

    if (this.player.damage > 0.62 && this.engineSmokeAnchor && this.session) {
      this.smokeTimer -= dt;
      if (this.smokeTimer <= 0) {
        this.spawnParticle({
          position: this.engineSmokeAnchor.getWorldPosition(this.tmpVec3),
          velocity: this.tmpVec4.set(rand(-0.4, 0.4), rand(1.4, 2.1), rand(-0.2, 0.2)),
          life: 1.1,
          scale: rand(0.7, 1.25),
          color: 0xb3b9bf,
          texture: "smoke",
          opacity: 0.42,
          gravity: -0.2,
          drag: 0.97
        });
        this.smokeTimer = 0.1;
      }
    }
  }

  updateLights(dt, controls = this.input.state) {
    if (!this.playerCar) return;
    const nightFactor = WEATHER_PRESETS[this.weatherState.current].night;
    const indicators = this.playerCar.userData.indicators;
    const blink = this.player.indicatorPhase;
    const headlightsOn =
      this.player.headlights || (this.saveData.settings.autoHeadlights && nightFactor > 0.45);
    const brakeStrength = controls.brake > 0 ? 1.9 + controls.brake * 2.4 : 1.15 + nightFactor * 1.3;

    this.playerCar.userData.headLights.forEach((light) => {
      light.material.emissiveIntensity = headlightsOn ? 2.3 + nightFactor : 0.45;
      light.material.color.set(this.saveData.customization.headlightColor);
      light.material.emissive.set(this.saveData.customization.headlightColor);
    });

    this.playerCar.userData.brakeLights.forEach((light) => {
      light.material.emissiveIntensity = brakeStrength;
    });

    indicators.frontLeft.material.emissiveIntensity = blink && (this.player.leftSignal || this.player.hazard) ? 3.2 : 0.2;
    indicators.rearLeft.material.emissiveIntensity = blink && (this.player.leftSignal || this.player.hazard) ? 3.4 : 0.25;
    indicators.frontRight.material.emissiveIntensity = blink && (this.player.rightSignal || this.player.hazard) ? 3.2 : 0.2;
    indicators.rearRight.material.emissiveIntensity = blink && (this.player.rightSignal || this.player.hazard) ? 3.4 : 0.25;
    indicators.reverseLeft.material.emissiveIntensity = this.player.reversing ? 2.2 : 0.15;
    indicators.reverseRight.material.emissiveIntensity = this.player.reversing ? 2.2 : 0.15;

    this.playerHeadlights.forEach((light, index) => {
      light.intensity = headlightsOn ? 2.2 + nightFactor * 2.4 : 0;
      light.distance = 110 + nightFactor * 45 + this.player.speedMps * 0.16;
      light.angle = Math.PI / (7.6 - index * 0.22);
    });

    const nitroActive = controls.nitro > 0 && this.player.nitro > 0.02 && this.player.speedMps > kmhToMps(70);
    this.nitroFlames.forEach((flame) => {
      flame.visible = nitroActive;
      flame.scale.setScalar(nitroActive ? rand(0.8, 1.35) : 0.01);
      flame.material.opacity = nitroActive ? rand(0.55, 0.9) : 0;
    });
  }

  spawnDust() {
    const base = this.playerCar.position.clone();
    const side = Math.sign(this.player.x) || 1;
    for (let i = 0; i < 2; i += 1) {
      this.spawnParticle({
        position: new THREE.Vector3(base.x - side * 0.9 + rand(-0.2, 0.2), 0.28, base.z - 1.2 + rand(-0.5, 0.5)),
        velocity: new THREE.Vector3(rand(-0.6, 0.6), rand(0.6, 1.1), rand(-1.2, -0.2)),
        life: 0.7,
        scale: rand(0.8, 1.3),
        color: 0xaa9e87,
        texture: "smoke",
        opacity: 0.36,
        gravity: 0.18,
        drag: 0.94
      });
    }
  }

  spawnNitroParticles() {
    const worldPosition = this.playerCar.getWorldPosition(new THREE.Vector3());
    [-0.42, 0.42].forEach((offsetX) => {
      this.spawnParticle({
        position: new THREE.Vector3(worldPosition.x + offsetX, 0.35, worldPosition.z - 2.5),
        velocity: new THREE.Vector3(rand(-0.2, 0.2), rand(-0.05, 0.4), rand(-4.6, -2.5)),
        life: 0.25,
        scale: rand(0.35, 0.58),
        color: 0x7dd9ff,
        texture: "flame",
        opacity: 0.9,
        gravity: -0.2,
        drag: 0.9
      });
    });
  }

  handleNearMiss(vehicle) {
    if (!this.session) return;
    this.session.nearMisses += 1;
    this.session.closeCallStreak += 1;
    this.session.bestNearMissStreak = Math.max(this.session.bestNearMissStreak, this.session.closeCallStreak);
    this.session.combo = clamp(this.session.combo + 0.28 + (vehicle.isOncoming ? 0.12 : 0), 1, 6.5);
    this.session.bestCombo = Math.max(this.session.bestCombo, this.session.combo);
    this.session.comboTimer = 1;
    let bonus = 120 + this.session.combo * 32;
    if (vehicle.isOncoming) bonus += 65;
    if (this.input.state.nitro > 0) bonus += 55;
    this.session.score += bonus;
    this.pushEvent(`Near miss +${Math.round(bonus)} (${this.session.combo.toFixed(1)}x combo)`);
  }

  handleCollision(vehicle, severity = 1) {
    if (!this.session || this.session.ended) return;
    if (this.session.runTime - (this.session.lastCollisionTime ?? -10) < 1.1) return;
    this.session.lastCollisionTime = this.session.runTime;

    this.audio.pulseCrash(severity);
    this.session.noCrash = false;
    this.session.closeCallStreak = 0;
    this.session.combo = 1;
    this.session.comboTimer = 0.25;
    this.player.speedMps *= 0.42;
    this.player.damage = clamp(this.player.damage + 0.16 * severity + this.player.speedMps * 0.0025, 0, 1);
    this.session.damage = this.player.damage;
    this.session.repairCost += Math.round(220 + this.player.damage * 850);
    this.updateDamageVisuals();

    const impactPosition = vehicle.mesh.position.clone().lerp(this.playerCar.position, 0.5);
    for (let i = 0; i < 12; i += 1) {
      this.spawnParticle({
        position: impactPosition.clone().add(new THREE.Vector3(rand(-0.5, 0.5), rand(0.25, 0.9), rand(-0.7, 0.7))),
        velocity: new THREE.Vector3(rand(-2.2, 2.2), rand(0.5, 2.6), rand(-2.2, 2.2)),
        life: rand(0.3, 0.55),
        scale: rand(0.22, 0.45),
        color: choose([0xffd16a, 0xff8b45, 0xffffff]),
        texture: "spark",
        opacity: 0.95,
        gravity: 4.2,
        drag: 0.88
      });
    }
    for (let i = 0; i < 6; i += 1) {
      this.spawnParticle({
        position: impactPosition.clone().add(new THREE.Vector3(rand(-0.6, 0.6), rand(0.25, 0.9), rand(-0.7, 0.7))),
        velocity: new THREE.Vector3(rand(-1.2, 1.2), rand(0.8, 1.7), rand(-1.3, 1.3)),
        life: rand(0.7, 1.1),
        scale: rand(0.6, 1.2),
        color: 0xb8bdc4,
        texture: "smoke",
        opacity: 0.48,
        gravity: 0.4,
        drag: 0.95
      });
    }

    this.pushEvent("Impact. Combo lost and repair costs increased.");
    const shouldEndNow =
      this.currentMode.hardcore ||
      this.player.damage >= 0.98 ||
      (this.currentMode.id === "delivery" && this.player.damage > 0.84);
    if (shouldEndNow) {
      this.startCrashReplay("Crash detected");
    }
  }

  updateDamageVisuals() {
    if (!this.playerCar) return;
    const damage = this.player.damage;
    const parts = this.playerCar.userData.damageParts;
    parts.frontBumper.position.set(0, 0.48 - damage * 0.12, 2.42 - damage * 0.05);
    parts.frontBumper.rotation.z = -damage * 0.08;
    parts.rearBumper.position.set(0, 0.49 - damage * 0.05, -2.4);
    parts.rearBumper.rotation.z = damage * 0.05;
    parts.headlightL.visible = damage < 0.78;
    parts.headlightR.visible = damage < 0.88;
    parts.greenhouse.material.opacity = 0.68 - damage * 0.18;
    const baseRoughness = this.playerCar.userData.paintMaterial.userData.baseClearcoatRoughness ?? 0.06;
    this.playerCar.userData.paintMaterial.clearcoatRoughness = baseRoughness + damage * 0.38;
  }

  findLeadVehicle(vehicle, pool) {
    let closest = null;
    let bestDistance = Infinity;
    pool.forEach((candidate) => {
      if (candidate === vehicle) return;
      if (candidate.direction !== vehicle.direction) return;
      if (Math.abs(candidate.laneX - vehicle.laneX) > this.road.laneWidth * 0.48) return;
      const distance = vehicle.direction === 1 ? candidate.z - vehicle.z : vehicle.z - candidate.z;
      if (distance > 0 && distance < bestDistance) {
        bestDistance = distance;
        closest = candidate;
      }
    });
    return closest ? { entry: closest, distance: bestDistance } : null;
  }

  isLaneClear(laneIndex, z, threshold = 18) {
    return !this.traffic.some((vehicle) => {
      return Math.abs(vehicle.laneX - this.laneCenters[laneIndex]) < this.road.laneWidth * 0.45 && Math.abs(vehicle.z - z) < threshold;
    });
  }

  updateRun(dt) {
    if (!this.session || this.phase === "paused") return;

    if (this.phase === "intro") {
      this.session.introTimer -= dt;
      this.updatePlayer(dt);
      this.updateRoad(dt);
      this.updateTraffic(dt);
      if (this.currentMode.police) this.updatePolice(dt);
      this.updateCamera(dt, true);
      this.updateWeather(dt);
      this.updateRain(dt);
      this.updateParticles(dt);
      this.updateHUD();
      if (this.session.introTimer <= 0) this.phase = "running";
      return;
    }

    if (this.phase === "crashReplay") {
      this.session.crashReplayTimer -= dt;
      this.updateRoad(dt);
      this.updateTraffic(dt * 0.35);
      this.updateParticles(dt);
      this.updateRain(dt * 0.7);
      this.updateCamera(dt);
      this.updateWeather(dt);
      if (this.session.crashReplayTimer <= 0) {
        this.endRun(this.session.endReason ?? "Vehicle disabled", false, true);
      }
      return;
    }

    this.session.runTime += dt;
    this.session.timerRemaining = this.currentMode.timer > 0 ? this.session.timerRemaining - dt : 0;
    this.session.weatherTimer -= dt;

    if (["endless", "career", "free"].includes(this.currentMode.id) && this.session.weatherTimer <= 0) {
      const nextWeather = choose(["day", "sunset", "fog", "rain"]);
      this.applyWeather(nextWeather);
      this.session.weatherTimer = rand(50, 80);
      this.pushEvent(`Weather shifting to ${formatWeatherLabel(nextWeather)}.`);
    }

    this.updatePlayer(dt);
    this.updateRoad(dt);
    this.updateTraffic(dt);
    if (this.currentMode.police) this.updatePolice(dt);
    this.updateWeather(dt);
    this.updateRain(dt);
    this.updateParticles(dt);
    this.updateCamera(dt);

    const speedKph = mpsToKph(this.player.speedMps);
    this.session.distanceM += this.player.speedMps * dt;
    this.session.distanceKm = this.session.distanceM / 1000;
    this.session.topSpeed = Math.max(this.session.topSpeed, speedKph);
    this.session.averageSpeedAccumulator += speedKph;
    this.session.averageSpeedSamples += 1;

    const wrongLane = this.player.x < 0 && ["two-way", "police", "hardcore"].includes(this.currentMode.id);
    if (wrongLane && speedKph > 90) {
      this.session.wrongLaneTime += dt;
      this.session.combo = clamp(this.session.combo + dt * 0.05, 1, 6.5);
      this.session.bestCombo = Math.max(this.session.bestCombo, this.session.combo);
    }

    const speedScore = this.player.speedMps * 3.8 * dt;
    const distanceScore = this.player.speedMps * 0.42 * dt;
    const riskBonus = wrongLane ? 1.35 : 1;
    const weatherBonus = ["rain", "storm", "night", "fog"].includes(this.weatherState.current) ? 1.14 : 1;
    const activeCameraBonus = this.cameraMode === "cockpit" ? 1.08 : this.cameraMode === "hood" ? 1.04 : 1;
    const cruiseScore = (speedScore + distanceScore) * this.session.combo * riskBonus * weatherBonus * activeCameraBonus * this.currentMode.reward;
    this.session.score += cruiseScore;
    this.session.displayMoney = this.estimateMoneyReward();

    if (speedKph > 75) {
      this.session.comboTimer = clamp(this.session.comboTimer + dt * 0.17, 0, 1);
    } else {
      this.session.comboTimer = clamp(this.session.comboTimer - dt * 0.4, 0, 1);
    }

    if (this.session.comboTimer <= 0.02) {
      this.session.combo = damp(this.session.combo, 1, 3.5, dt);
      this.session.closeCallStreak = 0;
    }

    if (this.currentMode.id === "career") {
      const activeMission = MISSIONS.find((mission) => this.saveData.missionProgress[mission.id] < mission.goal);
      if (activeMission) {
        this.session.objective = activeMission.title;
      }
    } else if (this.currentMode.timer > 0) {
      this.session.objective = `${this.getCurrentObjective(this.currentMode)} ${Math.max(0, this.session.timerRemaining).toFixed(0)}s`;
    }

    if (this.currentMode.id === "delivery" && this.player.damage > 0.84) {
      this.startCrashReplay("Delivery failed");
      this.updateHUD();
      return;
    }

    if (this.currentMode.id === "free" && this.player.damage > 0.98) {
      this.endRun("Vehicle needs repairs", false);
      return;
    }

    if (this.currentMode.timer > 0 && this.session.timerRemaining <= 0) {
      const title =
        this.currentMode.id === "delivery"
          ? "Delivery complete"
          : this.currentMode.id === "time-trial"
            ? "Time trial complete"
            : "Timer complete";
      this.endRun(title, true);
      return;
    }

    if (this.player.damage >= 0.98 && !this.currentMode.hardcore) {
      this.startCrashReplay("Vehicle disabled");
      this.updateHUD();
      return;
    }

    this.updateHUD();
  }

  startCrashReplay(reason) {
    if (!this.session || this.phase === "crashReplay") return;
    this.phase = "crashReplay";
    this.session.crashReplayTimer = 2.8;
    this.session.endReason = reason;
    this.cameraMode = "cinematic";
    this.player.hazard = true;
    this.pushEvent("Crash replay engaged.");
  }

  estimateMoneyReward() {
    if (!this.session) return 0;
    const avgSpeed = this.session.averageSpeedSamples
      ? this.session.averageSpeedAccumulator / this.session.averageSpeedSamples
      : 0;
    const base =
      this.session.distanceKm * 185 +
      this.session.score * 0.09 +
      this.session.nearMisses * 70 +
      avgSpeed * 1.9 +
      this.session.topSpeed * 0.8;
    const bonuses =
      this.currentMode.reward *
      (1 +
        (this.session.noCrash ? 0.15 : 0) +
        (["rain", "storm"].includes(this.weatherState.current) ? 0.08 : 0) +
        (this.cameraMode === "cockpit" ? 0.05 : 0));
    return Math.max(0, Math.round(base * bonuses + this.session.policeEscapeBonus));
  }

  updateHUD() {
    if (!this.session) return;
    const speedKph = mpsToKph(this.player.speedMps);
    this.ui.setHUD({
      modeName: this.currentMode.name,
      objective: this.session.objective,
      cameraName: this.getCameraLabel(this.cameraMode),
      wantedLevel: this.session.wantedLevel,
      speed: speedKph,
      rpm: this.player.rpm,
      gear: this.player.gear,
      score: this.session.score,
      combo: this.session.combo,
      money: this.session.displayMoney,
      distance: this.session.distanceKm,
      topSpeed: this.session.topSpeed,
      nitro: this.player.nitro / (this.getPerformanceSpec().nitroCapacity || 1),
      damage: this.player.damage,
      comboTimer: this.session.comboTimer
    });
    this.ui.drawMiniMap(
      {
        x: this.player.x,
        z: this.player.z,
        laneX: this.player.x / this.road.laneWidth,
        laneWidth: this.road.laneWidth
      },
      this.traffic,
      this.police,
      this.saveData.settings.showMap
    );
  }

  updateRoad(dt) {
    this.road.segments.forEach((segment) => {
      if (segment.position.z + this.road.segmentLength * 0.5 < this.player.z - this.road.segmentLength * 5) {
        segment.position.z += this.road.segmentLength * this.road.segmentCount;
      }
    });
    this.cloudGroup.children.forEach((cloud, index) => {
      cloud.position.z += dt * cloud.userData.drift * 8;
      cloud.position.x += Math.sin(this.player.z * 0.0008 + index) * dt * 0.8;
      if (cloud.position.z > this.player.z + 720) {
        cloud.position.z = this.player.z - 720;
      }
    });
  }

  updateParticles(dt) {
    this.particles.forEach((particle) => {
      if (particle.life <= 0) return;
      particle.life -= dt;
      if (particle.life <= 0) {
        particle.sprite.visible = false;
        particle.sprite.material.opacity = 0;
        return;
      }
      particle.velocity.multiplyScalar(Math.pow(particle.drag, dt * 60));
      particle.velocity.y -= particle.gravity * dt;
      particle.sprite.position.addScaledVector(particle.velocity, dt);
      const alpha = particle.life / particle.maxLife;
      particle.sprite.material.opacity = alpha * 0.8;
      particle.sprite.scale.multiplyScalar(1 + dt * 0.42);
    });
  }

  updateCamera(dt, intro = false) {
    const shake = this.saveData.settings.cameraShake * clamp(this.player.speedMps / kmhToMps(260), 0, 1);
    this.tmpVec.set(
      Math.sin(performance.now() * 0.018) * shake * 0.08,
      Math.cos(performance.now() * 0.026) * shake * 0.05,
      0
    );
    const anchors = this.playerCar?.userData?.cameraAnchors;
    if (this.playerCar?.userData?.glassMaterial) {
      applyGlassTint(this.playerCar.userData.glassMaterial, this.saveData.customization.windowTint, false);
      this.playerCar.userData.glassMaterial.opacity *= 1 - this.player.damage * 0.22;
    }

    if (this.phase === "menu") {
      const camera = this.cameras.orbit;
      const orbitRadius = 6.8;
      const angle = performance.now() * 0.00018;
      camera.position.set(
        this.playerCar.position.x + Math.cos(angle) * orbitRadius,
        2.45 + Math.sin(angle * 1.6) * 0.25,
        this.playerCar.position.z + Math.sin(angle) * orbitRadius
      );
      camera.lookAt(this.playerCar.position.x, 1.05, this.playerCar.position.z);
      this.activeCamera = camera;
      return;
    }

    if (this.cameraMode === "cinematic" || intro || this.phase === "crashReplay") {
      const camera = this.cameras.cinematic;
      const angle = performance.now() * 0.0014;
      const radius = intro ? 9.4 : 8.1;
      camera.position.set(
        this.player.x + Math.sin(angle) * radius,
        intro ? 2.9 : 2.35 + Math.sin(angle * 1.2) * 0.35,
        this.player.z + Math.cos(angle) * radius * (intro ? 1 : 0.55)
      );
      camera.lookAt(this.player.x, 1.1, this.player.z + (intro ? 16 : 1));
      this.activeCamera = camera;
      this.ui.toggleCockpit(false, 0, clamp(this.player.damage * 1.1, 0, 0.75));
      return;
    }

    if (this.cameraMode === "cockpit") {
      const camera = this.cameras.cockpit;
      applyGlassTint(this.playerCar.userData.glassMaterial, this.saveData.customization.windowTint, true);
      this.playerCar.userData.glassMaterial.opacity *= 1 - this.player.damage * 0.22;
      anchors.cockpitAnchor.getWorldPosition(this.cameraPosition);
      anchors.cockpitLookTarget.getWorldPosition(this.cameraTarget);
      this.cameraTarget.x += this.player.steering * 1.25;
      this.cameraTarget.z += clamp(this.player.speedMps * 0.12, 0, 8);
      this.cameraPosition.add(this.tmpVec);
      camera.position.lerp(this.cameraPosition, 1 - Math.exp(-14 * dt));
      camera.lookAt(this.cameraTarget);
      this.activeCamera = camera;
      this.ui.toggleCockpit(
        true,
        clamp(WEATHER_PRESETS[this.weatherState.current].rain * 0.3 + this.player.speedMps * 0.0012, 0, 0.72),
        clamp(this.player.damage * 1.1, 0, 0.78)
      );
      return;
    }

    if (this.cameraMode === "hood") {
      const camera = this.cameras.hood;
      anchors.hoodAnchor.getWorldPosition(this.cameraPosition);
      anchors.hoodLookTarget.getWorldPosition(this.cameraTarget);
      this.cameraTarget.x += this.player.steering * 1.9;
      this.cameraPosition.addScaledVector(this.tmpVec, 0.9);
      camera.position.lerp(this.cameraPosition, 1 - Math.exp(-12 * dt));
      camera.lookAt(this.cameraTarget);
      this.activeCamera = camera;
      this.ui.toggleCockpit(false);
      return;
    }

    const camera = this.cameras.chase;
    anchors.chaseAnchor.getWorldPosition(this.cameraTarget);
    this.cameraPosition.set(
      this.player.x + this.player.steering * -1.15,
      1.85 + shake * 0.28,
      this.player.z - 5.9 - clamp(this.player.speedMps / kmhToMps(260), 0, 1) * 1.6
    );
    camera.position.lerp(this.cameraPosition, 1 - Math.exp(-5.6 * dt));
    this.cameraTarget.y += 0.05;
    this.cameraTarget.z += 9 + clamp(this.player.speedMps / kmhToMps(260), 0, 1) * 8;
    camera.lookAt(this.cameraTarget);
    camera.position.add(this.tmpVec);
    this.activeCamera = camera;
    this.ui.toggleCockpit(false);
  }

  recordLeaderboardEntry(summary) {
    const result = addLeaderboardEntry({
      nickname: this.session.nickname,
      modeId: this.currentMode.id,
      modeName: this.currentMode.name,
      score: summary.score,
      distanceKm: summary.distance,
      topSpeed: summary.topSpeed,
      nearMisses: summary.nearMisses,
      bestCombo: summary.bestCombo,
      createdAt: new Date().toISOString()
    });
    this.leaderboard = result.entries;
    this.ui.renderLeaderboard(this.leaderboard);
    return result;
  }

  endRun(title, timerFinished = false, fromReplay = false) {
    if (!this.session || this.session.ended) return;
    this.session.ended = true;
    this.pauseSettingsOpen = false;

    const averageSpeed = this.session.averageSpeedSamples
      ? this.session.averageSpeedAccumulator / this.session.averageSpeedSamples
      : 0;
    const moneyEarned = this.estimateMoneyReward();
    const repairCost = Math.round(this.session.repairCost + this.player.damage * 1100);
    const netMoney = Math.max(0, moneyEarned - repairCost);

    this.saveData.money += netMoney;
    this.saveData.stats.totalMoneyEarned += moneyEarned;
    this.saveData.stats.totalDistanceKm += this.session.distanceKm;
    this.saveData.stats.totalNearMisses += this.session.nearMisses;
    this.saveData.stats.totalRuns += 1;
    this.saveData.stats.bestScore = Math.max(this.saveData.stats.bestScore, Math.round(this.session.score));
    this.saveData.stats.bestSpeed = Math.max(this.saveData.stats.bestSpeed, Math.round(this.session.topSpeed));
    this.updateProgression(netMoney);
    this.updateMissionProgress(timerFinished);
    this.updateAchievements();
    saveProgress(this.saveData);
    this.refreshUI();

    const runSummary = {
      score: this.session.score,
      distance: this.session.distanceKm,
      topSpeed: this.session.topSpeed,
      nearMisses: this.session.nearMisses,
      averageSpeed,
      bestCombo: this.session.bestCombo,
      repairCost,
      moneyEarned: netMoney
    };
    const leaderboardResult = this.recordLeaderboardEntry(runSummary);

    this.ui.showResults({
      title,
      nickname: this.session.nickname,
      leaderboardRank: leaderboardResult.rank,
      ...runSummary
    });

    this.phase = "results";
    this.cameraMode = fromReplay ? "cinematic" : "orbit";
    this.ui.toggleHUD(false);
    this.ui.togglePause(false);
    this.ui.toggleResults(true);
    this.ui.toggleMenu(false);
    this.ui.setPauseSettingsOpen(false);
    this.player.hazard = false;
    this.audio.setSceneState({ menu: true, paused: false, running: false });
  }

  updateProgression(netMoney) {
    const xpGain = Math.round(this.session.score * 0.08 + this.session.distanceKm * 120 + this.session.nearMisses * 18);
    this.saveData.xp += xpGain;
    const levelThreshold = () => this.saveData.level * 1800;
    while (this.saveData.xp >= levelThreshold()) {
      this.saveData.xp -= levelThreshold();
      this.saveData.level += 1;
      if (this.saveData.level % 3 === 0) this.saveData.unlockedRoutes += 1;
      this.saveData.money += 1200;
      this.pushEvent(`Level up! Driver level ${this.saveData.level}.`);
    }
    this.saveData.money = Math.max(0, this.saveData.money);
  }

  updateMissionProgress(timerFinished) {
    const missionProgress = this.saveData.missionProgress;
    missionProgress.m1 = Math.max(missionProgress.m1, this.session.noCrash ? this.session.distanceKm : missionProgress.m1);
    missionProgress.m2 = Math.max(missionProgress.m2, this.session.topSpeed);
    missionProgress.m3 = Math.max(missionProgress.m3, this.session.nearMisses);
    missionProgress.m4 = Math.max(missionProgress.m4, this.session.policeEscapeTime);
    missionProgress.m5 = Math.max(
      missionProgress.m5,
      this.currentMode.id === "night" && this.player.headlights && this.session.distanceKm > 1 ? 1 : missionProgress.m5
    );
    missionProgress.m6 = Math.max(
      missionProgress.m6,
      ["rain", "storm"].includes(this.weatherState.current) ? this.session.distanceKm : missionProgress.m6
    );
    missionProgress.m7 = Math.max(missionProgress.m7, this.session.truckPasses);
    missionProgress.m8 = Math.max(missionProgress.m8, this.session.bestCombo);
    missionProgress.m9 = Math.max(missionProgress.m9, this.currentMode.id === "time-trial" && timerFinished ? 1 : missionProgress.m9);
    missionProgress.m10 = Math.max(missionProgress.m10, this.session.wrongLaneTime);

    MISSIONS.forEach((mission) => {
      if (missionProgress[mission.id] >= mission.goal && !this.saveData.completedMissionRewards?.includes(mission.id)) {
        this.saveData.money += mission.reward;
        this.saveData.completedMissionRewards = this.saveData.completedMissionRewards ?? [];
        this.saveData.completedMissionRewards.push(mission.id);
        this.pushEvent(`Mission complete: ${mission.title}`);
      }
    });
  }

  updateAchievements() {
    const stats = this.saveData.stats;
    const achievements = this.saveData.achievements;
    if (stats.totalDistanceKm >= 10) achievements.a1 = true;
    if (this.session.bestNearMissStreak >= 5) achievements.a2 = true;
    if (this.currentMode.id === "night" && this.player.headlights && this.session.distanceKm > 1) achievements.a3 = true;
    if (this.currentMode.id === "police" && this.session.peakWantedLevel >= 3 && this.session.policeEscapeBonus > 0) achievements.a4 = true;
  }

  updateAmbient(dt) {
    this.updatePlayer(dt, true);
    this.updateRoad(dt);
    this.updateWeather(dt);
    this.updateRain(dt);
    this.updateCamera(dt);
    while (this.traffic.length < 8) this.spawnTrafficVehicle(false, null, null, false);
    const remove = [];
    this.traffic.forEach((vehicle) => {
      vehicle.z += vehicle.direction * vehicle.speedMps * dt;
      vehicle.mesh.position.set(vehicle.laneX, 0, vehicle.z);
      const relativeZ = vehicle.z - this.player.z;
      if (relativeZ < -180 || relativeZ > 620) remove.push(vehicle);
    });
    remove.forEach((vehicle) => {
      this.trafficGroup.remove(vehicle.mesh);
      this.traffic.splice(this.traffic.indexOf(vehicle), 1);
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const now = performance.now();
    let dt = (now - this.lastTick) / 1000;
    this.lastTick = now;
    dt = Math.min(dt, 0.05);

    this.input.pollGamepad();
    this.handleActions();

    if (this.phase === "menu" || this.phase === "results") {
      this.updateAmbient(dt);
    } else if (this.phase === "running" || this.phase === "intro" || this.phase === "crashReplay") {
      this.updateRun(dt);
    }

    if (this.phase === "paused") {
      this.updateCamera(dt);
    }

    this.renderPass.camera = this.activeCamera;
    this.composer.render();
  }
}
