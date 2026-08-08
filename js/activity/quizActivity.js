// js/activity/quizActivity.js

//import { renderQuizUI } from "../ui/quizUI.js";


let currentQuestion = 0;
let score = 0;
let quizData = null;
let answered = false;


/**
 * Khởi động một bài Quiz
 */
function quizActivity(container, lesson) {

    quizData = getLessonData();

    currentQuestion = 0;
    score = 0;

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


    const question =
        quizData[currentQuestion];

    if (answerIndex === question.correct) {

        score++;

        showMessage("🎉 Đúng rồi!");
        if(currentSubject === "math"){
            playSound("system/chinh-xac.mp3");
        }

    } else {

        showMessage("😊 Chưa đúng!");
                if(currentSubject === "math"){
            playSound("system/thu-lai-nhe.mp3");
        }

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
            🔄 Làm lại
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
