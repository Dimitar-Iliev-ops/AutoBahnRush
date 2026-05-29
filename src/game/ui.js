import { ACHIEVEMENTS, GAME_MODES, MISSIONS, TUNING_DEFS, UPGRADE_DEFS } from "./config.js";

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return replacements[char];
  });
}

export class UIController {
  constructor(saveData) {
    this.saveData = saveData;
    this.selectedModeId = saveData.selectedMode;
    this.modeCards = new Map();
    this.events = [];
    this.leaderboardEntries = [];

    this.el = {
      loadingScreen: document.getElementById("loading-screen"),
      loadingBar: document.getElementById("loading-bar"),
      loadingText: document.getElementById("loading-text"),
      menuRoot: document.getElementById("menu-root"),
      hud: document.getElementById("hud"),
      pauseMenu: document.getElementById("pause-menu"),
      resultsScreen: document.getElementById("results-screen"),
      resultsTitle: document.getElementById("results-title"),
      resultsGrid: document.getElementById("results-grid"),
      nicknameScreen: document.getElementById("nickname-screen"),
      nicknameMode: document.getElementById("nickname-mode"),
      nicknameInput: document.getElementById("nickname-input"),
      nicknameStartBtn: document.getElementById("nickname-start-btn"),
      nicknameCancelBtn: document.getElementById("nickname-cancel-btn"),
      touchControls: document.getElementById("touch-controls"),
      windshieldRain: document.getElementById("windshield-rain"),
      windshieldCrack: document.getElementById("windshield-crack"),
      cockpitOverlay: document.getElementById("cockpit-overlay"),
      eventFeed: document.getElementById("event-feed"),
      miniMap: document.getElementById("mini-map"),
      navLinks: [...document.querySelectorAll(".nav-link")],
      screens: [...document.querySelectorAll(".screen")],
      modeGrid: document.getElementById("mode-grid"),
      selectedModeName: document.getElementById("selected-mode-name"),
      selectedModeDesc: document.getElementById("selected-mode-desc"),
      startRunBtn: document.getElementById("start-run-btn"),
      dailyRewardBtn: document.getElementById("daily-reward-btn"),
      profileLevel: document.getElementById("profile-level"),
      profileMoney: document.getElementById("profile-money"),
      unlockedRoutes: document.getElementById("unlocked-routes"),
      upgradeList: document.getElementById("upgrade-list"),
      tuningList: document.getElementById("tuning-list"),
      missionList: document.getElementById("mission-list"),
      achievementList: document.getElementById("achievement-list"),
      leaderboardList: document.getElementById("leaderboard-list"),
      applySettingsBtn: document.getElementById("apply-settings-btn"),
      garageResetBtn: document.getElementById("garage-reset-btn"),
      resultsRetryBtn: document.getElementById("results-retry-btn"),
      resultsGarageBtn: document.getElementById("results-garage-btn"),
      resumeBtn: document.getElementById("resume-btn"),
      pauseSettingsBtn: document.getElementById("pause-settings-btn"),
      quitRunBtn: document.getElementById("quit-run-btn"),
      hudMode: document.getElementById("hud-mode"),
      hudObjective: document.getElementById("hud-objective"),
      hudCamera: document.getElementById("hud-camera"),
      hudWanted: document.getElementById("hud-wanted"),
      hudSpeed: document.getElementById("hud-speed"),
      hudRpm: document.getElementById("hud-rpm"),
      hudGear: document.getElementById("hud-gear"),
      hudScore: document.getElementById("hud-score"),
      hudCombo: document.getElementById("hud-combo"),
      hudMoney: document.getElementById("hud-money"),
      hudDistance: document.getElementById("hud-distance"),
      hudTopSpeed: document.getElementById("hud-top-speed"),
      nitroBar: document.getElementById("nitro-bar"),
      damageBar: document.getElementById("damage-bar"),
      comboBar: document.getElementById("combo-bar"),
      paintColor: document.getElementById("paint-color"),
      finishType: document.getElementById("finish-type"),
      wheelStyle: document.getElementById("wheel-style"),
      headlightColor: document.getElementById("headlight-color"),
      caliperColor: document.getElementById("caliper-color"),
      interiorColor: document.getElementById("interior-color"),
      windowTint: document.getElementById("window-tint"),
      graphicsQuality: document.getElementById("graphics-quality"),
      cameraShake: document.getElementById("camera-shake"),
      showMap: document.getElementById("show-map"),
      masterVolume: document.getElementById("master-volume"),
      engineVolume: document.getElementById("engine-volume"),
      ambienceVolume: document.getElementById("ambience-volume"),
      musicVolume: document.getElementById("music-volume"),
      sfxVolume: document.getElementById("sfx-volume"),
      steerSensitivity: document.getElementById("steer-sensitivity"),
      steeringFilter: document.getElementById("steering-filter"),
      steerReturnSpeed: document.getElementById("steer-return-speed"),
      gamepadDeadzone: document.getElementById("gamepad-deadzone"),
      touchLayout: document.getElementById("touch-layout"),
      gamepadEnabled: document.getElementById("gamepad-enabled"),
      autoHeadlights: document.getElementById("auto-headlights"),
      closeSettingsBtn: document.getElementById("close-settings-btn")
    };

    this.refreshFromSave(saveData);
    this.renderModeCards();
    this.renderUpgradeCards();
    this.renderTuningControls();
    this.renderMissions();
    this.renderAchievements();
    this.bindNavigation();
  }

  setLoading(progress, text) {
    this.el.loadingBar.style.width = `${Math.max(2, progress * 100)}%`;
    this.el.loadingText.textContent = text;
  }

  finishLoading() {
    this.el.loadingScreen.classList.add("hidden");
  }

  bindNavigation() {
    this.el.navLinks.forEach((button) => {
      button.addEventListener("click", () => this.showScreen(button.dataset.screen));
    });
  }

  promptNickname(modeName) {
    return new Promise((resolve) => {
      const screen = this.el.nicknameScreen;
      const input = this.el.nicknameInput;
      const startButton = this.el.nicknameStartBtn;
      const cancelButton = this.el.nicknameCancelBtn;

      const cleanup = () => {
        screen.classList.add("hidden");
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keydown", handleKeydown);
        startButton.removeEventListener("click", handleSubmit);
        cancelButton.removeEventListener("click", handleCancel);
      };

      const normalizeName = () => input.value.trim().replace(/\s+/g, " ").slice(0, 18);
      const handleInput = () => {
        startButton.disabled = normalizeName().length === 0;
      };
      const handleSubmit = () => {
        const nickname = normalizeName();
        if (!nickname) {
          input.focus();
          return;
        }
        cleanup();
        resolve(nickname);
      };
      const handleCancel = () => {
        cleanup();
        resolve(null);
      };
      const handleKeydown = (event) => {
        if (event.key === "Enter") handleSubmit();
        if (event.key === "Escape") handleCancel();
      };

      this.el.nicknameMode.textContent = modeName;
      input.value = "";
      startButton.disabled = true;
      screen.classList.remove("hidden");
      input.addEventListener("input", handleInput);
      input.addEventListener("keydown", handleKeydown);
      startButton.addEventListener("click", handleSubmit);
      cancelButton.addEventListener("click", handleCancel);
      requestAnimationFrame(() => input.focus());
    });
  }

  showScreen(screenId) {
    this.el.navLinks.forEach((button) =>
      button.classList.toggle("active", button.dataset.screen === screenId)
    );
    this.el.screens.forEach((screen) => screen.classList.toggle("active", screen.id === screenId));
  }

  renderModeCards() {
    this.el.modeGrid.innerHTML = "";
    this.modeCards.clear();

    for (const mode of GAME_MODES) {
      const card = document.createElement("button");
      card.className = "mode-card";
      if (mode.id === this.selectedModeId) card.classList.add("selected");
      card.innerHTML = `
        <div>
          <span class="eyebrow">${mode.weather}</span>
          <h3>${mode.name}</h3>
          <p>${mode.desc}</p>
        </div>
        <div class="mode-meta">
          <span class="chip">${mode.trafficFlow}</span>
          <span class="chip">${mode.police ? "police" : "traffic"}</span>
          <span class="chip">${mode.reward.toFixed(2)}x reward</span>
        </div>
      `;
      card.addEventListener("click", () => {
        this.selectedModeId = mode.id;
        this.el.selectedModeName.textContent = mode.name;
        this.el.selectedModeDesc.textContent = mode.desc;
        this.modeCards.forEach((element, id) => element.classList.toggle("selected", id === mode.id));
      });
      this.modeCards.set(mode.id, card);
      this.el.modeGrid.append(card);
    }

    const selected = GAME_MODES.find((mode) => mode.id === this.selectedModeId) ?? GAME_MODES[0];
    this.el.selectedModeName.textContent = selected.name;
    this.el.selectedModeDesc.textContent = selected.desc;
  }

  renderUpgradeCards() {
    this.el.upgradeList.innerHTML = "";

    for (const upgrade of UPGRADE_DEFS) {
      const level = this.saveData.upgrades[upgrade.id];
      const cost = this.getUpgradeCost(upgrade.id);
      const card = document.createElement("article");
      card.className = "upgrade-card";
      card.innerHTML = `
        <header>
          <div>
            <strong>${upgrade.label}</strong>
            <div class="label">Level ${level}/${upgrade.max}</div>
          </div>
          <strong>${cost > 0 ? `${formatMoney(cost)} cr` : "Maxed"}</strong>
        </header>
        <footer>
          <span class="chip">+${Math.round(upgrade.effect * 100)}% per level</span>
          <button class="secondary" ${level >= upgrade.max ? "disabled" : ""}>Upgrade</button>
        </footer>
      `;
      card.querySelector("button")?.addEventListener("click", () => this.onUpgrade?.(upgrade.id));
      this.el.upgradeList.append(card);
    }
  }

  renderTuningControls() {
    this.el.tuningList.innerHTML = "";

    for (const tune of TUNING_DEFS) {
      const wrapper = document.createElement("div");
      wrapper.className = "control-group";
      const value = this.saveData.tuning[tune.id];
      wrapper.innerHTML = `
        <label for="tune-${tune.id}">${tune.label}</label>
        <input id="tune-${tune.id}" type="range" min="${tune.min}" max="${tune.max}" step="${tune.step}" value="${value}" />
        <span class="chip">${value}</span>
      `;
      const input = wrapper.querySelector("input");
      const chip = wrapper.querySelector(".chip");
      input.addEventListener("input", () => {
        chip.textContent = input.value;
        this.onTuneChange?.(tune.id, Number(input.value));
      });
      this.el.tuningList.append(wrapper);
    }
  }

  renderMissions() {
    this.el.missionList.innerHTML = "";
    for (const mission of MISSIONS) {
      const progress = this.saveData.missionProgress[mission.id];
      const completed = progress >= mission.goal;
      const card = document.createElement("article");
      card.className = "mission-card";
      card.innerHTML = `
        <header>
          <div>
            <strong>${mission.title}</strong>
            <div class="label">${mission.reward} credits</div>
          </div>
          <span class="chip">${completed ? "Complete" : `${progress}/${mission.goal}`}</span>
        </header>
        <footer>
          <div class="bar-track"><div class="bar-fill combo" style="width:${Math.min(100, (progress / mission.goal) * 100)}%"></div></div>
        </footer>
      `;
      this.el.missionList.append(card);
    }
  }

  renderAchievements() {
    this.el.achievementList.innerHTML = "";
    for (const achievement of ACHIEVEMENTS) {
      const unlocked = this.saveData.achievements[achievement.id];
      const card = document.createElement("article");
      card.className = "achievement-card";
      card.innerHTML = `
        <header>
          <div>
            <strong>${achievement.title}</strong>
            <div class="label">${achievement.desc}</div>
          </div>
          <span class="chip">${unlocked ? "Unlocked" : "Locked"}</span>
        </header>
      `;
      this.el.achievementList.append(card);
    }
  }

  renderLeaderboard(entries = this.leaderboardEntries) {
    this.leaderboardEntries = entries;
    if (!this.el.leaderboardList) return;
    this.el.leaderboardList.innerHTML = "";

    if (!entries.length) {
      const empty = document.createElement("div");
      empty.className = "leaderboard-empty";
      empty.textContent = "No local scores yet.";
      this.el.leaderboardList.append(empty);
      return;
    }

    entries.slice(0, 12).forEach((entry, index) => {
      const row = document.createElement("article");
      row.className = "leaderboard-row";
      const dateLabel = entry.createdAt
        ? new Date(entry.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })
        : "";
      row.innerHTML = `
        <div class="leaderboard-rank">${index + 1}</div>
        <div class="leaderboard-main">
          <strong>${escapeHtml(entry.nickname)}</strong>
          <span>${escapeHtml(entry.modeName)} · ${dateLabel}</span>
        </div>
        <div class="leaderboard-score">
          <strong>${formatMoney(entry.score)}</strong>
          <span>${Math.round(entry.topSpeed)} km/h · ${entry.distanceKm.toFixed(2)} km</span>
        </div>
      `;
      this.el.leaderboardList.append(row);
    });
  }

  refreshFromSave(saveData) {
    this.saveData = saveData;
    this.el.profileLevel.textContent = saveData.level;
    this.el.profileMoney.textContent = `${formatMoney(saveData.money)} cr`;
    this.el.unlockedRoutes.textContent = saveData.unlockedRoutes;

    this.el.paintColor.value = saveData.customization.paintColor;
    this.el.finishType.value = saveData.customization.finishType;
    this.el.wheelStyle.value = saveData.customization.wheelStyle;
    this.el.headlightColor.value = saveData.customization.headlightColor;
    this.el.caliperColor.value = saveData.customization.caliperColor;
    this.el.interiorColor.value = saveData.customization.interiorColor;
    this.el.windowTint.value = saveData.customization.windowTint;

    this.el.graphicsQuality.value = saveData.settings.graphicsQuality;
    this.el.cameraShake.value = saveData.settings.cameraShake;
    this.el.showMap.value = saveData.settings.showMap ? "on" : "off";
    this.el.masterVolume.value = saveData.settings.masterVolume;
    this.el.engineVolume.value = saveData.settings.engineVolume;
    this.el.ambienceVolume.value = saveData.settings.ambienceVolume;
    this.el.musicVolume.value = saveData.settings.musicVolume;
    this.el.sfxVolume.value = saveData.settings.sfxVolume;
    this.el.steerSensitivity.value = saveData.settings.steerSensitivity;
    this.el.steeringFilter.value = saveData.settings.steeringFilter;
    this.el.steerReturnSpeed.value = saveData.settings.steerReturnSpeed;
    this.el.gamepadDeadzone.value = saveData.settings.gamepadDeadzone;
    this.el.touchLayout.value = saveData.settings.touchLayout;
    this.el.gamepadEnabled.value = saveData.settings.gamepadEnabled ? "on" : "off";
    this.el.autoHeadlights.value = saveData.settings.autoHeadlights ? "on" : "off";
  }

  bindGarageHandlers({ onUpgrade, onTuneChange, onResetTuning, onCustomizationChange }) {
    this.onUpgrade = onUpgrade;
    this.onTuneChange = onTuneChange;
    this.el.garageResetBtn.addEventListener("click", () => onResetTuning?.());

    [
      "paintColor",
      "finishType",
      "wheelStyle",
      "headlightColor",
      "caliperColor",
      "interiorColor",
      "windowTint"
    ].forEach((field) => {
      this.el[field].addEventListener("input", () => {
        onCustomizationChange?.({
          paintColor: this.el.paintColor.value,
          finishType: this.el.finishType.value,
          wheelStyle: this.el.wheelStyle.value,
          headlightColor: this.el.headlightColor.value,
          caliperColor: this.el.caliperColor.value,
          interiorColor: this.el.interiorColor.value,
          windowTint: Number(this.el.windowTint.value)
        });
      });
    });
  }

  bindSettingsHandlers(onApplySettings) {
    this.el.applySettingsBtn.addEventListener("click", () => {
      onApplySettings?.({
        graphicsQuality: this.el.graphicsQuality.value,
        cameraShake: Number(this.el.cameraShake.value),
        showMap: this.el.showMap.value === "on",
        masterVolume: Number(this.el.masterVolume.value),
        engineVolume: Number(this.el.engineVolume.value),
        ambienceVolume: Number(this.el.ambienceVolume.value),
        musicVolume: Number(this.el.musicVolume.value),
        sfxVolume: Number(this.el.sfxVolume.value),
        steerSensitivity: Number(this.el.steerSensitivity.value),
        steeringFilter: Number(this.el.steeringFilter.value),
        steerReturnSpeed: Number(this.el.steerReturnSpeed.value),
        gamepadDeadzone: Number(this.el.gamepadDeadzone.value),
        touchLayout: this.el.touchLayout.value,
        gamepadEnabled: this.el.gamepadEnabled.value === "on",
        autoHeadlights: this.el.autoHeadlights.value === "on"
      });
    });
  }

  bindMenus({
    onStartRun,
    onDailyReward,
    onResume,
    onPauseSettings,
    onQuitRun,
    onRetry,
    onResultsGarage,
    onCloseSettings
  }) {
    this.el.startRunBtn.addEventListener("click", () => onStartRun?.(this.selectedModeId));
    this.el.dailyRewardBtn.addEventListener("click", () => onDailyReward?.());
    this.el.resumeBtn.addEventListener("click", () => onResume?.());
    this.el.pauseSettingsBtn.addEventListener("click", () => onPauseSettings?.());
    this.el.quitRunBtn.addEventListener("click", () => onQuitRun?.());
    this.el.resultsRetryBtn.addEventListener("click", () => onRetry?.());
    this.el.resultsGarageBtn.addEventListener("click", () => onResultsGarage?.());
    this.el.closeSettingsBtn.addEventListener("click", () => onCloseSettings?.());
  }

  getUpgradeCost(upgradeId) {
    const def = UPGRADE_DEFS.find((item) => item.id === upgradeId);
    const level = this.saveData.upgrades[upgradeId];
    if (!def || level >= def.max) return 0;
    return Math.round(def.baseCost * (1 + level * 0.55));
  }

  toggleMenu(show) {
    this.el.menuRoot.classList.toggle("hidden", !show);
  }

  toggleHUD(show) {
    this.el.hud.classList.toggle("hidden", !show);
  }

  togglePause(show) {
    this.el.pauseMenu.classList.toggle("hidden", !show);
  }

  toggleResults(show) {
    this.el.resultsScreen.classList.toggle("hidden", !show);
  }

  toggleCockpit(showCockpit, rainAlpha = 0, crackAlpha = 0) {
    this.el.cockpitOverlay.classList.toggle("hidden", !showCockpit);
    this.el.windshieldRain.style.opacity = `${rainAlpha}`;
    this.el.windshieldCrack.style.opacity = `${crackAlpha}`;
  }

  toggleTouchControls(show) {
    this.el.touchControls.classList.toggle("hidden", !show);
  }

  setPauseSettingsOpen(show) {
    this.el.closeSettingsBtn.classList.toggle("hidden", !show);
  }

  setHUD(snapshot) {
    this.el.hudMode.textContent = snapshot.modeName;
    this.el.hudObjective.textContent = snapshot.objective;
    this.el.hudCamera.textContent = snapshot.cameraName;
    this.el.hudWanted.textContent = String(snapshot.wantedLevel);
    this.el.hudSpeed.textContent = String(Math.round(snapshot.speed));
    this.el.hudRpm.textContent = String(Math.round(snapshot.rpm));
    this.el.hudGear.textContent = String(snapshot.gear);
    this.el.hudScore.textContent = formatMoney(snapshot.score);
    this.el.hudCombo.textContent = `${snapshot.combo.toFixed(1)}x`;
    this.el.hudMoney.textContent = `${formatMoney(snapshot.money)} cr`;
    this.el.hudDistance.textContent = `${snapshot.distance.toFixed(2)} km`;
    this.el.hudTopSpeed.textContent = `${Math.round(snapshot.topSpeed)} km/h`;
    this.el.nitroBar.style.width = `${snapshot.nitro * 100}%`;
    this.el.damageBar.style.width = `${snapshot.damage * 100}%`;
    this.el.comboBar.style.width = `${snapshot.comboTimer * 100}%`;
  }

  addEvent(message) {
    this.events.unshift(message);
    this.events = this.events.slice(0, 8);
    this.el.eventFeed.innerHTML = this.events
      .map((item) => `<div class="event-item">${item}</div>`)
      .join("");
  }

  drawMiniMap(player, traffic, police, show) {
    this.el.miniMap.classList.toggle("hidden", !show);
    if (!show) return;

    const ctx = this.el.miniMap.getContext("2d");
    const { width, height } = this.el.miniMap;
    const laneWorldWidth = player.laneWidth || 4.2;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(3, 10, 18, 0.86)";
    ctx.fillRect(0, 0, width, height);

    const laneWidth = width / 6;
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 2;
    for (let i = 1; i < 6; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * laneWidth, 0);
      ctx.lineTo(i * laneWidth, height);
      ctx.stroke();
    }

    const mapY = height * 0.72;
    const enemies = [...traffic, ...police];
    const maxAhead = Math.max(260, ...enemies.map((vehicle) => vehicle.z - player.z + 24));
    const maxBehind = Math.max(140, ...enemies.map((vehicle) => player.z - vehicle.z + 24));
    const worldXToMap = (worldX) => {
      const laneOffset = worldX / laneWorldWidth;
      return Math.min(width - 8, Math.max(8, width / 2 + laneOffset * laneWidth));
    };
    const worldZToMap = (worldZ) => {
      const localZ = worldZ - player.z;
      if (localZ >= 0) {
        return mapY - Math.min(1, localZ / maxAhead) * (mapY - 12);
      }
      return mapY + Math.min(1, -localZ / maxBehind) * (height - mapY - 12);
    };

    ctx.strokeStyle = "rgba(109,233,255,0.34)";
    ctx.beginPath();
    ctx.moveTo(0, mapY);
    ctx.lineTo(width, mapY);
    ctx.stroke();

    ctx.fillStyle = "#6de9ff";
    ctx.shadowColor = "rgba(109,233,255,0.8)";
    ctx.shadowBlur = 10;
    ctx.fillRect(worldXToMap(player.x) - 5, mapY - 10, 10, 18);
    ctx.shadowBlur = 0;

    traffic.forEach((vehicle) => {
      const y = worldZToMap(vehicle.z);
      const x = worldXToMap(vehicle.laneX);
      ctx.fillStyle = vehicle.isOncoming ? "#ff916c" : "#ffffff";
      ctx.fillRect(x - 4, y - 7, 8, 14);
    });

    police.forEach((vehicle) => {
      const y = worldZToMap(vehicle.z);
      const x = worldXToMap(vehicle.laneX);
      ctx.fillStyle = "#4ca3ff";
      ctx.shadowColor = "rgba(76,163,255,0.75)";
      ctx.shadowBlur = 8;
      ctx.fillRect(x - 5, y - 8, 10, 16);
      ctx.shadowBlur = 0;
    });
  }

  showResults(summary) {
    this.el.resultsTitle.textContent = summary.title;
    this.el.resultsGrid.innerHTML = "";

    [
      ["Driver", summary.nickname ?? "Driver"],
      ["Leaderboard", summary.leaderboardRank ? `#${summary.leaderboardRank} local` : "Not recorded"],
      ["Score", formatMoney(summary.score)],
      ["Distance", `${summary.distance.toFixed(2)} km`],
      ["Top Speed", `${Math.round(summary.topSpeed)} km/h`],
      ["Near Misses", summary.nearMisses],
      ["Average Speed", `${Math.round(summary.averageSpeed)} km/h`],
      ["Combo Peak", `${summary.bestCombo.toFixed(1)}x`],
      ["Repair Cost", `${formatMoney(summary.repairCost)} cr`],
      ["Credits Earned", `${formatMoney(summary.moneyEarned)} cr`]
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "results-row";
      const labelElement = document.createElement("span");
      labelElement.textContent = label;
      const valueElement = document.createElement("strong");
      valueElement.textContent = value;
      row.append(labelElement, valueElement);
      this.el.resultsGrid.append(row);
    });
  }
}
