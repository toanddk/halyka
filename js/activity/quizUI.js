// quizUI.js

let quizIndex = 0;


// =======================
// Khởi động Quiz
// =======================

function quizUI(container, data, renderer){

    quizIndex = 0;


    renderQuiz(
        container,
        data,
        renderer
    );

}



// =======================
// Hiển thị một câu
// =======================

function renderQuiz(container, data, renderer){

    container.innerHTML = "";


    const question =
        data[quizIndex];


    if(!question){

        container.innerHTML =
            "🎉 Hoàn thành bài học";

        quizIndex = 0;

        return;
    }


    // Renderer tự lo phần giao diện

    renderer(
        container,
        question,
        function(selectedAnswer){

            checkQuizAnswer(
                selectedAnswer,
                question.correct
            );


            createNextButton(
                container,
                data,
                renderer
            );

        }
    );

}



// =======================
// Kiểm tra đáp án
// =======================

function checkQuizAnswer(selected, correct){


    if(selected === correct){

        playSound("chinh-xac.mp3");

        console.log("Đúng");

    }
    else{

        playSound("thu-lai-nhe.mp3");

        console.log("Sai");

    }

}



// =======================
// Nút câu tiếp theo
// =======================

function createNextButton(
    container,
    data,
    renderer
){


    if(container.querySelector(".nextBtn")){
        return;
    }


    const btn =
        document.createElement("button");


    btn.className =
        "nextBtn";


    btn.textContent =
        "➡ Câu tiếp theo";


    btn.onclick = function(){


        quizIndex++;


        renderQuiz(
            container,
            data,
            renderer
        );

    };


    container.appendChild(btn);

}