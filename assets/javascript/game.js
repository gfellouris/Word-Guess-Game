//================================= GLOBAL environment  START =================================
var lettersGuessed = [];
var lettersGuessedOutput = [];
var lettersAllowed = /^[A-Za-z]+$/; // RegEx to only allow input from A to Z or a to z
var guessesRemaining = 12;
var newGame = true;
var winsCount = 0;
var found = false;
var bandSingers = (bandSingers = ["madonna", "genesis", "blonde", "prince"]);

// Pick the word to start the first game
var wordPicked = pickWord(bandSingers);
// console.log("wordPicked=" + wordPicked);

// Put each letter of the word inot an array
var wordPickedArray = wordPicked.split("");

// Next few lines sets up the placeholder for the word on the game board.
// It will also be used to check against the chosen word to check if we have a winner
var wordPlaceholderChar = "-";
var wordPlaceholder = wordPlaceholderChar.repeat(wordPickedArray.length);
var wordPlaceholderArray = wordPlaceholder.split("");
//================================= GLOBAL environment END =================================

//================================= FUNCTIONS START =================================
// function to initialize game elements
function initGame() {
  wordPicked = pickWord(bandSingers);
  wordPickedArray = wordPicked.split("");
  wordPlaceholderChar = "-";
  wordPlaceholder = wordPlaceholderChar.repeat(wordPickedArray.length);
  wordPlaceholderArray = wordPlaceholder.split("");
  //   console.log("word picked from initGame=" + wordPicked);
  wordPlaceholderChar = "-";
  wordPlaceholder = wordPlaceholderChar.repeat(wordPickedArray.length);
  wordPlaceholderArray = wordPlaceholder.split("");

  guessesRemaining = 12;
  lettersGuessed = [];
  lettersGuessedOutput = [];
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("gameImage").src = "assets/images/hangman_game.jpg";
  document.getElementById("gameBanner").innerHTML = "Game started.  Good Luck!";
  document.getElementById("lettersFound").innerHTML = wordPlaceholder;
  document.getElementById("lettersGuessed").innerHTML = "";
  document.getElementById("gameBanner").className =
    "alert alert-warning text-center";
  newGame = true;
}

function checkWinner(arrCompare1, arrCompare2) {
  if (arrCompare1.join("") === arrCompare2.join("")) {
    alert("You won!");
    winsCount++;
    document.getElementById("winsCount").innerHTML = winsCount;
    document.getElementById("gameImage").src =
      "assets/images/" + wordPicked + ".jpg";
    document.getElementById("gameBanner").innerHTML = "You won! Awesome!!!!";
    document.getElementById("gameBanner").className =
      "alert alert-success text-center";
    newGame = true;
  }
}

// lets check if the letter guessed is found in the word we picked.
function checkGuess(str) {
  found = false;

  for (var i = 0; i < wordPickedArray.length; i++) {
    if (wordPickedArray[i] === str) {
      wordPlaceholderArray[i] = str;
      //   console.log("wordPlaceholderArray=" + wordPlaceholderArray);
      wordPlaceholderString = wordPlaceholderArray.join("");
      document.getElementById("lettersFound").innerHTML = wordPlaceholderString;
      found = true;
    }
  }

  if (found === false) {
    guessesRemaining--;
  }
}

function pickWord(arr) {
  randomSelection = Math.floor(Math.random() * arr.length);
  //   console.log("Random#=" + randomSelection);
  //   console.log("word selected=" + bandSingers[randomSelection]);
  return bandSingers[randomSelection];
}
//================================= FUNCTIONS END =================================

document.onkeyup = function(event) {
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = event.key.toLowerCase();

  // If user won or loss we need to start a new game and reinitialize variables and game board
  if (newGame) {
    initGame();
    newGame = false;
  }

  // If guesses exceeded we need to tell the user they loss and update the gameboard to signify they loss
  if (guessesRemaining === 0) {
    document.getElementById("gameBanner").innerHTML =
      "Game over! Press any key to start new game.";
    document.getElementById("gameBanner").className =
      "alert alert-danger text-center";
    document.getElementById("gameImage").src = "assets/images/loser.jpg";
    alert("Game over!  Sorry too many guesses.");
    newGame = true;
  } else {
    // if letter is a-z or A-Z && its one character long (not tab, caps, etc) && the letter was NOT typed already
    if (
      letter.match(lettersAllowed) && // check the letter against the regEx to make sure it was an acceptable input
      letter.length === 1 &&
      lettersGuessed.indexOf(letter) === -1
    ) {
      checkGuess(letter); // Is the letter inputted found in the word picked?
      checkWinner(wordPickedArray, wordPlaceholderArray); // Do we have a winner?
      lettersGuessed.push(letter); // Put the letter into the letterGuessed array to track the guesses

      // This "if" statement setup tags to mark letters found "green" and letters NOT found with a "strike through"
      if (found) {
        tagOpen = "<font color=green>";
        tagClose = "</font>";
      } else {
        tagOpen = "<strike>";
        tagClose = "</strike>";
      }
      lettersGuessedOutput.push(tagOpen + letter + tagClose); // Need to have an "output" version of the array lettersGuessed that has HTML tags.
      document.getElementById(
        "lettersGuessed"
      ).innerHTML = lettersGuessedOutput; // update game board with the letters guessed
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining; // update game board with guesses remaining
    }
  }
};
