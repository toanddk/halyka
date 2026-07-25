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

const mathquestions = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 4, b: 1 },
    { a: 5, b: 2 },
    { a: 3, b: 6 },
    { a: 7, b: 1 }
];

const vietnameseTryread = [
    { 
        textA: "Ăn", 
        audioA: "an",
        textB: "Ăn cơm", 
        audioB: "an-com",
        textC: "Bé ăn cơm", 
        audioC: "be-an-com",
        textD: "Bé ăn cơm cá", 
        audioD: "be-an-com-ca"
    },

    { 
        textA: "Uống", 
        audioA: "uong",
        textB: "Uống nước", 
        audioB: "uong-nuoc",
        textC: "Bé uống nước", 
        audioC: "be-uong-nuoc",
        textD: "Bé uống nước cam", 
        audioD: "be-uong-nuoc-cam"
    },

    { 
        textA: "Học", 
        audioA: "hoc",
        textB: "Học bài", 
        audioB: "hoc-bai",
        textC: "Bé học bài", 
        audioC: "be-hoc-bai",
        textD: "Bé học bài chăm chỉ", 
        audioD: "be-hoc-bai-cham-chi"
    },

    { 
        textA: "Đi", 
        audioA: "di",
        textB: "Đi học", 
        audioB: "di-hoc",
        textC: "Bé đi học", 
        audioC: "be-di-hoc",
        textD: "Bé đi học ngoan", 
        audioD: "be-di-hoc-ngoan"
    }
];


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

function showMathQuestion() {
    let index = Math.floor(Math.random() * mathquestions.length);
        currentQuestion = mathquestions[index];
        questionText.textContent= `${currentQuestion.a} + ${currentQuestion.b}=?`;

    correctAnswer = currentQuestion.a + currentQuestion.b;
}

function showVietnameseTryread() {
    tryreadContent.innerHTML = "";

    let item = vietnameseTryread[currentTryreadIndex];

    tryreadContent.innerHTML = `
        <p class="read-line" onclick="speakText('${item.audioA}')">${item.textA}</p>
        <p class="read-line" onclick="speakText('${item.audioB}')">${item.textB}</p>
        <p class="read-line" onclick="speakText('${item.audioC}')">${item.textC}</p>
        <p class="read-line" onclick="speakText('${item.audioD}')">${item.textD}</p>
    `;
    autoResizeText();
}

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
    showMathQuestion();               // tạo câu hỏi mới
    showAnswers(correctAnswer);   // tạo đáp án mới
    resultText.textContent = "";  // xóa kết quả cũ
});

function startMath() {
    resultText.textContent = "";
    showMathQuestion();
    showScreen("question");
    showAnswers(correctAnswer);
}

function startVietnamese() {
    resultText.textContent = "";
    showVietnameseTryread();
    //showScreen("question");
    //showAnswers(correctAnswer);
}

vietnameseTryread.forEach(item => {
    console.log(item.a);
    console.log(item.b);
    console.log(item.c);
    console.log(item.d);
});

nextTryreadBtn.addEventListener("click", function () {
    currentTryreadIndex = Math.floor(Math.random() * vietnameseTryread.length);
    if (currentTryreadIndex >= vietnameseTryread.length) {
        currentTryreadIndex = 0;   // quay lại từ đầu nếu hết câu
    }

    showVietnameseTryread();
});

function speakText(name) {
    const audio = new Audio(`audio/${name}.mp3`);
    audio.play();
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
