// js/activity/animalUI.js

let animalIndex = 0;
let animalScore = 0;


// =====================================
// Khởi động Quiz
// =====================================

function animalUI(
    container,
    data,
    renderer
){


    animalIndex = 0;
    animalScore = 0;


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

            animalIndex++;


            renderAnimalQuiz(
                container,
                data,
                renderer
            );

        };

    }

    renderAnimalQuiz(container,data,renderer);
}



// =====================================
// Hiển thị câu hỏi
// =====================================

function renderAnimalQuiz(container,data,renderer){

    const messageBox = document.getElementById("messageBox");
    if(messageBox){
        messageBox.style.display = "none";
        messageBox.textContent = "";
    }

    const nextButton =
        document.getElementById("nextButton");

    const progress =
        document.getElementById("quizProgress");


    const question =
        data[animalIndex];


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
                    ${animalScore}/${data.length}
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
            `Câu ${animalIndex + 1} / ${data.length}`;

    }


    renderer(
        container,
        question,
        function(
            selectedIndex,
            selectedButton
        ){

            checkAnimalAnswerUI(
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

function checkAnimalAnswerUI(
    container,
    question,
    selectedIndex,
    selectedButton,
    nextButton
){
    console.log("UI nhan:", selectedIndex,"Dung:", question.correct);

    const buttons =
        container.querySelectorAll(
            ".answer-balloon"
        );


    const answer =
        question.answers?.[selectedIndex];


    // phát âm con vật đã chọn
    if(answer && answer.sound){

        playSound(
            answer.sound
        );

    }


    buttons.forEach(button=>{

        button.style.pointerEvents =
            "none";

    });


    if(selectedIndex === question.correct){

        selectedButton.style.background =
            "green";


        showMessage(
            "✅ Chính xác!"
        );


        animalScore++;
console.log(
    "animalScore sau cộng:",
    animalScore
);
    }
    else{

        selectedButton.style.background =
            "red";


        showMessage(
            "❌ Thử lại nhé!"
        );

    }


    if(nextButton){

        nextButton.disabled = false;
        //nextButton.style.display = "block";

    }

}