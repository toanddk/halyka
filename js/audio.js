// js/audio/audio.js

const audioCache = {};

function playSound(file) {

    if (!file) {
        return;
    }

    let audio = audioCache[file];

    if (!audio) {

        audio = new Audio("assets/audio/" + file);

        audio.preload = "auto";

        audioCache[file] = audio;
    }

    audio.pause();

    audio.currentTime = 0;

    audio.play()
        .catch(error => {

            console.log(
                "Audio error:",
                error
            );

        });
}

/*
function playSound(file){

    if(!file){
        return;
    }


    const audio =
        new Audio(
            "assets/audio/" + file
        );


    audio.play()
        .catch(error => {

            console.log(
                "Không phát được âm thanh:",
                error
            );

        });

}*/