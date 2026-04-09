let nowForDate = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayName = day[nowForDate.getDay()];
let dayInMonthWithSuffix = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
let month = monthName[nowForDate.getMonth()];
let dayInMonth = dayInMonthWithSuffix[nowForDate.getDate() - 1];
let year = nowForDate.getFullYear();
let oclock = nowForDate.getHours() + ":" + nowForDate.getMinutes() + ":" + nowForDate.getSeconds();

function updateDateTime() {
    nowForDate = new Date();
    dayName = day[nowForDate.getDay()];
    month = monthName[nowForDate.getMonth()];
    dayInMonth = dayInMonthWithSuffix[nowForDate.getDate() - 1];
    year = nowForDate.getFullYear();
    let hours = nowForDate.getHours();
    let minutes = nowForDate.getMinutes();
    let seconds = nowForDate.getSeconds();
    oclock = hours + ":" + minutes + ":" + seconds;
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    oclock = hours + ":" + minutes + ":" + seconds;
    document.getElementById("date").textContent = dayName + ", " + month + " " + dayInMonth + ", " + year + " " + oclock;
}

updateDateTime();
setInterval(updateDateTime, 1000);

var playerName = prompt("What is your name?");
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
function formatPlayerName(playerName) {
    return '<span class="high-score">' + playerName + '</span>';
}
document.getElementById("msg").innerHTML = "Welcome, " + formatPlayerName(playerName) + "! Please select a difficulty level and click 'Play' to start the game.";
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

let elapsedTime = 0;
var leaderboardArray = [];
var times = [];
start = true;



function updateTimer() {
    now = new Date().getTime();
    elapsedTime = (now - startTime) / 1000;  // convert ms to seconds
}


document.getElementById("playBtn").addEventListener("click", function() {


    document.getElementById("playBtn").disabled = true;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("giveUpBtn").disabled = false;
    numberOfGuesses = 0;
    score = numberOfGuesses;

    difficulty = document.querySelector('input[name="level"]:checked').value;
    range = parseInt(difficulty);
    answer = Math.floor(Math.random() * range) + 1;

    document.getElementById("msg").innerHTML = "Okay, " + formatPlayerName(playerName) + ", guess the number between 1 and " + range + "!";

    console.log("Answer (for debugging): " + answer);

    startTime = new Date().getTime();
    elapsedTime = 0;
    document.getElementById("fastest").textContent = "Fastest Game: 0.00 seconds";
    running = true;
    intervalId = setInterval(updateTimer, 10);
    document.getElementById("guess").value = "";
})

document.getElementById("guessBtn").addEventListener("click", function() {
    var guess = parseInt(document.getElementById("guess").value);
    if (isNaN(guess) == false && guess >= 1 && guess <= range && document.getElementById("guess").value.trim() !== "") {
    numberOfGuesses++;
    }
    if (document.getElementById("guess").value.trim() === "") {
        document.getElementById("msg").textContent = "Please enter a valid number.";
        return;
    }

    if (guess < 1 || guess > range) {
        document.getElementById("msg").textContent = "Please enter a number between 1 and " + range + ".";
        return;
    }

    if (isNaN(guess)) {
    document.getElementById("msg").textContent = "Please enter a valid number.";
    return;
    }

    if ((Math.abs(guess - answer)) > 5)  {
        temp = tempArray[0];
    }

    if ((Math.abs(guess - answer)) <= 5)  {
        temp = tempArray[1];
    }

    if ((Math.abs(guess - answer)) <= 2)  {
        temp = tempArray[2];
    }

    if (guess < answer) {
        document.getElementById("msg").innerHTML = "Too low, " + formatPlayerName(playerName) + "! Your guess is " + temp + ".";
    }
    else if (guess > answer) {
        document.getElementById("msg").innerHTML = "Too high, " + formatPlayerName(playerName) + "! Your guess is " + temp + ".";
    }
    else if (guess === answer) {
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
        document.getElementById("msg").innerHTML = "That's correct! Congratulations, " + formatPlayerName(playerName) + "! Try to beat your high score of " + formatPlayerName(sorted[0]) + " next time!";
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
    
    score = range;
    wins++;
    scoreArray.push(score);
    leaderboardArray.push(score);

    sorted = leaderboardArray.sort((a, b) => a - b);
    document.getElementById("leader1").textContent = sorted[0] || 100;
    document.getElementById("leader2").textContent = sorted[1] || 100;
    document.getElementById("leader3").textContent = sorted[2] || 100;

    let avgScore = scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length;
    document.getElementById("avgScore").textContent = "Average Score: " + avgScore.toFixed(2);
    document.getElementById("wins").textContent = "Total Wins: " + wins;
    // Stop the timer
    clearInterval(intervalId);
    running = false;
    times.push(elapsedTime);
    const sortedTime = [...times].sort((a, b) => a - b);
    document.getElementById("fastest").textContent = "Fastest Game: " + sortedTime[0].toFixed(2) + " seconds";
});









