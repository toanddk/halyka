
// js/audio.js
const audioCorrect = new Audio("audio/chinh-xac.mp3");
const audioWrong = new Audio("audio/thu-lai-nhe.mp3");

function playCorrectSound(){

    audioCorrect.currentTime = 0;
    audioCorrect.play();

}

function playWrongSound(){

    audioWrong.currentTime = 0;
    audioWrong.play();

}

function playSound(file){

    if(!file){
        return;
    }


    const audio = new Audio(
        "assets/audio/" + file
    );


    audio.play()
        .catch(error => {

            console.log(
                "Không phát được âm thanh:",
                error
            );

        });

}
/*
function playSound(file){
    const audio = new Audio(
        "assets/audio/" + file
    );
    audio.play();
}*/