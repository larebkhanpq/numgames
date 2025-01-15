let randomNumber = Math.floor(Math.random() * 1000) + 1;
let attempts = 0;
const maxAttempts = 15;

// Enable input and button initially
document.getElementById("guessInput").disabled = false;
document.getElementById("guessButton").disabled = false;

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(guess)) {
        document.getElementById("feedback").innerText = "Please enter a valid number.";
        return;
    }

    attempts++;
    document.getElementById("attempts").innerText = `${attempts}/${maxAttempts}`;

    if (guess === randomNumber) {
        document.getElementById("feedback").innerText = "Congratulations! You've guessed the right number!";
        endGame();
    } else if (guess < randomNumber) {
        document.getElementById("feedback").innerText = "Too low! Try again.";
    } else {
        document.getElementById("feedback").innerText = "Too high! Try again.";
    }

    if (attempts >= maxAttempts) {
        document.getElementById("feedback").innerText = `Game Over! You've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`;
        endGame();
    }
}

function restartGame() {
    // Reset the random number and attempts
    randomNumber = Math.floor(Math.random() * 1000) + 1;
    attempts = 0;

    // Reset feedback and attempts display
    document.getElementById("feedback").innerText = "";
    document.getElementById("attempts").innerText = `${attempts}/${maxAttempts}`;

    // Clear the input field
    document.getElementById("guessInput").value = "";

    // Re-enable input and button
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessButton").disabled = false;
}

function endGame() {
    // Disable input and button when game ends
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessButton").disabled = true;
}
