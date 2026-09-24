let basketballs = "";

for (let i = 0; i < 10; i++) {
    basketballs += '<span class="ball">🏀</span>';
}

document.getElementById("basketballs").innerHTML = basketballs;



let shotsMade = 0;
let shotGoal = 10;

while (shotsMade < shotGoal) {
    shotsMade++;
}

document.getElementById("shotCounter").textContent =
    "Shots completed: " + shotsMade + " / " + shotGoal;



let trainingScore = 85;




function changeTraining() {

    let message = document.getElementById("trainingMessage");

    if (trainingScore >= 80) {

        message.textContent = "🔥 Great job! You're ready to keep improving!";
        message.style.backgroundColor = "lightgreen";
        message.style.color = "darkgreen";
        message.style.fontSize = "24px";

    } else {

        message.textContent = "💪 Keep practicing! You can get there!";
        message.style.backgroundColor = "lightcoral";
        message.style.color = "darkred";
        message.style.fontSize = "22px";
    }
}