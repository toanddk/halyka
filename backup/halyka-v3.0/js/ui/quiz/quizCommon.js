// js/ui/quiz/quizCommon.js


/*========= * QUESTION CONTAINER * =============*/

function createQuestionContainer() {

    const wrapper = document.createElement("div");

    wrapper.className = "quiz-container";

    return wrapper;
}


/*====== * ANSWERS * ======= */

function createAnswers(question, actions, options = {}) {

    const answerContainer = document.createElement("div");

    // Class mặc định
    answerContainer.className = options.containerClass || "quiz-answers";


    question.answers.forEach( (answer, index) => {

            const button = document.createElement("button");

            // Class mặc định
            button.className = options.buttonClass || "quiz-answer";


            /* ==============================
             * Nội dung đáp án
             * ==============================*/

            if ( typeof answer === "string" ) {
                button.textContent = answer;

            } else 
                { button.textContent = answer.text;
                    }

            /*=====* Click answer * ======*/

            button.addEventListener( "click", () => {

                    /* Phát sound của answer
                     * Chỉ thực hiện nếu answer có sound. */

                    if (typeof answer === "object" && answer.sound ) {

                        playSound( answer.sound  );
                    }

                    /* Gửi index về quizActivity  */
                    actions.onAnswer( index );

                }
            );
            
            answerContainer.appendChild( button );
        }
    );

    return answerContainer;
}

/*=========* NAVIGATION* ===========*/

function createNavigation(container, actions) {

    const navigation = document.createElement("div");
    navigation.className ="quiz-navigation";

    /*===========* NEXT* ===========*/
    const nextButton = document.createElement("button");
        nextButton.className = "quiz-navigation-button";
    nextButton.textContent = "Câu tiếp theo";

    nextButton.addEventListener( "click", () => {
        actions.onNext();
        }
    );


    /*========== * PREVIOUS * ============ */
    const previousButton = document.createElement("button");
    previousButton.className = "quiz-navigation-button";
    previousButton.textContent = "Câu trước";

    previousButton.addEventListener("click", () => {
        actions.onPrevious();
        }
    );

    /*===========* Thứ tự button * =============
     * Tiếp → nằm trước * ← Trước nằm sau */

    navigation.appendChild(previousButton);

    navigation.appendChild(nextButton );

    container.appendChild(navigation );
}