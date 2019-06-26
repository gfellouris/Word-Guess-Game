var lettersGuessed = [];
var lettersAllowed = /^[A-Za-z]+$/;

document.onkeyup = function(event) {
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = event.key.toLowerCase();
  document.getElementById("gameBanner").innerHTML = "Game started.  Good Luck!";
  document.getElementById("gameBanner").className = "alert alert-warning text-center";
  console.log(letter);
  //   if (
  //     (lettersGuessed.indexOf(letter) === -1 || lettersGuessed.length <= 0) &&
  //     (typeof letter === "string" || letter instanceof String)
  //   ) {
  if (letter.match(lettersAllowed) && letter.length === 1 && lettersGuessed.indexOf(letter) === -1) {
    lettersGuessed.push(letter);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
  }
};
