// js/ui/quiz/quizCommon.js


/*========= * QUESTION CONTAINER * =============*/

function createQuestionContainer() {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "quiz-container";

    return wrapper;
}


/*====== * ANSWERS * ======= */

function createAnswers(
    question,
    actions,
    options = {}
) {

    const answerContainer =
        document.createElement("div");

    // Class mặc định
    answerContainer.className =
        options.containerClass ||
        "quiz-answers";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            // Class mặc định
            button.className =
                options.buttonClass ||
                "quiz-answer";


            /* ==============================
             * Nội dung đáp án
             * ==============================*/

            if (typeof answer === "string") {

                button.textContent =
                    answer;

            } else {

                button.textContent =
                    answer.text;

            }


            /* ==============================
             * Click answer
             * ==============================*/

            button.addEventListener(
                "click",
                () => {

                    /* Phát sound của answer */

                    if (
                        typeof answer === "object" &&
                        answer.sound
                    ) {

                        playSound(
                            answer.sound
                        );

                    }


                    /* Gửi index về quizActivity */

                    actions.onAnswer(
                        index
                    );

                }
            );


            answerContainer.appendChild(
                button
            );

        }
    );


    return answerContainer;
}