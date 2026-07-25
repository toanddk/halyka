speechSynthesis.onvoiceschanged = () => {};

const MathBtn = document.getElementById("MathBtn");
const WordBtn = document.getElementById("WordBtn");
const EngLishBtn = document.getElementById("EngLishBtn");

const menuScreen = document.getElementById("menuScreen");
const mathScreen = document.getElementById("mathScreen");
const vietnameseScreen = document.getElementById("vietnameseScreen");
const tryreadContent = document.getElementById("tryreadContent");

const backMathBtn = document.getElementById("backMathBtn");
const backVietnameseBtn = document.getElementById("backVietnameseBtn");
const phepcongBtn = document.getElementById("phepcongBtn");
const vietnameseReadBtn = document.getElementById("vietnameseReadBtn");

const questionScreen = document.getElementById("questionScreen");
const answerBtn = document.querySelectorAll(".answerBtn");
const exitBtn = document.getElementById("exitBtn");
const exitTryreadBtn = document.getElementById("exitTryreadBtn");

const questionText = document.getElementById("questionText");
const resultText = document.getElementById("resultText");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion;
let correctAnswer;
let currentTryreadIndex = 0;

function showScreen(screen) {

    menuScreen.style.display = "none";
    mathScreen.style.display = "none";
    questionScreen.style.display = "none";
    vietnameseScreen.style.display = "none";
    vietnameseTryreadScreen.style.display = "none";

    if (screen == "menu") {
        menuScreen.style.display = "block";
    }

    if (screen == "math") {
        mathScreen.style.display = "block";
    }

    if (screen == "question") {
        questionScreen.style.display = "block";
    }

    if (screen == "vietnamese") {
        vietnameseScreen.style.display = "block";
    }

    if (screen == "vietnameseTryread") {
        vietnameseTryreadScreen.style.display = "block";
    }
}

MathBtn.addEventListener("click", function () {

    showScreen("math");
});
backMathBtn.addEventListener("click", function () {
    showScreen("menu");
});
backVietnameseBtn.addEventListener("click", function () {

    showScreen("menu");
});
phepcongBtn.addEventListener("click", function () {
    startMath();
});

vietnameseReadBtn.addEventListener("click", function () {
    currentTryreadIndex = 0;
    showVietnameseTryread();
    showScreen("vietnameseTryread");
});

exitBtn.addEventListener("click", function () {

    showScreen("math");
});

exitTryreadBtn.addEventListener("click", function () {

    showScreen("vietnamese");
});

VietnameseBtn.addEventListener("click", function () {

    showScreen("vietnamese");
});

function autoResizeText() {
    document.querySelectorAll(".read-line").forEach(line => {
        let fontSize = 32;
        line.style.fontSize = fontSize + "px";

        while (line.scrollHeight > line.clientHeight && fontSize > 18) {
            fontSize -= 2;
            line.style.fontSize = fontSize + "px";
        }
    });
}

function startVietnamese() {
    resultText.textContent = "";
    showVietnameseTryread();
}

function autoResizeText() {
    document.querySelectorAll(".read-line").forEach(line => {
        let maxWidth = line.offsetWidth;
        let fontSize = 32;

        while (line.scrollHeight > line.clientHeight && fontSize > 18) {
            fontSize -= 2;
            line.style.fontSize = fontSize + "px";
        }
    });
}
