var lettersGuessed = [];
var lettersAllowed = /^[A-Za-z]+$/;
var guessesRemaining = 12;
var newGame = true;
var winsCount = 0;

var wordPicked = "genesis";
var wordPickedArray = wordPicked.split("");
var wordPlaceholderChar = "-";
var wordPlaceholder = wordPlaceholderChar.repeat(wordPickedArray.length);
var wordPlaceholderArray = wordPlaceholder.split("");

////////////////////////////////////// FUNCTIONS START //////////////////////////////////////////////////
// function to initialize game elements
function initGame() {
  wordPlaceholderChar = "-";
  wordPlaceholder = wordPlaceholderChar.repeat(wordPickedArray.length);
  wordPlaceholderArray = wordPlaceholder.split("");

  guessesRemaining = 12;
  lettersGuessed = [];
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("gameImage").src = "assets/images/hangman_game.jpg";
  document.getElementById("gameBanner").innerHTML = "Game started.  Good Luck!";
  document.getElementById("lettersFound").innerHTML = wordPlaceholder;
  document.getElementById("lettersGuessed").innerHTML = "";
  document.getElementById("gameBanner").className =
    "alert alert-warning text-center";
  newGame = true;
};

function checkWinner(arrCompare1, arrCompare2) {
  if (arrCompare1.join("") === arrCompare2.join("")) {
    alert("You won!");
    winsCount++;
    document.getElementById("winsCount").innerHTML = winsCount;
    document.getElementById("gameImage").src = "assets/images/genesis.jpg";
    document.getElementById("gameBanner").innerHTML = "You won! Awesome!!!!";
    // document.getElementById("lettersGuessed").innerHTML = "";
    document.getElementById("gameBanner").className =
      "alert alert-success text-center";
    newGame = true;
  }
};

// lets check if the letter guessed is found in the word we picked.
function checkGuess(str) {
  for (var i = 0; i < wordPickedArray.length; i++) {
    if (wordPickedArray[i] === str) {
      wordPlaceholderArray[i] = str;
      console.log("wordPlaceholderArray=" + wordPlaceholderArray);
      wordPlaceholderString = wordPlaceholderArray.join("");
      document.getElementById("lettersFound").innerHTML = wordPlaceholderString;
    }
  }
};
////////////////////////////////////// FUNCTIONS END //////////////////////////////////////////////////

document.onkeyup = function(event) {
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = event.key.toLowerCase();

  if (newGame) {
    initGame();
    newGame = false;
  }

  if (guessesRemaining === 0) {
    document.getElementById("gameBanner").innerHTML =
      "Game over! Press any key to start new game.";
    document.getElementById("gameBanner").className =
      "alert alert-danger text-center";
    document.getElementById("gameImage").src = "assets/images/loser.jpg";
    alert("Game over!  Sorry too many guesses.");
    newGame = true;
  } else {
    // if letter is a-z or A-Z AND its one character long (not tab, caps, etc) AND the letter was typed already
    if (
      letter.match(lettersAllowed) &&
      letter.length === 1 &&
      lettersGuessed.indexOf(letter) === -1
    ) {
      lettersGuessed.push(letter);
      guessesRemaining--;
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
      checkGuess(letter);
      checkWinner(wordPickedArray, wordPlaceholderArray);
    }
  }
};
