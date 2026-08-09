// js/activity/quizActivity.js

//import { renderQuizUI } from "../ui/quizUI.js";


let currentQuestion = 0;
let score = 0;
let quizData = null;
let answered = false;
let answeredQuestions = [];

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

    answeredQuestions = [];

    showQuestion(container);
}


/**
 * Hiển thị câu hỏi hiện tại
 */
function showQuestion(container) {
    if (!quizData || quizData.length === 0) {
        console.error("Quiz data không hợp lệ.");
        return;
    }
    
    if (currentQuestion >= quizData.length) {
        finishQuiz(container);
        return;
    }
    
    answered = false;
    showMessage("");
    
    
    const progress = document.getElementById("quizProgress");

    if (progress) {
        progress.textContent = `Câu ${currentQuestion + 1} / ${quizData.length}`;
    }
    const question = quizData[currentQuestion];

    renderQuizUI(
        container,
        question,
        {
            onAnswer: checkAnswer,
            onNext: ()=>{
                nextQuestion(container);
            },
            onPrevious: ()=>{
                previousQuestion(container);
            }
        }
    );
}


/**
 * Kiểm tra đáp án
 */
function checkAnswer(answerIndex) {

    if (answered) {
        return;
    }


    answered = true;


    const question = quizData[currentQuestion];
    
    if(answeredQuestions[currentQuestion]){
        return;
    }

    answeredQuestions[currentQuestion] = true;

    if (answerIndex === question.correct) {

        score++;

        showMessage("🎉 Đúng rồi!");
    } else {

        showMessage("😊 Chưa đúng!");
    }
    

}


/**
 * Sang câu tiếp theo
 */
function nextQuestion(container) {

    currentQuestion++;

    showQuestion(container);
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

    container.innerHTML = "";

    const result = document.createElement("div");

    result.className = "quiz-result";

    result.innerHTML = `
        <h2>🎉 Hoàn thành!</h2>
        <p>Điểm: ${score} / ${quizData.length}</p>
        <button id="quizRestartButton">
            🔄 Tiếp Tục
        </button>
    `;

    container.appendChild(result);

    document
        .getElementById("quizRestartButton")
        .addEventListener("click", () => {

            quizActivity(
                container,
                quizData
            );

        });
}
