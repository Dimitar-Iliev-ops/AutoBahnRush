# Autobahn Rush

`Autobahn Rush` is a browser-based 3D highway driving prototype built with `Vite`, `Three.js`, plain `HTML`, `CSS`, and modular `JavaScript`.

The player car is an original debadged German-inspired sports sedan. No real logos, branded model names, copyrighted car assets, or trademarked sounds are used.

## Features

- Playable 3D highway loop with traffic, scoring, crashes, money rewards, upgrades, tuning, and save data
- Multiple camera modes: chase, cockpit, hood, and cinematic crash replay
- Ten event presets including endless traffic, time trial, police chase, rain challenge, night run, free ride, hardcore, and delivery challenge
- AI traffic with mixed vehicle classes: cars, motorcycles, vans, buses, and trucks
- Police pursuit logic with wanted level escalation and roadblock events in police mode
- Procedural engine, horn, crash, rain, and siren audio using the Web Audio API
- Garage upgrades, visual customization, tuning sliders, daily rewards, mission tracking, and achievements
- Dynamic weather/lighting presets with rain, fog, sunset, night lighting, wet-road material changes, bloom, tone mapping, and film grain
- Keyboard controls, mobile touch controls, and optional gamepad input
- `localStorage` persistence for money, upgrades, settings, missions, achievements, and car setup

## Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

4. Create a production build when needed:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## Controls

- `W` / `Up Arrow`: accelerate
- `S` / `Down Arrow`: brake
- `A` / `Left Arrow`: steer left
- `D` / `Right Arrow`: steer right
- `Space`: handbrake / drift assist
- `Shift`: nitro
- `C`: switch camera
- `R`: restart current run
- `Esc`: pause
- `M`: toggle mini-map
- `H`: toggle headlights
- `Q` / `E`: turn signals
- `F`: horn

## Notes

- This is a substantial prototype focused on a strong playable core and expandable systems rather than a content-complete commercial game.
- All car shapes, traffic vehicles, sounds, and styling are original placeholder/procedural content intended for safe iteration.
- Progress saves automatically in the browser through `localStorage`.

## Structure

```text
index.html
package.json
src/
  main.js
  styles/style.css
  game/
    HighwayGame.js
    audio.js
    config.js
    input.js
    storage.js
    ui.js
    vehicleFactory.js
```
