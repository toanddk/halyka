// js/audio/audio.js

const audioCache = {};

/**
 * Lấy Audio object
 */

function getAudio(file) {

    if (!file) {
        return null;
    }

    if (!audioCache[file]) {

        const audio =
            new Audio("assets/audio/" + file);

        audio.preload = "auto";

        audioCache[file] = audio;
    }

    return audioCache[file];
}

/**
 * Unlock audio trên mobile
 *
 * Gọi trong pointerdown / click
 */

function unlockAudio(file) {

    const audio = getAudio(file);

    if (!audio) {
        return;
    }

    audio.muted = true;

    audio.currentTime = 0;

    audio.play()
        .then(() => {

            audio.pause();

            audio.currentTime = 0;

            audio.muted = false;

        })
        .catch(error => {

            console.log(
                "Audio unlock error:",
                error
            );

        });
}


/**
 * Phát âm thanh
 */

function playSound(file) {

    const audio =
        getAudio(file);

    if (!audio) {
        return;
    }

    audio.pause();

    audio.currentTime = 0;

    audio.muted = false;

    audio.play()
        .catch(error => {

            console.log(
                "Audio play error:",
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