// js/ui/quiz/imageTextUI.js

function renderImageText(
    container,
    question,
    actions
) {

    const wrapper =
        createQuestionContainer();


    // ========================================
    // IMAGE
    // ========================================

    const image =
        document.createElement("img");

    image.className =
        "animal-icon";

    image.src =
        question.image;

    image.alt = "";

    wrapper.appendChild(
        image
    );


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
            actions,
            {
                containerClass: "image-answer-box",

                buttonClass: "answer-balloon",
                
                selectedAnswer: actions.selectedAnswer
            }
        );

    wrapper.appendChild(
        answers
    );


    container.appendChild(
        wrapper
    );
}