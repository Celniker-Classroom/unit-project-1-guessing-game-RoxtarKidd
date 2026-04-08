var playerName = prompt("What is your name?");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
var difficulty = null;
var range = null;
var answer = null;
const tempArray = ["cold", "warm", "hot"];
var temp = null;
var numberOfGuesses = 0;
var wins = null;
var score = 0;
var scoreArray = [];
var avg = 0;
document.getElementById("playBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "Guess the number!";
    document.getElementById("playBtn").disabled = true;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    numberOfGuesses = 0;
    score = numberOfGuesses;

    difficulty = document.querySelector('input[name="level"]:checked').value;
    range = parseInt(difficulty);
    answer = Math.floor(Math.random() * range) + 1;;
})


document.getElementById("guessBtn").addEventListener("click", function() {
    numberOfGuesses++;
    var guess = parseInt(document.getElementById("guess").value);

    if ((Math.abs(guess - answer)) > 5)  {
        temp = tempArray[0];
    }

    if ((Math.abs(guess - answer)) <= 5)  {
        temp = tempArray[1];
    }

    if ((Math.abs(guess - answer)) <= 2)  {
        temp = tempArray[2];
    }

    if (isNaN(guess)) {
        document.getElementById("msg").textContent = "Please enter a valid number.";
        return;
    }
    if (guess < answer) {
        document.getElementById("msg").textContent = "Too low, " + playerName + "! Your guess is " + temp + ".";
    }
    else if (guess > answer) {
        document.getElementById("msg").textContent = "Too high, " + playerName + "! Your guess is " + temp + ".";
    }
    else if (guess === answer) {
        document.getElementById("msg").textContent = "That's correct! Congratulations, " + playerName + "!";
        score = numberOfGuesses;
        wins++;
        scoreArray.push(score);
        avg = scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length;
        document.getElementById("wins").textContent = "Total Wins: " + wins;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("giveUpBtn").disabled = true;
        document.getElementById("avgScore").textContent = "Average Guesses: " + avg.toFixed(2);
    }
})

document.getElementById("giveUpBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "The number was " + answer + ".";
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = true;
    score += range;
    scoreArray.push(score);
    avg = scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length;
    document.getElementById("avgScore").textContent = "Average Guesses: " + avg.toFixed(2);
});