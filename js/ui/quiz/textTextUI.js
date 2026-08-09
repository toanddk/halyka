// js/ui/quiz/textTextUI.js


function renderTextText(
    container,
    question,
    actions
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
    // NAVIGATION
    // ========================================

    createNavigation(
        wrapper,
        actions
    );


    // ========================================
    // ADD TO CONTAINER
    // ========================================

    container.appendChild(
        wrapper
    );

}