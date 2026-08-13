// js/ui/quiz/textTextUI.js


function renderTextText(
    container,
    question,
    actions,
    coin
) {

    const wrapper =
        createQuestionContainer();


    // ========================================
    // QUESTION
    // ========================================
// ========================================
// QUESTION AUDIO
// ========================================

if (question.audio) {

    const audioButton =
        document.createElement("button");

    audioButton.className =
        "question-audio-button";

    audioButton.textContent =
        "🔊 Nghe câu hỏi";

    audioButton.addEventListener(
        "click",
        () => {
            playSound(question.audio);
        }
    );

    wrapper.appendChild(
        audioButton
    );
}

    const questionElement =
        document.createElement("div");

    questionElement.className =
        "quiz-question";

    questionElement.textContent =
        question.question;
        //question.coin;

    wrapper.appendChild(
        questionElement
    );


    // ========================================
    // ANSWERS
    // ========================================

    const answers =
        createAnswers(
            question,
            actions
        );

    wrapper.appendChild(
        answers
    );

    // ========================================
    // ADD TO CONTAINER
    // ========================================

    container.appendChild(
        wrapper
    );

}