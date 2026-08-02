// js/activity/quizUI.js

let quizIndex = 0;
let quizScore = 0;


// =====================================
// Khởi động Quiz
// =====================================

function quizUI(
    container,
    data,
    renderer
){

    quizIndex = 0;
    quizScore = 0;


    const nextButton =
        document.getElementById(
            "nextButton"
        );
    if(nextButton){

        nextButton.style.display = "block";

        //nextButton.disabled = true;
    }


    if(nextButton){

        nextButton.onclick = function(){

            quizIndex++;


            renderQuiz(
                container,
                data,
                renderer
            );

        };

    }

    renderQuiz(container,data,renderer);
}



// =====================================
// Hiển thị câu hỏi
// =====================================

function renderQuiz(container,data,renderer){

    const nextButton =
        document.getElementById("nextButton");

    const progress =
        document.getElementById("quizProgress");


    const question =
        data[quizIndex];


    // =========================
    // Hết câu hỏi
    // =========================

    if(!question){

        container.innerHTML = `

            <div class="quizResult">

                <h2>
                    🎉 Hoàn thành!
                </h2>

                <h3>
                    Điểm:
                    ${quizScore}/${data.length}
                </h3>

            </div>

        `;


        if(progress){

            progress.textContent = "";

        }


        if(nextButton){

            nextButton.style.display = "none";

            nextButton.onclick = null;

        }


        return;

    }


    // =========================
    // Câu hỏi bình thường
    // =========================

    container.innerHTML = "";


    if(progress){

        progress.textContent =
            `Câu ${quizIndex + 1} / ${data.length}`;

    }


    renderer(
        container,
        question,
        function(
            selectedIndex,
            selectedButton
        ){

            checkAnswerUI(
                container,
                question,
                selectedIndex,
                selectedButton,
                nextButton
            );

        }
    );

}
// =====================================
// Kiểm tra đáp án
// =====================================

function checkAnswerUI(
    container,
    question,
    selectedIndex,
    selectedButton,
    nextButton

){

    const buttons = container.querySelectorAll(".answerBox button");

    buttons.forEach(button => {

        button.disabled = true;

    });

    if(selectedIndex === question.correct){

        selectedButton.style.background = "green";

        playSound("system/chinh-xac.mp3");
        quizScore++;

    }
    else{

        selectedButton.style.background = "red";

        if(buttons[question.correct]){

            buttons[question.correct].style.background = "green";

        }

        playSound("system/thu-lai-nhe.mp3");

    }

    // mở nút tiếp theo

    if(nextButton){

        nextButton.disabled =false;

    }

}