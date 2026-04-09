var playerName = prompt("What is your name?");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
var difficulty = null;
var range = null;
var answer = null;
const tempArray = ["cold", "warm", "hot"];
var temp = null;
var numberOfGuesses = 0;
var wins = 0;
var score = 0;
var scoreArray = [];
var avg = 0;
let running = false;
let startTime = 0;
let intervalId = null;
let now = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayName = day[now.getDay()];
let month = monthName[now.getMonth()];
let dayInMonth = now.getDate()
let year = now.getFullYear()
let oclock = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
let elapsedTime = 0;
var leaderboardArray = [];
var times = [];
start = true;

document.getElementById("date").textContent = "Today is " + dayName + ", " + month + " " + dayInMonth + ", " + year + ". The time is " + oclock + ".";

function updateTimer() {
    now = new Date().getTime();
    elapsedTime = (now - startTime) / 1000;  // convert ms to seconds
}


document.getElementById("playBtn").addEventListener("click", function() {
    if (start == true) {
        document.getElementById("msg").textContent = "Hi, " + playerName + "! Guess the number!" + ".";
    }
    else {
        document.getElementById("msg").textContent = "Guess another one, " + playerName + "!";
    }

    start = false;

    document.getElementById("playBtn").disabled = true;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    numberOfGuesses = 0;
    score = numberOfGuesses;

    difficulty = document.querySelector('input[name="level"]:checked').value;
    range = parseInt(difficulty);
    answer = Math.floor(Math.random() * range) + 1;
    console.log("Answer (for debugging): " + answer);

    startTime = new Date().getTime();
    elapsedTime = 0;
    document.getElementById("fastest").textContent = "Fastest Game: 0.00 seconds";
    running = true;
    intervalId = setInterval(updateTimer, 10);
    document.getElementById("guess").value = "null";
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
        leaderboardArray.push(score);
        let sorted = leaderboardArray.sort((a, b) => a - b);
        let avgScore = scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length;
        document.getElementById("leader1").textContent = sorted[0] || 100;
        document.getElementById("leader2").textContent = sorted[1] || 100;
        document.getElementById("leader3").textContent = sorted[2] || 100;
        document.getElementById("wins").textContent = "Total Wins: " + wins;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("giveUpBtn").disabled = true;
        document.getElementById("avgScore").textContent = "Average Score: " + avgScore.toFixed(2);
        clearInterval(intervalId);
        running = false;
        elapsedTime = (new Date().getTime() - startTime) / 1000;
        times.push(elapsedTime);
        const sortedTime = [...times].sort((a, b) => a - b);
        const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
        document.getElementById("avgTime").textContent = "Average Time: " + avgTime.toFixed(2) + " seconds";
        document.getElementById("fastest").textContent = "Fastest Game: " + sortedTime[0].toFixed(2) + " seconds";
    }
})

document.getElementById("giveUpBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "The number was " + answer + ".";
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = true;
    score += range;
    scoreArray.push(score);
    let avgScore = scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length;
    document.getElementById("avgScore").textContent = "Average Score: " + avgScore.toFixed(2);
    // Stop the timer
    clearInterval(intervalId);
    running = false;
    times.push(elapsedTime);
    const sortedTime = [...times].sort((a, b) => a - b);
    document.getElementById("fastest").textContent = "Fastest Game: " + sortedTime[0].toFixed(2) + " seconds";
});









