<h1> Snake Game </h1>
<h3> Description  </h3>
This project was completed during the early stages of the course, focusing on building a classic Snake game using HTML, CSS, and JavaScript. It served as an opportunity to practice DOM manipulation, event handling, and game logic implementation.

<h3>Deployment Link</h3>
The deployed version of the Snake Game can be accessed at: ///

<h3> Getting Started/Code Installation</h3>
To run the Snake Game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Filom3na/Project1-Snake.git`
2. Navigate to the project directory: `cd Project1-Snake`
3. Open the `index.html` file in your preferred web browser.

<h3>Timeframe & Working Team</h3>
This project was a solo endeavor, completed within a 4-day timeframe.

**Technologies Used** <br>
- HTML
- CSS
- JavaScript

<h3>Brief</h3>
The brief for this project was to create a browser-based game using HTML, CSS, and JavaScript. The game had to be built with a defined win/lose condition and separate files for HTML, CSS, and JavaScript. Specific requirements included:

- Render a game in the browser
- Use a grid system (no HTML Canvas)
- Design logic for winning and visually display the winner
- Include separate HTML, CSS, and JavaScript files
- Follow KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy the game online
- Use semantic markup and CSS best practices


### Planning

#### Wireframe

During the planning phase, I created a wireframe to visualise the game's layout and structure. The wireframe included the game board, score display, controls, time left, the music features,an instruction button and a game over/restart screen.

![!\[alt text\](<Screenshot 2024-04-02 at 14.43.56.png>)](<images/Screenshot 2024-04-02 at 14.43.56.png>)

#### Pseudocode

Before diving into the code, I wrote pseudocode to outline the game logic and identify the necessary functions and data structures. Here's an example of the pseudocode for the `moveSnake` function:
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

### Build/Code Process

The build process for the Snake Game involved setting up the game board, implementing the game logic, handling user input, and managing various game states. Here's a breakdown of the key stages and code snippets:

#### Game Setup

The first step was to create the game board and initialize the necessary variables. The `createBoard` function generates the grid elements dynamically, and the `startGame` function sets up the initial game state:

```javascript
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}

function startGame() {
  // Reset game state
  // ...
  generateApple();
  playBackgroundMusic();
  currentSnake.forEach((index) => squares[index].classList.add("snake"));
  // ...
  timerId = setInterval(move, intervalTime);
  timerIntervalId = setInterval(updateTimer, 1000);
}

#### Features

The Snake Game includes the following features:

- Loading and playing background music and sound effects
- Muting/unmuting the game
- Creating the game board
- Starting a new game
- Moving the snake
- Handling collisions and game over
- Eating apples and increasing the score
- Changing the snake's color briefly when eating an apple
- Updating the timer
- Pausing and resuming the game
- Restarting the game after game over
- Showing and hiding the instructions panel
- Handling user input from keyboard and mobile controls