const screens = document.querySelectorAll(".screen");
const choosePlayerButtons = document.querySelectorAll(".choose-player-btn");
const startButton = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");
const players = document.querySelectorAll(".player");
let seconds = 30; // Change to 30 seconds
let score = 0;
let selectedPlayer = {};
let gameInterval; // Add a variable to store the interval
const rulesBtn = document.getElementById("rules-btn");
const closeRulesBtn = document.getElementById("close-rules-btn");
const rulesContainer = document.getElementById("rules-container");

rulesBtn.addEventListener("click", () => {
  rulesContainer.style.display = "block";
});

closeRulesBtn.addEventListener("click", () => {
  rulesContainer.style.display = "none";
  /* rulesBtn.classList.add("hide"); */
});

startButton.addEventListener("click", () => {
  screens[0].classList.add("up");
  rulesBtn.classList.add("hide");
});

const increaseScore = () => {
  if (seconds > 0) {
    score++;
    scoreElement.innerHTML = `Score: ${score}`;
  }
};

const addPlayers = () => {
  if (seconds > 0) {
    // Check if the time is over
    setTimeout(createPlayer, 1000);
    setTimeout(createPlayer, 1500);
  }
};

const catchPlayer = function () {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addPlayers();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 200;
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

const decreaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElement.innerHTML = `Time: ${m}:${s}`;
  seconds--;

  if (seconds < 0) {
    clearInterval(gameInterval); // Stop the game
    if (score <= 200000) {
      message.classList.add("visible"); // Display success message
    }
  }
};

const startGame = () => {
  gameInterval = setInterval(decreaseTime, 1000); // Assign the interval to the variable
};

choosePlayerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedPlayer = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createPlayer, 1000);
    startGame();
    rulesBtn.classList.add("hide");
  });
});
s;
