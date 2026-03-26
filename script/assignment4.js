// Generate random number 1-10
const guessNumber = Math.floor((Math.random() * 10)) + 1;
let userNumber = 0;

// guessNumberGame function
function guessNumberGame() {
  // Loop until the guess is correct
  while (guessNumber != userNumber) {
    userNumber = parseFloat(prompt("Make a guess and try again"));
    
    // Validates user input is a number or not
    if (isNaN(userNumber)) {
      alert("invalid number please enter valid number between 1 to 10");
      // Skip rest of loop and continue again
      continue;
    }
    
    // Provide feedback within the loop
    if (userNumber < guessNumber) {
      alert("your guess number is too low! Try again.");
    } else if (userNumber > guessNumber) {
      alert("your guess number Too high! Try again.");
    } else if (userNumber === guessNumber) {
      alert(`Correct! You guessed it! The number was ${guessNumber}`);
      console.log("Correct! You guessed it!");
    }
    
    //tell guess number to user
    console.log(`Game checked. Attempt: ${userNumber}`);
  }
}

// Start the game
guessNumberGame();
