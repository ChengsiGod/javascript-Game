const screens = document.querySelectorAll(".screen");
const choosePlayerButtons = document.querySelectorAll(".choose-player-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selectedPlayer = {};

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

const catchPlayer = () => {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove, 2000);
  addPlayers();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const createPlayer = () => {
  const player = document.createElement("div");
  player.classList.add("player");
  const { x, y } = getRandomLocation();
  player.style.top = `${y}px`;
  player.style.left = `${x}px`;
  player.innerHTML = `<img src="${selectedPlayer.src}"
  alt="${selectedPlayer.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;
  player.addEventListener("click", catchPlayer);
  gameContainer.appendChild(player);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElement.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = () => setInterval(increaseTime, 1000);

choosePlayerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedInsect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createPlayer, 1000);
    startGame();
  });
});
