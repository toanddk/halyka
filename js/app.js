const KidMathBtn = document.getElementById("KidMathBtn");
const KyWordBtn = document.getElementById("KyWordBtn");
const EngLishBtn = document.getElementById("EngLishBtn");

const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const backBtn = document.getElementById("backBtn");
const phepcongBtn = document.getElementById("phepcongBtn");
const questionScreen = document.getElementById("questionScreen");
const answerBtn = document.querySelectorAll(".answerBtn");
const exitBtn = document.getElementById("exitBtn");
const questionText = document.getElementById("questionText");
const resultText = document.getElementById("resultText");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion;
let correctAnswer;
const questions = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 4, b: 1 },
    { a: 5, b: 2 },
    { a: 3, b: 6 },
    { a: 7, b: 1 }
];

function showScreen(screen) {

    menuScreen.style.display = "none";
    gameScreen.style.display = "none";
    questionScreen.style.display = "none";

    if (screen == "menu") {
        menuScreen.style.display = "block";
    }

    if (screen == "game") {
        gameScreen.style.display = "block";
    }

    if (screen == "question") {
        questionScreen.style.display = "block";
    }
}

KidMathBtn.addEventListener("click", function () {

    showScreen("game");
});
backBtn.addEventListener("click", function () {

    showScreen("menu");
});
phepcongBtn.addEventListener("click", function () {
    resultText.textContent = "";
    showQuestion();
    showScreen("question");
    showAnswers(correctAnswer);
});

exitBtn.addEventListener("click", function () {

    showScreen("game");
});

function showQuestion() {
    let index = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[index];
        questionText.textContent= `${currentQuestion.a} + ${currentQuestion.b}=?`;

    correctAnswer = currentQuestion.a + currentQuestion.b;
    //showAnswers();
}

function showAnswers(correctAnswer) {
    let answers = [];
    answers.push(correctAnswer);

    while (answers.length < 4) {
        let wrongAnswer = correctAnswer + Math.floor(Math.random() * 7) - 3;

        if (wrongAnswer >= 0 && !answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].textContent = answers[i];

        // ⭐ GẮN SỰ KIỆN CLICK CHO TỪNG NÚT
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
    showQuestion();               // tạo câu hỏi mới
    showAnswers(correctAnswer);   // tạo đáp án mới
    resultText.textContent = "";  // xóa kết quả cũ
});
