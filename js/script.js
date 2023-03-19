// List of guessed letters
const guessedLettersList = document.querySelector(".guessed-letters");
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

// Player guesses
const guessedLetters = [];

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
    letterInput.value = "";
    message.innerText = "";
    const guessChecked = inputCheck(guess);
    
    if (guessChecked) {
        makeGuess(guessChecked);
    }
});

// Validate player input
const inputCheck = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input === "") {
        message.innerText = `Please enter a letter.`;
    } else if (input.length > 1) {
        message.innerText = `Please enter only 1 letter.`;
    } else if (!input.match(acceptedLetter)) {
        message.innerText = `Please enter a letter from A to Z.`;
    } else {
        return input;
    }
};

// Check if letter has been guessed already
const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (guessedLetters.includes(letter)) {
        message.innerText = `You've already guessed that letter, try again!`;
    } else {
        guessedLetters.push(letter);
    }
    console.log(guessedLetters);
};

