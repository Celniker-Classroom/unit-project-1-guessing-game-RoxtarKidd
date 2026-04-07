var playerName = prompt("What is your name?");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
var difficulty = null;
var range = null;
var answer = null;
const tempArray = ["cold", "warm", "hot"];
var temp = null;
var numberOfGuesses = 0;
var wins = null;
document.getElementById("playBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "Guess the number!";
    document.getElementById("playBtn").disabled = true;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    numberOfGuesses = 0;

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
        document.getElementById("msg").textContent = "Too low! You are " + temp + ".";
    }
    else if (guess > answer) {
        document.getElementById("msg").textContent = "Too high! You are " + temp + ".";
    }
    else if (guess === answer) {
        document.getElementById("msg").textContent = "That's correct! Congratulations, " + playerName + "!";
        wins += numberOfGuesses;
        document.getElementById("wins").textContent = "Total Wins: " + wins;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("giveUpBtn").disabled = true;
    }
})

document.getElementById("giveUpBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "The number was " + answer + ".";
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = true;
    wins += range;
    
});