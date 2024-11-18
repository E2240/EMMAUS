// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// this is theFunction to check the user's guess
function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const message = document.getElementById("message");
    attempts++;

    if (!userGuess) {
        message.textContent = "Please enter a number.";
        message.style.color = "red";
        return;
    }

    const guess = Number(userGuess);

    if (guess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    } else if (guess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        message.style.color = "green";
    }

    // this Clear the input field
    document.getElementById("guessInput").value = "";
}
