// List of guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
// Guess button
const guessButton = document.querySelector(".guess");
// Input letter
const letterInput = document.querySelector(".letter");
// Word in progress
const wordInProgress = document.querySelector(".word-in-progress");
// Remaining guesses
const remainingGuesses = document.querySelector(".remaining");
// Span where remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");
// Message when player guesses
const message = document.querySelector(".message");
// Play again button
const playAgainButton = document.querySelector(".play-again");

// Starting word
const word = "magnolia";

// Display placeholders
const placeholder = function (word) {
    let placeholderLetters = [];
    for (let letter of word) {
        placeholderLetters.push("●");
    }
    
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});