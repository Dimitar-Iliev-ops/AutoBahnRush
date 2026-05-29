const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.volume = {
      master: 0.8,
      sfx: 0.85,
      music: 0.2,
      engine: 0.85,
      ambience: 0.45
    };

    this.master = null;
    this.engineBus = null;
    this.ambienceBus = null;
    this.musicBus = null;
    this.sfxBus = null;

    this.engine = null;
    this.siren = null;
    this.rain = null;
    this.horn = null;
    this.music = null;
    this.lastIndicatorPhase = false;
    this.lastGear = 1;
    this.sceneState = {
      menu: true,
      paused: false,
      running: false
    };
  }

  async start() {
    if (this.started) {
      if (this.ctx?.state === "suspended") await this.ctx.resume();
      return;
    }

    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.engineBus = this.ctx.createGain();
    this.ambienceBus = this.ctx.createGain();
    this.musicBus = this.ctx.createGain();
    this.sfxBus = this.ctx.createGain();

    this.master.connect(this.ctx.destination);
    this.engineBus.connect(this.master);
    this.ambienceBus.connect(this.master);
    this.musicBus.connect(this.master);
    this.sfxBus.connect(this.master);

    this.master.gain.value = this.volume.master;

    this.engine = this.createEngineRig();
    this.siren = this.createSiren();
    this.rain = this.createRainBus();
    this.horn = this.createHorn();
    this.music = this.createMusicBed();

    this.applyVolumeTargets();
    this.started = true;
    this.setSceneState(this.sceneState);
  }

  createEngineRig() {
    const createOsc = (type, frequency) => {
      const osc = this.ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = frequency;
      osc.start();
      return osc;
    };

    const idle = createOsc("sawtooth", 42);
    const mid = createOsc("triangle", 94);
    const top = createOsc("sine", 168);

    const idleGain = this.ctx.createGain();
    const midGain = this.ctx.createGain();
    const topGain = this.ctx.createGain();
    idleGain.gain.value = 0.11;
    midGain.gain.value = 0.09;
    topGain.gain.value = 0.04;

    const toneFilter = this.ctx.createBiquadFilter();
    toneFilter.type = "lowpass";
    toneFilter.frequency.value = 780;
    toneFilter.Q.value = 1.8;

    idle.connect(idleGain).connect(toneFilter);
    mid.connect(midGain).connect(toneFilter);
    top.connect(topGain).connect(this.engineBus);
    toneFilter.connect(this.engineBus);

    const intake = this.createNoiseSource("white");
    const intakeFilter = this.ctx.createBiquadFilter();
    intakeFilter.type = "bandpass";
    intakeFilter.frequency.value = 1100;
    intakeFilter.Q.value = 0.7;
    const intakeGain = this.ctx.createGain();
    intakeGain.gain.value = 0.02;
    intake.node.connect(intakeFilter).connect(intakeGain).connect(this.engineBus);

    const road = this.createNoiseSource("pinkish");
    const roadFilter = this.ctx.createBiquadFilter();
    roadFilter.type = "highpass";
    roadFilter.frequency.value = 360;
    const roadGain = this.ctx.createGain();
    roadGain.gain.value = 0.01;
    road.node.connect(roadFilter).connect(roadGain).connect(this.ambienceBus);

    const nitroOsc = createOsc("triangle", 260);
    const nitroGain = this.ctx.createGain();
    nitroGain.gain.value = 0;
    nitroOsc.connect(nitroGain).connect(this.engineBus);

    return {
      idle,
      mid,
      top,
      idleGain,
      midGain,
      topGain,
      toneFilter,
      intake,
      intakeFilter,
      intakeGain,
      road,
      roadFilter,
      roadGain,
      nitroOsc,
      nitroGain
    };
  }

  createNoiseSource(flavor = "white") {
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
    const channel = buffer.getChannelData(0);
    let previous = 0;

    for (let index = 0; index < channel.length; index += 1) {
      const white = Math.random() * 2 - 1;
      if (flavor === "pinkish") {
        previous = 0.985 * previous + 0.15 * white;
        channel[index] = previous;
      } else {
        channel[index] = white;
      }
    }

    const node = this.ctx.createBufferSource();
    node.buffer = buffer;
    node.loop = true;
    node.start();
    return { node };
  }

  createSiren() {
    const toneA = this.ctx.createOscillator();
    toneA.type = "square";
    toneA.frequency.value = 610;
    const toneB = this.ctx.createOscillator();
    toneB.type = "triangle";
    toneB.frequency.value = 760;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    toneA.connect(gain);
    toneB.connect(gain);
    gain.connect(this.sfxBus);
    toneA.start();
    toneB.start();
    return { toneA, toneB, gain };
  }

  createRainBus() {
    const rain = this.createNoiseSource("white");
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1000;
    filter.Q.value = 0.55;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    rain.node.connect(filter).connect(gain).connect(this.ambienceBus);
    return { rain, filter, gain };
  }

  createHorn() {
    const low = this.ctx.createOscillator();
    low.type = "square";
    low.frequency.value = 392;
    const high = this.ctx.createOscillator();
    high.type = "square";
    high.frequency.value = 466;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1450;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    low.connect(filter);
    high.connect(filter);
    filter.connect(gain).connect(this.sfxBus);
    low.start();
    high.start();
    return { low, high, gain };
  }

  createMusicBed() {
    const pad = this.ctx.createOscillator();
    pad.type = "sine";
    pad.frequency.value = 86;
    const upper = this.ctx.createOscillator();
    upper.type = "triangle";
    upper.frequency.value = 129;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 520;
    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    pad.connect(filter);
    upper.connect(filter);
    filter.connect(gain).connect(this.musicBus);
    pad.start();
    upper.start();
    return { pad, upper, gain };
  }

  applyVolumeTargets() {
    if (!this.started) return;
    this.master.gain.setTargetAtTime(this.volume.master, this.ctx.currentTime, 0.05);
  }

  setVolumes({
    masterVolume,
    sfxVolume,
    musicVolume,
    engineVolume = this.volume.engine,
    ambienceVolume = this.volume.ambience
  }) {
    this.volume.master = masterVolume;
    this.volume.sfx = sfxVolume;
    this.volume.music = musicVolume;
    this.volume.engine = engineVolume;
    this.volume.ambience = ambienceVolume;
    this.applyVolumeTargets();
    this.setSceneState(this.sceneState);
  }

  setSceneState({ menu = false, paused = false, running = false }) {
    this.sceneState = { menu, paused, running };
    if (!this.started) return;

    const menuBed = menu ? 0.05 * this.volume.music : running ? 0.012 * this.volume.music : 0.02 * this.volume.music;
    const ambience = running ? 0.22 * this.volume.ambience : 0.08 * this.volume.ambience;
    const engine = running ? 0.36 * this.volume.engine : menu ? 0.11 * this.volume.engine : 0.18 * this.volume.engine;

    this.music.gain.gain.setTargetAtTime(menuBed, this.ctx.currentTime, 0.2);
    this.ambienceBus.gain.setTargetAtTime(ambience, this.ctx.currentTime, 0.16);
    this.engineBus.gain.setTargetAtTime(paused ? 0.08 * this.volume.engine : engine, this.ctx.currentTime, 0.14);
    this.sfxBus.gain.setTargetAtTime(paused ? 0.45 * this.volume.sfx : this.volume.sfx, this.ctx.currentTime, 0.1);
  }

  playClick(frequency = 1100, gainLevel = 0.05, decay = 0.05) {
    if (!this.started) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.value = frequency;
    gain.gain.value = gainLevel * this.volume.sfx;
    osc.connect(gain).connect(this.sfxBus);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + decay);
    osc.stop(this.ctx.currentTime + decay + 0.01);
  }

  playShift(direction = 1) {
    if (!this.started) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.value = direction > 0 ? 220 : 180;
    filter.type = "bandpass";
    filter.frequency.value = direction > 0 ? 900 : 620;
    gain.gain.value = 0.02 * this.volume.engine;
    osc.connect(filter).connect(gain).connect(this.engineBus);
    osc.start();
    osc.frequency.exponentialRampToValueAtTime(direction > 0 ? 340 : 120, this.ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.1);
    osc.stop(this.ctx.currentTime + 0.12);
  }

  updateEngine({
    speedKph,
    rpm,
    nitroActive,
    weatherRain,
    policeActive,
    throttle = 0,
    brake = 0,
    gear = 1,
    hornActive = 0,
    indicatorActive = false,
    indicatorPhase = false,
    skidAmount = 0
  }) {
    if (!this.started) return;

    const rpmNorm = clamp((rpm - 900) / 6500, 0, 1);
    const speedNorm = clamp(speedKph / 320, 0, 1);
    const throttleLift = clamp(throttle * 0.75 + rpmNorm * 0.4, 0, 1.25);

    this.engine.idle.frequency.setTargetAtTime(34 + rpm * 0.011, this.ctx.currentTime, 0.06);
    this.engine.mid.frequency.setTargetAtTime(76 + rpm * 0.023, this.ctx.currentTime, 0.05);
    this.engine.top.frequency.setTargetAtTime(120 + rpm * 0.047, this.ctx.currentTime, 0.05);
    this.engine.idleGain.gain.setTargetAtTime((0.08 + rpmNorm * 0.06) * this.volume.engine, this.ctx.currentTime, 0.08);
    this.engine.midGain.gain.setTargetAtTime((0.06 + throttleLift * 0.08) * this.volume.engine, this.ctx.currentTime, 0.08);
    this.engine.topGain.gain.setTargetAtTime((0.02 + rpmNorm * 0.06) * this.volume.engine, this.ctx.currentTime, 0.07);
    this.engine.toneFilter.frequency.setTargetAtTime(520 + rpmNorm * 2800 + throttle * 800, this.ctx.currentTime, 0.06);
    this.engine.intakeFilter.frequency.setTargetAtTime(700 + rpmNorm * 3600, this.ctx.currentTime, 0.08);
    this.engine.intakeGain.gain.setTargetAtTime((0.01 + throttleLift * 0.03 + nitroActive * 0.015) * this.volume.engine, this.ctx.currentTime, 0.08);
    this.engine.roadGain.gain.setTargetAtTime((0.005 + speedNorm * 0.04 + skidAmount * 0.045) * this.volume.ambience, this.ctx.currentTime, 0.08);
    this.engine.roadFilter.frequency.setTargetAtTime(280 + speedNorm * 1100, this.ctx.currentTime, 0.08);
    this.engine.nitroOsc.frequency.setTargetAtTime(240 + speedNorm * 180, this.ctx.currentTime, 0.05);
    this.engine.nitroGain.gain.setTargetAtTime((nitroActive ? 0.045 : 0) * this.volume.engine, this.ctx.currentTime, 0.05);

    this.horn.gain.gain.setTargetAtTime(hornActive > 0 ? 0.06 * hornActive * this.volume.sfx : 0, this.ctx.currentTime, 0.04);
    this.horn.low.frequency.setTargetAtTime(392 - brake * 20, this.ctx.currentTime, 0.05);
    this.horn.high.frequency.setTargetAtTime(466 - brake * 24, this.ctx.currentTime, 0.05);

    if (indicatorActive && indicatorPhase && !this.lastIndicatorPhase) {
      this.playClick(1180, 0.04, 0.035);
      this.playClick(820, 0.018, 0.06);
    }
    this.lastIndicatorPhase = indicatorActive && indicatorPhase;

    if (gear !== this.lastGear) {
      this.playShift(gear > this.lastGear ? 1 : -1);
      this.lastGear = gear;
    }

    const sirenMod = (Math.sin(performance.now() * 0.012) + 1) * 0.5;
    this.siren.gain.gain.setTargetAtTime(policeActive ? 0.03 * this.volume.sfx : 0, this.ctx.currentTime, 0.08);
    this.siren.toneA.frequency.setTargetAtTime(590 + sirenMod * 160, this.ctx.currentTime, 0.08);
    this.siren.toneB.frequency.setTargetAtTime(760 - sirenMod * 120, this.ctx.currentTime, 0.08);

    this.rain.filter.frequency.setTargetAtTime(700 + weatherRain * 650, this.ctx.currentTime, 0.12);
    this.rain.gain.gain.setTargetAtTime(weatherRain * 0.08 * this.volume.ambience, this.ctx.currentTime, 0.18);

    const musicPitch = this.sceneState.menu ? 86 : 72 + speedNorm * 18;
    this.music.pad.frequency.setTargetAtTime(musicPitch, this.ctx.currentTime, 0.2);
    this.music.upper.frequency.setTargetAtTime(musicPitch * 1.5, this.ctx.currentTime, 0.2);
  }

  pulseCrash(intensity = 1) {
    if (!this.started) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.value = 68;
    filter.type = "lowpass";
    filter.frequency.value = 180;
    gain.gain.value = 0.13 * intensity * this.volume.sfx;
    osc.connect(filter).connect(gain).connect(this.sfxBus);
    osc.start();
    osc.frequency.exponentialRampToValueAtTime(26, this.ctx.currentTime + 0.24);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.24);
    osc.stop(this.ctx.currentTime + 0.28);
  }

  honk() {
    if (!this.started) return;
    this.playClick(540, 0.025, 0.02);
  }
}
