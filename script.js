const startButton = document.getElementById("start-button");
const breatheInstructions = document.getElementById("breathe-instructions");
const timer = document.getElementById("timer");

// set the initial value of the timer
timer.innerHTML = "60";

let breatheInterval;

const breatheIn = () => {
    breatheInstructions.innerHTML = "Breathe in...";
    setTimeout(() => {
        breatheOut();
    }, 5000);
}

const breatheOut = () => {
    breatheInstructions.innerHTML = "Breathe out...";
    setTimeout(() => {
        breatheIn();
    }, 5000);
}

const startBreathing = () => {
    startButton.style.display = "none";
    breatheInterval = setInterval(() => {
        let timeLeft = parseInt(timer.innerHTML);
        if (timeLeft === 0) {
            clearInterval(breatheInterval);
            breatheInstructions.innerHTML = "Well done! Take a break.";
            timer.innerHTML = "";
            return;
        }
        timer.innerHTML = timeLeft - 1;
    }, 1000);
    breatheIn();
}

startButton.addEventListener("click", startBreathing);
