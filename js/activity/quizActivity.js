// js/activity/quizActivity.js

//import { renderQuizUI } from "../ui/quizUI.js";


let currentQuestion = 0;
let score = 0;
let quizData = null;
let answered = false;
let answerResults = [];
let selectedAnswers = [];
//let answeredQuestions = [];


/**
 * Khởi động một bài Quiz
 */
function quizActivity(container, lesson) {

    const allQuestions = getLessonData();


    // Chọn ngẫu nhiên 10 câu từ toàn bộ dữ liệu

    quizData = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);


    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];
    answerResults = [];


    // =========================================
    // Nút điều hướng chung
    // =========================================

    const prevButton =
        document.getElementById("prevButton");

    const nextButton =
        document.getElementById("nextButton");


    prevButton.style.display =
        "inline-block";

    nextButton.style.display =
        "inline-block";


    // =========================================
    // Quay lại
    // =========================================

    prevButton.onclick = () => {

        previousQuestion(container);

    };


    // =========================================
    // Tiếp theo
    // =========================================

    nextButton.onclick = () => {

        nextQuestion(container);

    };


    // =========================================
    // Hiển thị câu đầu tiên
    // =========================================

    showQuestion(container);

}


/**
 * Hiển thị câu hỏi hiện tại
 */
function showQuestion(container) {

    if (!quizData || quizData.length === 0) {

        console.error(
            "Quiz data không hợp lệ."
        );

        return;
    }


    // =========================================
    // Nếu hết câu
    // =========================================

    if (currentQuestion >= quizData.length) {

        finishQuiz(container);

        return;
    }


    answered = false;

    showMessage("");


    // =========================================
    // Progress
    // =========================================

    const progress =
        document.getElementById(
            "quizProgress"
        );


    if (progress) {

        progress.textContent =
            `Câu ${currentQuestion + 1} / ${quizData.length}`;

    }


    // =========================================
    // Câu hỏi hiện tại
    // =========================================

    const question = quizData[currentQuestion];

    console.log(
        "ACTION OBJECT =",
        {
            onAnswer: checkAnswer,
            selectedAnswer:
            selectedAnswers[currentQuestion]
        });

    // =========================================
    // Render Quiz
    // =========================================

    renderQuizUI(
        container,
        question,
        {
            onAnswer: checkAnswer,
            selectedAnswer: selectedAnswers[currentQuestion]
        }

    );

}


/**
 * Kiểm tra đáp án
 */
function checkAnswer(answerIndex) {

    const question =
        quizData[currentQuestion];

    const isCorrect =
        answerIndex === question.correct;
    
    // lưu đáp án cuối cùng
    selectedAnswers[currentQuestion] = answerIndex;

    // Luôn cập nhật theo lựa chọn mới nhất
    answerResults[currentQuestion] = isCorrect;

    // Trả về để phát âm thanh
    return isCorrect;
}

/**
 * Sang câu tiếp theo
 */
function nextQuestion(container) {

    if (
        currentQuestion <
        quizData.length - 1
    ) {

        currentQuestion++;

        showQuestion(container);

    } else {

        // Câu cuối → hoàn thành Quiz

        finishQuiz(container);

    }

}


/**
 * Quay lại câu trước
 */
function previousQuestion(container) {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion(container);

    }

}


/**
 * Kết thúc Quiz
 */
function finishQuiz(container) {

    

    score = answerResults.filter(result => result === true ).length;

    container.innerHTML = "";

    const result =
        document.createElement("div");


    result.className =
        "quiz-result";


    result.innerHTML = `

        <h2>🎉 Hoàn thành!</h2>

        <p>
            Điểm:
            ${score} / ${quizData.length}
        </p>

        <button id="quizRestartButton">
            🔄 Tiếp Tục
        </button>

    `;


    container.appendChild(result);


    document
        .getElementById(
            "quizRestartButton"
        )
        .addEventListener(
            "click",
            () => {

                quizActivity(
                    container,
                    quizData
                );

            }
        );

}