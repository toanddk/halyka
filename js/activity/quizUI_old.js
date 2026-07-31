function quizUI(container, data){

    container.innerHTML = "";
    renderQuestion(container,data);

}

function renderQuestion(container, data){

    container.innerHTML = "";


    const questionData = data[currentQuestion];


    const question =
        document.createElement("h3");

    question.textContent =
        "Câu " +
        (currentQuestion + 1) +
        ": " +
        questionData.question;

    container.appendChild(question);



    const answerBox =
        document.createElement("div");

    container.appendChild(answerBox);



    const result =
        document.createElement("p");

    container.appendChild(result);



    questionData.answers.forEach(answer => {


        const btn =
            document.createElement("button");


        btn.textContent = answer;


        btn.onclick = function(){


            const correct =
                checkAnswer(
                    answer,
                    questionData.correct
                );


            if(correct){
                playCorrectSound();

                result.textContent =
                    "🎉 Đúng rồi!";

                score++;

            }else{
                playWrongSound();

                result.textContent =
                    "❌ Sai rồi!";

            }


            nextBtn.style.display = "block";

        };


        answerBox.appendChild(btn);

    });



    const nextBtn =
        document.createElement("button");


    nextBtn.textContent =
        "➡ Câu tiếp theo";


    nextBtn.style.display =
        "none";


    nextBtn.onclick = function(){

        currentQuestion++;


        if(currentQuestion < data.length){

            renderQuestion(
                container,
                data
            );

        }else{

            container.innerHTML =
                "🎉 Hoàn thành! Điểm: "
                + score;

        }

    };


    container.appendChild(nextBtn);

}