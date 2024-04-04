//? Elements
// gameBoard
// snakeElements -> array -> push and unshift
// foodElement -> 2px bigger
// scoreElement
// timeLeftElement
// gameOverScreen
// restartButton
// pauseButton
// muteButton
// mobileControls (for mobile devices)
// sidePanel (for desktop mode)

let grid = document.querySelector(".grid");
let scoreDisplay = document.querySelector(".scoreDisplay .amount");
let startButton = document.querySelector("#start-game-btn");
let restartButton = document.querySelector("#restart-game-btn");
let gameOverScreen = document.querySelector("#game-over-screen");
let pauseButton = document.querySelector("#pause-btn");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;




//? Variables
// snake (array to store snake's body positions)-> x and y coordinates
// foodPosition --> x and y coordinates -> math.random()
// score
// timeLeft
// gameOver (boolean)
// isPaused (boolean)
// isMuted (boolean)
// direction (object to store current direction)
// level (to track the current level or size)
// snakeSpeed (to store the snake's speed)
// backgroundMusic (audio object for background music)
// eatSound (audio object for eating food sound)
// gameOverSound (audio object for game over sound)


// ?Page Load
// Call setupGameBoard() to create the game board
// Call initialiseSnake() to set the initial snake position
// Call spawnFood() to generate the initial food position
// Call renderSnake() to render the snake on the board
// Call renderFood() to render the food on the board
// Call updateScore() to display the initial score
// Call updateTimeLeft() to display the initial time left
// Call attachEventListeners() to set up event listeners for user input
// Call loadAudioFiles() to load background music and sound effects
// Call showSidePanel() to show the side panel with rules and instructions (for desktop)
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keyup", control);
  createBoard();
  let restartButton = document.querySelector("#restart-game-btn");
  restartButton.addEventListener("click", replay);
  let startButton = document.querySelector("#start-game-btn");
  startButton.addEventListener("click", startGame);
});

//? Functions
// Define setupGameBoard() to create the game board
// Define initialiseSnake() to set the initial snake position
// Define spawnFood() to generate a random food position
// Define renderSnake() to render the snake on the board -> removeSnake() to make it disappear 
// Define renderFood() to render the food on the board on a random position each time -> removeFood()
// Define updateScore() to update and display the score
// Define updateTimeLeft() to update and display the time left
// Define moveSnake() to update the snake's position based on the current direction
// Define handleCollisions() to detect collisions with walls, snake body, and food
// Define updateGameState() to update the game state based on collisions
// Define gameOver() to display the game over screen, play game over sound, and reset the game state
// Define restartGame() to reset the game and start a new game
// Define pauseGame() to pause/resume the game
// Define muteGame() to mute/unmute background music and sound effects
// Define changeSnakeColor() to change the snake's color when eating food
// Define increaseLevel() to increase the level and adjust the snake's speed
// Define attachEventListeners() to set up event listeners for user input
// Define changeDirection() to update the snake's direction based on user input
// Define loadAudioFiles() to load background music and sound effect files
// Define playBackgroundMusic() to play the background music
// Define playSound() to play a sound effect (eating food or game over)
// Define showSidePanel() to show the side panel with rules and instructions (for desktop)
// Define hideSidePanel() to hide the side panel (for mobile)

function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}

function startGame() {
  currentSnake.forEach((index) => squares[index].classList.remove("snake"));
  squares[appleIndex].classList.remove("apple");
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  score = 0;
  direction = 1;
  intervalTime = 1000;
  generateApple();
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  scoreDisplay.textContent = score;
  gameOverScreen.classList.add("hidden");
  timerId = setInterval(move, intervalTime);
}

function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    gameOver();
    return;
  }

  const tail = currentSnake.pop();
  squares[tail].classList.remove("snake");
  currentSnake.unshift(currentSnake[0] + direction);
  squares[currentSnake[0]].classList.add("snake");

  if (squares[currentSnake[0]].classList.contains("apple")) {
    eatApple();
  }
}

function eatApple() {
  squares[currentSnake[0]].classList.remove("apple");
  currentSnake.push(currentSnake[currentSnake.length - 1]);
  generateApple();
  score++;
  scoreDisplay.textContent = score;
  clearInterval(timerId);
  intervalTime = intervalTime * speed;
  timerId = setInterval(move, intervalTime);
}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
}

function control(event) {
  if (event.keyCode === 39 && direction !== -1) {
    direction = 1; // Right
  } else if (event.keyCode === 38 && direction !== width) {
    direction = -width; // Up
  } else if (event.keyCode === 37 && direction !== 1) {
    direction = -1; // Left
  } else if (event.keyCode === 40 && direction !== -width) {
    direction = +width; // Down
  }
}

function pauseGame() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    pauseButton.textContent = "Resume";
  } else {
    timerId = setInterval(move, intervalTime);
    pauseButton.textContent = "Pause";
  }
}

function gameOver() {
  clearInterval(timerId);
  gameOverScreen.classList.remove("hidden");
  gameOverScreen.querySelector(".final-score .amount").textContent = score;
}



function replay() {
  gameOverScreen.classList.add("hidden");
  startGame();
}


//? Events
// On arrow key press (for PC) or mobile controls (for mobile devices):
//   Call changeDirection() to update the snake's direction

// On restartButton click:
//   Call restartGame() to reset the game and start a new game

// On pauseButton click:
//   Call pauseGame() to pause/resume the game

// On muteButton click:
//   Call muteGame() to mute/unmute background music and sound effects

// On eating food:
//   Call changeSnakeColor() to change the snake's color
//   Call playSound() to play the eating food sound effect
//   Call increaseLevel() to increase the level and adjust the snake's speed

// On game over:
//   Call playSound() to play the game over sound effect
//   Call gameOver() to display the game over screen and reset the game state
pauseButton.addEventListener("click", pauseGame);
document.querySelector(".arrow-key.top").addEventListener("click", () => direction = -width);
document.querySelector(".arrow-key.bottom").addEventListener("click", () => direction = +width);
document.querySelector(".arrow-key.left").addEventListener("click", () => direction = -1);
document.querySelector(".arrow-key.right").addEventListener("click", () => direction = 1);
