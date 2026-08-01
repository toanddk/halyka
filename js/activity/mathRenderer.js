function mathRenderer(
    container,
    question,
    onAnswer
){

    container.innerHTML = "";


    const title =
        document.createElement("h2");

    title.textContent =
        question.question;

    container.appendChild(title);



    const answerBox =
        document.createElement("div");

    container.appendChild(answerBox);



    question.answers.forEach(
        (answer,index)=>{


        const btn =
            document.createElement("button");


        btn.textContent = answer;


        btn.dataset.index = index;


        btn.onclick = function(){

            onAnswer(
                index,
                btn
            );

        };


        answerBox.appendChild(btn);


    });

}