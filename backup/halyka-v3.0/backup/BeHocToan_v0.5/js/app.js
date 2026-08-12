const startButton = document.getElementById("startButton");
const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const backBtn = document.getElementById("backBtn");
const phepcongBtn = document.getElementById("phepcongBtn");
const questionScreen = document.getElementById("questionScreen");
const answerBtn = document.querySelectorAll(".answerBtn");
const exitBtn = document.getElementById("exitBtn");
const questionText = document.getElementById("questionText");
const resultText = document.getElementById("resultText");

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

startButton.addEventListener("click", function () {

    showScreen("game");
});
backBtn.addEventListener("click", function () {

    showScreen("menu");
});
phepcongBtn.addEventListener("click", function () {
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
    //console.log(answerBtn.length);
    let answers = [];
    // Đưa đáp án đúng vào trước
    answers.push(correctAnswer);

    // Tạo thêm đáp án sai
    while (answers.length < 4) {

        let wrongAnswer =
            correctAnswer + Math.floor(Math.random() * 7) - 3;

        // Không cho trùng đáp án đúng
        // Không cho nhỏ hơn 0
        if (wrongAnswer >= 0 &&
            !answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }

    // Xáo trộn đáp án
    answers.sort(() => Math.random() - 0.5);
    // Hiển thị lên 4 nút
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].textContent = answers[i];
    }

}
