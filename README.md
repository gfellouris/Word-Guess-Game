# Word-Guess-Game

# PseudoCode
1. I want a 2 column grid that contains the image of the singer or band
    * Background color black
    * start with a picture of a old-school hangman game
2. I want a header at the top that display an 80's logo
    * Image provided
3. I want the game to start when "any key" is pressed by the user
    * Game starts when any key is pressed.
    * Banner message color (amber) and message is changed to notify the user the the game started.
4. I want to calculate the number of wins by the user
5. Current word should be randomly chosen from a list of 80's singers and bands
6. Number of guesses remaining should be displayed with a max number of 12 guesses (count down)
7. The letters guessed already should be displayed and duplicates should not be allowed or counted.
    * alphabets only, no duplicates
8. When the user wins 
    * display the image of the band or singer in the left panel.
    * Diplay a song from the band/singer on the top banner.
    * Change the banner color to green
    * Play the song (audio)
9. If the users exceeds the amount of guesses then game should end and displayed a 80's funny image instead of a band/singer.
10. Restart game on failure
    * Display pop-up alerting user the game is over
    * Update the banner with a message that says game is over press any key to start another. 
    * Change the color of the banner to red.
    * Reset the letters guessed and remaining guesses.
