function animalRenderer(
    container,
    question,
    callback
){

    container.innerHTML = "";


    // icon động vật

    const icon =
        document.createElement("div");

    icon.className =
        "animal-icon";


    icon.textContent =
        question.img;


    container.appendChild(icon);



    // vùng đáp án

    const answerBox =
        document.createElement("div");


    answerBox.className =
        "animal-answer-box";


    container.appendChild(answerBox);



    question.answers.forEach(
        (answer,index)=>{


        const btn =
            document.createElement("div");


        btn.className =
            "answer-balloon";


        btn.textContent =
            answer.text;



        btn.onclick = function(){

            callback(
                index,
                btn
            );

        };


        answerBox.appendChild(btn);


    });

}