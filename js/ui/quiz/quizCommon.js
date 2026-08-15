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

            button.addEventListener("click", () => {

            // Kiểm tra đáp án
            const isCorrect = actions.onAnswer(index);

            // Nếu đáp án có audio
            if ( typeof answer === "object" && answer.sound ) {

                const answerAudio =
                playSound(answer.sound);

                // Chờ audio đáp án phát xong
                answerAudio.addEventListener("ended", () => {

                playResultSound(isCorrect);
            },

            { once: true }
                );
            } else {
             // Không có audio đáp án
                playResultSound(isCorrect);
             }
            });

            answerContainer.appendChild(
                button
            );

        }
    );


    return answerContainer;
}

function playResultSound(isCorrect) {

    if (isCorrect) {

        playSound(
            "system/chinh-xac.mp3"
        );

    } else {

        playSound(
            "system/thu-lai-nhe.mp3"
        );

    }

}