import "./styles/style.css";
import { HighwayGame } from "./game/HighwayGame.js";

const game = new HighwayGame({
  canvas: document.getElementById("game-canvas"),
  touchRoot: document.getElementById("touch-controls")
});

game.init();
