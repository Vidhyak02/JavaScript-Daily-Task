let questionNumber = 1;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    document.getElementById("feedback").textContent = "";
    document.getElementById("next").disabled = true;

    if (questionNumber === 1) {
        document.getElementById("question").textContent =
            "1. Which language is used for web development?";

        document.getElementById("option1").textContent = "Java";
        document.getElementById("option2").textContent = "JavaScript";
        document.getElementById("option3").textContent = "C";
        document.getElementById("option4").textContent = "Python";
    } 
    else if (questionNumber === 2) {
        document.getElementById("question").textContent =
            "2. Which keyword declares a variable in JavaScript?";

        document.getElementById("option1").textContent = "int";
        document.getElementById("option2").textContent = "String";
        document.getElementById("option3").textContent = "let";
        document.getElementById("option4").textContent = "float";
    } 
    else if (questionNumber === 3) {
        document.getElementById("question").textContent =
            "3. Which symbol is used for strict equality?";

        document.getElementById("option1").textContent = "=";
        document.getElementById("option2").textContent = "==";
        document.getElementById("option3").textContent = "===";
        document.getElementById("option4").textContent = "!=";
    } 
    else if (questionNumber === 4) {
        document.getElementById("question").textContent =
            "4. Which method adds an element to an array?";

        document.getElementById("option1").textContent = "pop()";
        document.getElementById("option2").textContent = "push()";
        document.getElementById("option3").textContent = "shift()";
        document.getElementById("option4").textContent = "join()";
    } 
    else if (questionNumber === 5) {
        document.getElementById("question").textContent =
            "5. Which data type represents true or false?";

        document.getElementById("option1").textContent = "String";
        document.getElementById("option2").textContent = "Number";
        document.getElementById("option3").textContent = "Boolean";
        document.getElementById("option4").textContent = "Object";
    }

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("next").textContent =
        questionNumber === 5 ? "View Results" : "Next Question";
}

function checkAnswer(selectedOption) {
    if (answered) {
        return;
    }

    answered = true;

    let correctOption;

    if (questionNumber === 1) {
        correctOption = 2;
    } 
    else if (questionNumber === 2) {
        correctOption = 3;
    } 
    else if (questionNumber === 3) {
        correctOption = 3;
    } 
    else if (questionNumber === 4) {
        correctOption = 2;
    } 
    else if (questionNumber === 5) {
        correctOption = 3;
    }

    if (selectedOption === correctOption) {
        score++;
        document.getElementById("feedback").textContent =
            "Correct Answer!";
    } else {
        document.getElementById("feedback").textContent =
            "Wrong Answer!";
    }

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("next").disabled = false;
}

function nextQuestion() {
    if (!answered) {
        return;
    }

    if (questionNumber < 5) {
        questionNumber++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question").textContent =
        "Quiz Completed!";

    document.getElementById("options").hidden = true;
    document.getElementById("next").hidden = true;

    document.getElementById("feedback").textContent =
        "Your Final Score: " + score + " / 5";

    document.getElementById("score").textContent =
        "Percentage: " + (score / 5 * 100) + "%";

    document.getElementById("restart").hidden = false;
}

function restartQuiz() {
    questionNumber = 1;
    score = 0;

    document.getElementById("options").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("restart").hidden = true;

    loadQuestion();
}

loadQuestion();
