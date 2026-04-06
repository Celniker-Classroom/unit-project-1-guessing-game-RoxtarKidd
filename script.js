var playerName = prompt("What is your name?")

document.getElementById("playBtn").addEventListener("click", function() {
    document.getElementById("playBtn").disabled = true;
    var difficulty = document.querySelector('input[name="level"]:checked').value;
    var range = parseInt(difficulty);
    var ranNum = Math.floor(Math.random() * range) + 1;
    document.getElementById("msg").textContent = "Guess the number!";
    document.getElementById("guessBtn").disabled = false;
})