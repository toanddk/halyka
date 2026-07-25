function showMathQuestion() {
    let index = Math.floor(Math.random() * mathquestions.length);
    currentQuestion = mathquestions[index];

    questionText.textContent = `${currentQuestion.a} + ${currentQuestion.b} = ?`;
    correctAnswer = currentQuestion.a + currentQuestion.b;
}

function showAnswers(correctAnswer) {
    let answers = [correctAnswer];

    while (answers.length < 4) {
        let wrongAnswer = correctAnswer + Math.floor(Math.random() * 7) - 3;

        if (wrongAnswer >= 0 && !answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].textContent = answers[i];

        answerBtn[i].onclick = function () {
            checkAnswer(answers[i]);
        };
    }
}

function checkAnswer(selected) {
    if (selected === correctAnswer) {
        resultText.textContent = "🎉 Đúng rồi!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "❌ Sai rồi!";
        resultText.style.color = "red";
    }
}

nextBtn.addEventListener("click", function () {
    showMathQuestion();
    showAnswers(correctAnswer);
    resultText.textContent = "";
});

function startMath() {
    resultText.textContent = "";
    showMathQuestion();
    showScreen("question");
    showAnswers(correctAnswer);
}
