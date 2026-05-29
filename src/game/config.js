export const STORAGE_KEY = "autobahn-rush-save";

export const GAME_MODES = [
  {
    id: "endless",
    name: "Endless Traffic",
    desc: "Classic high-speed traffic weaving with escalating density and generous combo windows.",
    weather: "day",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 0,
    reward: 1
  },
  {
    id: "time-trial",
    name: "Time Trial",
    desc: "Beat the clock and hold high average speed while threading through medium-density traffic.",
    weather: "sunset",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 90,
    reward: 1.15
  },
  {
    id: "two-way",
    name: "Two-Way Traffic",
    desc: "Oncoming traffic turns wrong-lane overtakes into the highest-paying risk in the game.",
    weather: "day",
    trafficFlow: "two-way",
    police: false,
    hardcore: false,
    timer: 0,
    reward: 1.3
  },
  {
    id: "police",
    name: "Police Chase",
    desc: "Wanted level climbs fast as interceptor units spawn behind and beside the player.",
    weather: "night",
    trafficFlow: "two-way",
    police: true,
    hardcore: false,
    timer: 0,
    reward: 1.45
  },
  {
    id: "rain",
    name: "Rain Challenge",
    desc: "Low grip, long braking zones, and reflective asphalt push the handling model harder.",
    weather: "rain",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 0,
    reward: 1.35
  },
  {
    id: "night",
    name: "Night Run",
    desc: "Headlights, street lamps, bloom, and limited visibility raise the payout multiplier.",
    weather: "night",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 0,
    reward: 1.25
  },
  {
    id: "career",
    name: "Career Missions",
    desc: "Mission-focused sessions that rotate objectives and grant higher progression rewards.",
    weather: "sunset",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 120,
    reward: 1.25
  },
  {
    id: "free",
    name: "Free Ride",
    desc: "Cruise with low stakes, easier traffic, and damage instead of instant failure.",
    weather: "day",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 0,
    reward: 0.8
  },
  {
    id: "hardcore",
    name: "Hardcore Mode",
    desc: "One crash ends the run, damage hits harder, and combo decay is much less forgiving.",
    weather: "fog",
    trafficFlow: "two-way",
    police: false,
    hardcore: true,
    timer: 0,
    reward: 1.75
  },
  {
    id: "delivery",
    name: "Delivery Challenge",
    desc: "Balance speed with consistency while carrying a fragile timed package through dense traffic.",
    weather: "storm",
    trafficFlow: "one-way",
    police: false,
    hardcore: false,
    timer: 100,
    reward: 1.2
  }
];

export const MISSIONS = [
  { id: "m1", title: "Drive 5 km without crashing", goal: 5, type: "distance", reward: 1200 },
  { id: "m2", title: "Reach 200 km/h", goal: 200, type: "topSpeed", reward: 900 },
  { id: "m3", title: "Complete 20 near misses", goal: 20, type: "nearMiss", reward: 1500 },
  { id: "m4", title: "Escape police for 2 minutes", goal: 120, type: "policeTime", reward: 1800 },
  { id: "m5", title: "Finish a night run", goal: 1, type: "nightFinish", reward: 950 },
  { id: "m6", title: "Drive in rain for 3 km", goal: 3, type: "rainDistance", reward: 1100 },
  { id: "m7", title: "Overtake 10 trucks", goal: 10, type: "truckPass", reward: 1400 },
  { id: "m8", title: "Earn a 5x combo", goal: 5, type: "combo", reward: 1300 },
  { id: "m9", title: "Complete a time trial", goal: 1, type: "timeTrialFinish", reward: 1000 },
  { id: "m10", title: "Drive opposite lane for 30 seconds", goal: 30, type: "wrongLaneTime", reward: 1250 }
];

export const ACHIEVEMENTS = [
  {
    id: "a1",
    title: "Autobahn Rookie",
    desc: "Travel 10 km total.",
    type: "lifetimeDistance",
    goal: 10
  },
  {
    id: "a2",
    title: "Needle Threader",
    desc: "Chain 5 near misses in one run.",
    type: "streakNearMiss",
    goal: 5
  },
  {
    id: "a3",
    title: "Midnight Glow",
    desc: "Complete a night run with headlights on.",
    type: "nightHeadlights",
    goal: 1
  },
  {
    id: "a4",
    title: "Interceptor Breaker",
    desc: "Escape a wanted level of 3.",
    type: "escapeWanted",
    goal: 3
  }
];

export const UPGRADE_DEFS = [
  { id: "engine", label: "Engine Upgrade", max: 5, baseCost: 1000, effect: 0.08 },
  { id: "turbo", label: "Turbo Upgrade", max: 5, baseCost: 1200, effect: 0.1 },
  { id: "brakes", label: "Brake Upgrade", max: 5, baseCost: 800, effect: 0.08 },
  { id: "tires", label: "Tire Upgrade", max: 5, baseCost: 850, effect: 0.07 },
  { id: "suspension", label: "Suspension Upgrade", max: 5, baseCost: 850, effect: 0.06 },
  { id: "nitro", label: "Nitro Upgrade", max: 5, baseCost: 1000, effect: 0.12 },
  { id: "weight", label: "Weight Reduction", max: 5, baseCost: 900, effect: 0.05 },
  { id: "gearbox", label: "Gearbox Upgrade", max: 5, baseCost: 1050, effect: 0.06 },
  { id: "ecu", label: "ECU Tuning", max: 5, baseCost: 1100, effect: 0.07 },
  { id: "exhaust", label: "Exhaust Upgrade", max: 5, baseCost: 750, effect: 0.04 },
  { id: "diff", label: "Differential Upgrade", max: 5, baseCost: 900, effect: 0.05 }
];

export const TUNING_DEFS = [
  { id: "gearRatio", label: "Gear Ratio", min: 0.8, max: 1.4, step: 0.01, default: 1 },
  {
    id: "suspensionStiffness",
    label: "Suspension Stiffness",
    min: 0.6,
    max: 1.4,
    step: 0.01,
    default: 1
  },
  { id: "rideHeight", label: "Ride Height", min: 0.8, max: 1.2, step: 0.01, default: 1 },
  { id: "brakeBias", label: "Brake Bias", min: 0.4, max: 0.7, step: 0.01, default: 0.55 },
  { id: "tireGrip", label: "Tire Grip", min: 0.8, max: 1.4, step: 0.01, default: 1 },
  {
    id: "steeringSensitivity",
    label: "Steering Sensitivity",
    min: 0.7,
    max: 1.6,
    step: 0.01,
    default: 1
  },
  { id: "nitroPower", label: "Nitro Power", min: 0.8, max: 1.5, step: 0.01, default: 1 },
  { id: "driftAssist", label: "Drift Assist", min: 0, max: 1, step: 0.01, default: 0.5 },
  { id: "tractionControl", label: "Traction Control", min: 0, max: 1, step: 1, default: 1 },
  { id: "abs", label: "ABS", min: 0, max: 1, step: 1, default: 1 }
];

export const DEFAULT_SAVE = {
  money: 12500,
  level: 1,
  xp: 0,
  unlockedRoutes: 3,
  selectedMode: "endless",
  upgrades: Object.fromEntries(UPGRADE_DEFS.map((upgrade) => [upgrade.id, 0])),
  tuning: Object.fromEntries(TUNING_DEFS.map((tune) => [tune.id, tune.default])),
  customization: {
    paintColor: "#21a6ff",
    finishType: "gloss",
    wheelStyle: "sport",
    headlightColor: "#dff5ff",
    caliperColor: "#ff542d",
    interiorColor: "#101113",
    windowTint: 0.55
  },
  settings: {
    graphicsQuality: "high",
    cameraShake: 0.6,
    masterVolume: 0.8,
    musicVolume: 0.2,
    engineVolume: 0.85,
    ambienceVolume: 0.45,
    sfxVolume: 0.85,
    steerSensitivity: 1,
    steeringFilter: 0.4,
    steerReturnSpeed: 1.1,
    gamepadDeadzone: 0.14,
    autoHeadlights: true,
    touchLayout: "split",
    gamepadEnabled: true,
    showMap: true
  },
  stats: {
    totalDistanceKm: 0,
    totalNearMisses: 0,
    totalRuns: 0,
    bestScore: 0,
    bestSpeed: 0,
    totalMoneyEarned: 0
  },
  missionProgress: Object.fromEntries(MISSIONS.map((mission) => [mission.id, 0])),
  achievements: Object.fromEntries(ACHIEVEMENTS.map((achievement) => [achievement.id, false])),
  completedMissionRewards: [],
  dailyReward: {
    lastClaimDay: "",
    streak: 0
  }
};

export const WEATHER_PRESETS = {
  day: {
    skyTop: 0x7fc4ff,
    skyBottom: 0xcfe8ff,
    fog: 0xaec8de,
    ambient: 0xffffff,
    sun: 0xfff0d3,
    lightIntensity: 1.15,
    wetness: 0,
    rain: 0,
    night: 0
  },
  sunset: {
    skyTop: 0xff8a55,
    skyBottom: 0x3b4f7a,
    fog: 0x8b6f6d,
    ambient: 0xffe5ca,
    sun: 0xff9a4a,
    lightIntensity: 0.9,
    wetness: 0.06,
    rain: 0,
    night: 0.25
  },
  night: {
    skyTop: 0x0f2238,
    skyBottom: 0x132a44,
    fog: 0x15314a,
    ambient: 0xa8c5ff,
    sun: 0xc7ddff,
    lightIntensity: 0.52,
    wetness: 0.15,
    rain: 0,
    night: 1
  },
  rain: {
    skyTop: 0x5c758f,
    skyBottom: 0x2d3c49,
    fog: 0x586b77,
    ambient: 0xcdd9e2,
    sun: 0xe8eef7,
    lightIntensity: 0.78,
    wetness: 0.8,
    rain: 1,
    night: 0.2
  },
  storm: {
    skyTop: 0x3a5065,
    skyBottom: 0x1f2b35,
    fog: 0x43525f,
    ambient: 0xc0d8f0,
    sun: 0xdbe4f4,
    lightIntensity: 0.68,
    wetness: 1,
    rain: 1.6,
    night: 0.35
  },
  fog: {
    skyTop: 0xc3cad0,
    skyBottom: 0x7f8a92,
    fog: 0xc2ccd0,
    ambient: 0xf3f3f3,
    sun: 0xffffff,
    lightIntensity: 0.9,
    wetness: 0.2,
    rain: 0,
    night: 0.15
  }
};
