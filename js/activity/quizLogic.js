// js/activity/quizLogic.js


function checkAnswer(answer, correct){

    if(answer === correct){

        console.log("Đúng 🎉");

        return true;

    }else{

        console.log("Sai");

        return false;

    }

}

// quizLogic.js

let currentQuestion = 0;
let score = 0;


function checkAnswer(answer, correct){

    return answer === correct;

}


function resetQuiz(){

    currentQuestion = 0;
    score = 0;

}