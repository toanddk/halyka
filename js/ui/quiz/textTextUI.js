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