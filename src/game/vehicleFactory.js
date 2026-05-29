import * as THREE from "three";

const clamp01 = (value) => Math.min(1, Math.max(0, value));

export function getGlassAppearance(windowTint = 0.55) {
  const tint = clamp01(Number(windowTint));
  const color = new THREE.Color(0xbfeeff).lerp(new THREE.Color(0x05090f), tint * 0.78);
  return {
    color,
    opacity: 0.52 + tint * 0.34,
    transmission: Math.max(0.03, 0.24 - tint * 0.18)
  };
}

export function applyGlassTint(material, windowTint = 0.55, cockpitView = false) {
  const appearance = getGlassAppearance(windowTint);
  material.color.copy(appearance.color);
  material.opacity = cockpitView ? Math.min(appearance.opacity, 0.22) : appearance.opacity;
  material.transmission = appearance.transmission;
  material.needsUpdate = true;
}

function createWheel(radius, width, wheelStyle = "sport", caliperColor = "#ff542d") {
  const group = new THREE.Group();
  const tire = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, width, 20),
    new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.9,
      metalness: 0.1
    })
  );
  tire.rotation.z = Math.PI / 2;
  tire.castShadow = true;
  tire.receiveShadow = true;
  group.add(tire);

  const rimGeometry = new THREE.CylinderGeometry(radius * 0.65, radius * 0.65, width * 0.7, 10);
  const rimMaterial = new THREE.MeshStandardMaterial({
    color: wheelStyle === "mesh" ? 0xb7c2d0 : wheelStyle === "track" ? 0x2d2d2d : 0x454c56,
    roughness: 0.38,
    metalness: 0.9
  });
  const rim = new THREE.Mesh(rimGeometry, rimMaterial);
  rim.rotation.z = Math.PI / 2;
  group.add(rim);

  const caliper = new THREE.Mesh(
    new THREE.BoxGeometry(width * 0.18, radius * 0.65, radius * 0.18),
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(caliperColor),
      roughness: 0.35,
      metalness: 0.35
    })
  );
  caliper.position.set(0, 0.15, radius * 0.18);
  group.add(caliper);

  return group;
}

function makeLightBar(color, width, height, depth, emissiveStrength = 1.8) {
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    emissiveIntensity: emissiveStrength,
    roughness: 0.08,
    metalness: 0.1
  });
  return new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
}

export function createPlayerCar(customization = {}) {
  const root = new THREE.Group();
  root.name = "playerCar";

  const paintColor = customization.paintColor ?? "#3c435a";
  const finishType = customization.finishType ?? "gloss";
  const headlightColor = customization.headlightColor ?? "#dff5ff";
  const interiorColor = customization.interiorColor ?? "#101113";
  const caliperColor = customization.caliperColor ?? "#ff542d";
  const windowTint = customization.windowTint ?? 0.55;
  const wheelStyle = customization.wheelStyle ?? "sport";

  const finishPresets = {
    matte: { roughness: 0.7, metalness: 0.25 },
    gloss: { roughness: 0.28, metalness: 0.6 },
    metallic: { roughness: 0.22, metalness: 0.82 },
    pearl: { roughness: 0.15, metalness: 0.7 },
    chrome: { roughness: 0.08, metalness: 1 },
    carbon: { roughness: 0.45, metalness: 0.52 }
  };

  const paintMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(paintColor),
    emissive: new THREE.Color(paintColor).multiplyScalar(0.08),
    emissiveIntensity: 0.35,
    clearcoat: 1,
    clearcoatRoughness: finishType === "matte" ? 0.45 : 0.06,
    reflectivity: 1,
    ...finishPresets[finishType]
  });
  paintMaterial.userData.baseClearcoatRoughness = paintMaterial.clearcoatRoughness;

  const shadowMaterial = new THREE.MeshStandardMaterial({
    color: 0x131418,
    roughness: 0.86,
    metalness: 0.25
  });

  const glassAppearance = getGlassAppearance(windowTint);
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: glassAppearance.color,
    transparent: true,
    opacity: glassAppearance.opacity,
    roughness: 0.05,
    metalness: 0.1,
    transmission: glassAppearance.transmission,
    thickness: 0.08
  });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.08, 0.48, 4.9), paintMaterial);
  chassis.position.y = 0.65;
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  root.add(chassis);

  const lowerSill = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.18, 4.55), shadowMaterial);
  lowerSill.position.y = 0.39;
  lowerSill.castShadow = true;
  root.add(lowerSill);

  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.84, 0.18, 1.55), paintMaterial);
  hood.position.set(0, 0.87, 1.13);
  hood.rotation.x = -0.09;
  hood.castShadow = true;
  root.add(hood);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.2, 1.7), paintMaterial);
  roof.position.set(0, 1.38, -0.15);
  roof.castShadow = true;
  root.add(roof);

  const greenhouse = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.56, 2.15), glassMaterial);
  greenhouse.position.set(0, 1.1, -0.08);
  greenhouse.castShadow = true;
  root.add(greenhouse);

  const rearDeck = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.16, 1.15), paintMaterial);
  rearDeck.position.set(0, 0.96, -1.8);
  rearDeck.rotation.x = 0.06;
  rearDeck.castShadow = true;
  root.add(rearDeck);

  const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.42, 0.58), shadowMaterial);
  frontBumper.position.set(0, 0.48, 2.42);
  frontBumper.castShadow = true;
  root.add(frontBumper);

  const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.42, 0.6), shadowMaterial);
  rearBumper.position.set(0, 0.49, -2.4);
  rearBumper.castShadow = true;
  root.add(rearBumper);

  const grilleLeft = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.24, 0.08), shadowMaterial);
  grilleLeft.position.set(-0.23, 0.76, 2.46);
  root.add(grilleLeft);
  const grilleRight = grilleLeft.clone();
  grilleRight.position.x *= -1;
  root.add(grilleRight);

  const splitter = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 0.46), shadowMaterial);
  splitter.position.set(0, 0.27, 2.43);
  root.add(splitter);

  const spoiler = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.06, 0.4), shadowMaterial);
  spoiler.position.set(0, 1.1, -2.38);
  root.add(spoiler);

  const spoilerStandLeft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.14, 0.08), shadowMaterial);
  spoilerStandLeft.position.set(-0.35, 0.98, -2.3);
  root.add(spoilerStandLeft);
  const spoilerStandRight = spoilerStandLeft.clone();
  spoilerStandRight.position.x *= -1;
  root.add(spoilerStandRight);

  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.3), shadowMaterial);
  diffuser.position.set(0, 0.3, -2.46);
  root.add(diffuser);

  const exhaustLeft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.07, 0.26, 12),
    new THREE.MeshStandardMaterial({ color: 0x888c92, roughness: 0.3, metalness: 0.95 })
  );
  exhaustLeft.rotation.x = Math.PI / 2;
  exhaustLeft.position.set(-0.42, 0.35, -2.57);
  root.add(exhaustLeft);
  const exhaustRight = exhaustLeft.clone();
  exhaustRight.position.x *= -1;
  root.add(exhaustRight);

  const headlightL = makeLightBar(headlightColor, 0.38, 0.1, 0.08, 2.2);
  headlightL.position.set(-0.68, 0.84, 2.35);
  root.add(headlightL);
  const headlightR = headlightL.clone();
  headlightR.position.x *= -1;
  root.add(headlightR);

  const indicatorFL = makeLightBar("#ffb347", 0.14, 0.08, 0.06, 0.2);
  indicatorFL.position.set(-0.93, 0.78, 2.34);
  root.add(indicatorFL);
  const indicatorFR = indicatorFL.clone();
  indicatorFR.position.x *= -1;
  root.add(indicatorFR);

  const taillightL = makeLightBar("#ff3e3e", 0.48, 0.1, 0.08, 2.4);
  taillightL.position.set(-0.62, 0.84, -2.35);
  root.add(taillightL);
  const taillightR = taillightL.clone();
  taillightR.position.x *= -1;
  root.add(taillightR);

  const indicatorRL = makeLightBar("#ff914d", 0.13, 0.08, 0.06, 0.2);
  indicatorRL.position.set(-0.93, 0.78, -2.34);
  root.add(indicatorRL);
  const indicatorRR = indicatorRL.clone();
  indicatorRR.position.x *= -1;
  root.add(indicatorRR);

  const reverseLeft = makeLightBar("#f1fbff", 0.12, 0.08, 0.06, 0.12);
  reverseLeft.position.set(-0.17, 0.78, -2.34);
  root.add(reverseLeft);
  const reverseRight = reverseLeft.clone();
  reverseRight.position.x *= -1;
  root.add(reverseRight);

  const interior = new THREE.Group();
  const dashboard = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, 0.2, 0.72),
    new THREE.MeshStandardMaterial({
      color: new THREE.Color(interiorColor),
      roughness: 0.85,
      metalness: 0.08
    })
  );
  dashboard.position.set(0, 1.0, 0.82);
  interior.add(dashboard);

  const cluster = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.14, 0.12),
    new THREE.MeshStandardMaterial({
      color: 0x08131f,
      emissive: 0x103852,
      emissiveIntensity: 1.1
    })
  );
  cluster.position.set(-0.33, 1.06, 0.72);
  interior.add(cluster);

  const centerScreen = new THREE.Mesh(
    new THREE.BoxGeometry(0.34, 0.18, 0.05),
    new THREE.MeshStandardMaterial({
      color: 0x081622,
      emissive: 0x1db7ff,
      emissiveIntensity: 0.9
    })
  );
  centerScreen.position.set(0.25, 1.06, 0.74);
  interior.add(centerScreen);

  const seatMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(interiorColor).offsetHSL(0, 0, 0.08),
    roughness: 0.95,
    metalness: 0.02
  });
  const seatLeft = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.5, 0.6), seatMaterial);
  seatLeft.position.set(-0.42, 0.88, -0.25);
  interior.add(seatLeft);
  const seatRight = seatLeft.clone();
  seatRight.position.x *= -1;
  interior.add(seatRight);

  const steeringWheel = new THREE.Mesh(
    new THREE.TorusGeometry(0.19, 0.028, 12, 30),
    new THREE.MeshStandardMaterial({ color: 0x1e1f21, roughness: 0.55, metalness: 0.32 })
  );
  steeringWheel.position.set(-0.45, 1.03, 0.52);
  steeringWheel.rotation.set(0.7, 0, 0.18);
  interior.add(steeringWheel);

  const cockpitAnchor = new THREE.Object3D();
  cockpitAnchor.position.set(-0.33, 1.13, 0.48);
  interior.add(cockpitAnchor);

  const cockpitLookTarget = new THREE.Object3D();
  cockpitLookTarget.position.set(-0.25, 1.0, 5.8);
  interior.add(cockpitLookTarget);

  const hoodAnchor = new THREE.Object3D();
  hoodAnchor.position.set(0, 1.01, 1.78);
  root.add(hoodAnchor);

  const hoodLookTarget = new THREE.Object3D();
  hoodLookTarget.position.set(0, 0.9, 7.1);
  root.add(hoodLookTarget);

  const chaseAnchor = new THREE.Object3D();
  chaseAnchor.position.set(0, 1.32, -1.1);
  root.add(chaseAnchor);

  root.add(interior);

  const wheelOffsets = [
    [-0.93, 0.46, 1.45],
    [0.93, 0.46, 1.45],
    [-0.93, 0.46, -1.52],
    [0.93, 0.46, -1.52]
  ];
  const wheels = wheelOffsets.map(([x, y, z]) => {
    const wheel = createWheel(0.39, 0.32, wheelStyle, caliperColor);
    wheel.position.set(x, y, z);
    root.add(wheel);
    return wheel;
  });

  const brakeLights = [taillightL, taillightR];
  const headLights = [headlightL, headlightR];

  root.userData = {
    size: { width: 2.12, length: 4.95, height: 1.58 },
    paintMaterial,
    glassMaterial,
    headLights,
    brakeLights,
    wheels,
    steeringWheel,
    interior,
    cameraAnchors: {
      cockpitAnchor,
      cockpitLookTarget,
      hoodAnchor,
      hoodLookTarget,
      chaseAnchor
    },
    indicators: {
      frontLeft: indicatorFL,
      frontRight: indicatorFR,
      rearLeft: indicatorRL,
      rearRight: indicatorRR,
      reverseLeft,
      reverseRight
    },
    headlightColor,
    damageParts: {
      frontBumper,
      rearBumper,
      headlightL,
      headlightR,
      greenhouse
    }
  };

  return root;
}

function vehicleMaterial(color) {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(color).multiplyScalar(0.035),
    emissiveIntensity: 0.5,
    roughness: 0.36,
    metalness: 0.72
  });
}

export function createTrafficVehicle(type = "car", options = {}) {
  const group = new THREE.Group();
  group.name = `traffic-${type}`;
  const colors = options.colorPalette ?? [
    0xf5f8ff,
    0x62d9ff,
    0xff674d,
    0xffc44d,
    0x83f28f,
    0xb987ff,
    0x9aa8ba
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const paint = vehicleMaterial(color);
  const dark = new THREE.MeshStandardMaterial({ color: 0x15171c, roughness: 0.8, metalness: 0.35 });

  const addLights = (frontZ, rearZ, width, height) => {
    const frontL = makeLightBar("#dff2ff", width, height, 0.05, 1.4);
    frontL.position.set(-0.45, 0.72, frontZ);
    group.add(frontL);
    const frontR = frontL.clone();
    frontR.position.x *= -1;
    group.add(frontR);

    const rearL = makeLightBar("#ff3d4e", width + 0.05, height, 0.05, 1.8);
    rearL.position.set(-0.45, 0.72, rearZ);
    group.add(rearL);
    const rearR = rearL.clone();
    rearR.position.x *= -1;
    group.add(rearR);

    group.userData.headlights = [frontL, frontR];
    group.userData.brakelights = [rearL, rearR];
  };

  if (type === "motorcycle") {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.25, 1.25), paint);
    body.position.y = 0.5;
    body.castShadow = true;
    group.add(body);
    const rider = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.46, 0.28), dark);
    rider.position.set(0, 0.9, -0.1);
    group.add(rider);
    const frontWheel = createWheel(0.23, 0.12, "track", "#ff8233");
    frontWheel.position.set(0, 0.3, 0.42);
    group.add(frontWheel);
    const rearWheel = createWheel(0.23, 0.14, "track", "#ff8233");
    rearWheel.position.set(0, 0.3, -0.46);
    group.add(rearWheel);
    addLights(0.65, -0.64, 0.08, 0.08);
    group.userData.size = { width: 0.7, length: 1.5, height: 1.2 };
  } else if (type === "van") {
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.45, 4.2), paint);
    body.position.y = 1;
    body.castShadow = true;
    group.add(body);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.85, 1.2), dark);
    cab.position.set(0, 1.4, 1.0);
    group.add(cab);
    addLights(2.06, -2.06, 0.28, 0.1);
    group.userData.size = { width: 2, length: 4.3, height: 2.2 };
  } else if (type === "bus") {
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.35, 1.85, 7.5), paint);
    body.position.y = 1.25;
    body.castShadow = true;
    group.add(body);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.16, 7.15), dark);
    stripe.position.set(0, 0.85, 0);
    group.add(stripe);
    addLights(3.72, -3.72, 0.32, 0.12);
    group.userData.size = { width: 2.45, length: 7.6, height: 2.7 };
  } else if (type === "truck") {
    const trailer = new THREE.Mesh(new THREE.BoxGeometry(2.55, 2.15, 7.1), paint);
    trailer.position.set(0, 1.45, -0.7);
    trailer.castShadow = true;
    group.add(trailer);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.7, 2), dark);
    cab.position.set(0, 1.2, 3);
    cab.castShadow = true;
    group.add(cab);
    addLights(4.0, -4.1, 0.35, 0.12);
    group.userData.size = { width: 2.6, length: 8.6, height: 3.2 };
  } else if (type === "police") {
    const base = createTrafficVehicle("car", options);
    base.userData.isPolice = true;
    const lightBar = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.12, 0.16),
      new THREE.MeshStandardMaterial({
        color: 0xddeeff,
        emissive: 0x8fd0ff,
        emissiveIntensity: 2.5
      })
    );
    lightBar.position.set(0, 1.55, -0.1);
    base.add(lightBar);
    base.userData.lightBar = lightBar;
    return base;
  } else {
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.55, 4.35), paint);
    body.position.y = 0.62;
    body.castShadow = true;
    group.add(body);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.5, 1.7), dark);
    roof.position.set(0, 1.07, -0.2);
    group.add(roof);
    const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.32, 0.45), dark);
    frontBumper.position.set(0, 0.4, 2.1);
    group.add(frontBumper);
    const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.32, 0.45), dark);
    rearBumper.position.set(0, 0.4, -2.1);
    group.add(rearBumper);
    addLights(2.1, -2.1, 0.26, 0.1);
    group.userData.size = { width: 2.0, length: 4.45, height: 1.6 };
  }

  if (type !== "motorcycle") {
    const size = group.userData.size;
    const wheelZ = size.length * 0.32;
    const wheelX = size.width * 0.44;
    const wheelRadius = Math.max(0.26, Math.min(0.42, size.height * 0.18));
    const frontLeft = createWheel(wheelRadius, 0.24, options.wheelStyle ?? "sport", "#ff6b35");
    frontLeft.position.set(-wheelX, wheelRadius + 0.05, wheelZ);
    group.add(frontLeft);
    const frontRight = frontLeft.clone();
    frontRight.position.x *= -1;
    group.add(frontRight);
    const rearLeft = frontLeft.clone();
    rearLeft.position.z *= -1;
    group.add(rearLeft);
    const rearRight = frontRight.clone();
    rearRight.position.z *= -1;
    group.add(rearRight);
    group.userData.wheels = [frontLeft, frontRight, rearLeft, rearRight];
  }

  return group;
}
