function startQuiz() {
    // Set the time limit for the quiz
    var timeLimit = 75; // in seconds
    var timeLeft = timeLimit;

    // Set the interval for the timer
    var timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + " seconds";

        // When the timer runs out, stop the timer and show the results
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

var questions = [
    {
        question: "What is the name of the protagonist in The Hunger Games?",
        choices: ["Beatrice Prior", "Katniss Everdeen", "Johanna Mason", "Arya Stark "],
        answer: "Katniss Everdeen"
    },
    {
        question: "What district is Katniss Everdeen from?",
        choices: ["District 2", "District 4", "District 11", "District 12"],
        answer: "District 12"
    },
    {
        question: "What is the name of the weapon that Katniss uses to hunt in District 12?",
        choices: ["Spear", "Hatchet", "Throwing Knives", "Bow"],
        answer: "bow"
    }, {
        question: "Who is the tribute from District 4 in the 75th Hunger Games?",
        choices: ["Cato", "Peeta", "Finnick", "Haymitch"],
        answer: "Finnick"
    },
];