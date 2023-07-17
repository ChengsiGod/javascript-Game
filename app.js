const screens = document.querySelectorAll(".screen");
const choosePlayerButtons = document.querySelectorAll(".choose-player-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selectedInsect = {};

startButton.addEventListener("click", () => screens[0].classList.add("up"));

const increaseScore = () => {
  score++;
  if (score > 19) message.classList.add("visible");
  scoreElement.innerHTML = `Score: ${score}`;
};

const addPlayers = () => {
  setTimeout(createPlayer, 1000);
  setTimeout(createPlayer, 1500);
};
