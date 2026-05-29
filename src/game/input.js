const KEY_MAP = {
  KeyW: "accelerate",
  ArrowUp: "accelerate",
  KeyS: "brake",
  ArrowDown: "brake",
  KeyA: "left",
  ArrowLeft: "left",
  KeyD: "right",
  ArrowRight: "right",
  Space: "handbrake",
  ShiftLeft: "nitro",
  ShiftRight: "nitro",
  KeyC: "camera",
  KeyR: "reset",
  Escape: "pause",
  KeyM: "map",
  KeyH: "headlights",
  KeyQ: "signalLeft",
  KeyE: "signalRight",
  KeyF: "horn"
};

export class InputManager {
  constructor({ touchRoot }) {
    this.state = {
      accelerate: 0,
      brake: 0,
      left: 0,
      right: 0,
      handbrake: 0,
      nitro: 0,
      horn: 0
    };
    this.actions = [];
    this.touchRoot = touchRoot;
    this.gamepadEnabled = true;
    this.gamepadDeadzone = 0.14;
    this.pointerMap = new Map();
    this.lastGamepadButtons = {
      camera: false,
      pause: false
    };
  }

  bind() {
    window.addEventListener("keydown", (event) => {
      const action = KEY_MAP[event.code];
      if (!action) return;
      if (this.isFormTarget(event.target) && action !== "pause") return;
      event.preventDefault();
      if (["camera", "reset", "pause", "map", "headlights", "signalLeft", "signalRight"].includes(action)) {
        if (!event.repeat) {
          this.actions.push(action);
        }
      } else {
        this.state[action] = 1;
      }
    });

    window.addEventListener("keyup", (event) => {
      const action = KEY_MAP[event.code];
      if (!action) return;
      if (this.isFormTarget(event.target) && action !== "pause") return;
      event.preventDefault();
      if (this.state[action] !== undefined) {
        this.state[action] = 0;
      }
    });

    if (this.touchRoot) {
      for (const button of this.touchRoot.querySelectorAll("button[data-action]")) {
        button.addEventListener("pointerdown", (event) => {
          event.preventDefault();
          const action = event.currentTarget.dataset.action;
          this.pointerMap.set(event.pointerId, action);
          if (this.state[action] !== undefined) {
            this.state[action] = 1;
          }
        });

        const end = (event) => {
          const action = this.pointerMap.get(event.pointerId);
          if (action && this.state[action] !== undefined) {
            this.state[action] = 0;
          }
          this.pointerMap.delete(event.pointerId);
        };

        button.addEventListener("pointerup", end);
        button.addEventListener("pointercancel", end);
        button.addEventListener("pointerleave", end);
      }
    }
  }

  consumeActions() {
    const queued = [...this.actions];
    this.actions.length = 0;
    return queued;
  }

  isFormTarget(target) {
    return Boolean(
      target &&
        (target.tagName === "INPUT" ||
          target.tagName === "SELECT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
    );
  }

  pollGamepad() {
    if (!this.gamepadEnabled || !navigator.getGamepads) return;
    const pad = [...navigator.getGamepads()].find(Boolean);
    if (!pad) return;

    const rawSteer = pad.axes[0] || 0;
    const deadzone = this.gamepadDeadzone;
    const steer =
      Math.abs(rawSteer) <= deadzone
        ? 0
        : ((Math.abs(rawSteer) - deadzone) / (1 - deadzone)) * Math.sign(rawSteer);
    this.state.left = Math.max(0, -steer);
    this.state.right = Math.max(0, steer);
    this.state.accelerate = pad.buttons[7]?.value ?? pad.buttons[0]?.value ?? this.state.accelerate;
    this.state.brake = pad.buttons[6]?.value ?? pad.buttons[1]?.value ?? this.state.brake;
    this.state.handbrake = pad.buttons[2]?.value ?? 0;
    this.state.nitro = pad.buttons[5]?.value ?? 0;
    this.state.horn = pad.buttons[4]?.value ?? 0;

    const cameraPressed = Boolean(pad.buttons[3]?.pressed);
    const pausePressed = Boolean(pad.buttons[9]?.pressed);

    if (cameraPressed && !this.lastGamepadButtons.camera) this.actions.push("camera");
    if (pausePressed && !this.lastGamepadButtons.pause) this.actions.push("pause");

    this.lastGamepadButtons.camera = cameraPressed;
    this.lastGamepadButtons.pause = pausePressed;
  }
}
