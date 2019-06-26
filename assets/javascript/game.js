var lettersGuessed = [];
var lettersAllowed = /^[A-Za-z]+$/;
var guessesRemaining = 12;

document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

document.onkeyup = function(event) {
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = event.key.toLowerCase();
  console.log(letter);

  document.getElementById("gameBanner").innerHTML = "Game started.  Good Luck!";
  document.getElementById("gameBanner").className =
    "alert alert-warning text-center";

  //   if (
  //     (lettersGuessed.indexOf(letter) === -1 || lettersGuessed.length <= 0) &&
  //     (typeof letter === "string" || letter instanceof String)
  //   ) {

  if (guessesRemaining === 0) {
    document.getElementById("gameBanner").innerHTML =
      "Game over! Press any key to start new game.";
    document.getElementById("gameBanner").className =
      "alert alert-danger text-center";
    document.getElementById("gameImage").src = "assets/images/loser.jpg";
    // <img src="assets/images/wordguess-header.jpg" alt="80's Word Guess!" class="mx-auto d-block img-fluid" />

    // Initialize variable to start game again
    guessesRemaining = 12;
    lettersGuessed = [];
    alert("Game over!  Sorry too many guesses.");
  } else {
    if (
      letter.match(lettersAllowed) &&
      letter.length === 1 &&
      lettersGuessed.indexOf(letter) === -1
    ) {
      lettersGuessed.push(letter);
      guessesRemaining--;
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    }
  }
};
