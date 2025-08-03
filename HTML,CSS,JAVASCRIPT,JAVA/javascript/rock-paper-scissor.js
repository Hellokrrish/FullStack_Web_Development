/*Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:
Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!*/



const player = 2;
const computer = Math.floor(Math.random() * 3);

if (player === 0) {
  if (computer === 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } else {
    console.log("An error occurred");
  }
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } else {
    console.log("An error occurred");
  }
} else {
  console.log("An error occurred");
}