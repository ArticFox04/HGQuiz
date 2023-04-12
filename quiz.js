
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
      answer: "Bow"
  }, {
      question: "Who is the tribute from District 4 in the 75th Hunger Games?",
      choices: ["Cato", "Peeta", "Finnick", "Haymitch"],
      answer: "Finnick"
  },
];

function startQuiz() {
    // Set the time limit for the quiz
    var timeLimit = 75; // in seconds
    var timeLeft = timeLimit;
    displayQuestions()
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


function displayQuestions() {
    // Loop through the questions array and display each question
    for (var i = 0; i < questions.length; i++) {
      // Create a new div for the question and its choices
      var questionDiv = document.createElement("div");
      questionDiv.innerHTML = "<h3>" + questions[i].question + "</h3>";
  
      // Loop through the choices for the question and create a radio button for each choice
      for (var j = 0; j < questions[i].choices.length; j++) {
        var choice = document.createElement("input");
        choice.type = "radio";
        choice.name = "question" + i;
        choice.value = questions[i].choices[j];
        questionDiv.appendChild(choice);
  
        var choiceLabel = document.createElement("label");
        choiceLabel.innerHTML = questions[i].choices[j];
        questionDiv.appendChild(choiceLabel);
      }
  
      // Add the question div to the quiz container
      document.getElementById("quiz-container").appendChild(questionDiv);
    }
  };
  function showResults() {
    var score = 0;
  
    // Loop through the questions array and check the user's answers
    for (var i = 0; i < questions.length; i++) {
      var userAnswer = document.querySelector('input[name="question' + i + '"]:checked').value;
      if (userAnswer === questions[i].answer) {
        score++;
      }
    }
  
    // Display the user's score and the time taken
    var timeTaken = timeLimit - timeLeft;
    document.getElementById("quiz-container").innerHTML = "<h2>You scored " + score + " out of " + questions.length + " questions in " + timeTaken + " seconds</h2>";
  };
  