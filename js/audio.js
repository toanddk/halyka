// js/audio/audio.js

const audioCache = {};

let audioUnlocked = false;


/**
 * Lấy Audio object từ cache
 */
function getAudio(file) {

    if (!file) {
        return null;
    }

    let audio = audioCache[file];

    if (!audio) {

        audio =
            new Audio("assets/audio/" + file);

        audio.preload = "auto";

        audioCache[file] = audio;
    }

    return audio;
}


/**
 * Phát âm thanh
 */
function playSound(file) {

    if (!file) {
        return;
    }

    const audio =
        getAudio(file);

    if (!audio) {
        return;
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


/**
 * Unlock audio trên mobile
 *
 * Phải được gọi trong một thao tác
 * của người dùng như pointerdown / click.
 */
function unlockAudio(file) {

    if (!file) {
        return;
    }

    const audio =
        getAudio(file);

    if (!audio) {
        return;
    }

    audio.volume = 0;

    audio.currentTime = 0;

    audio.play()
        .then(() => {

            audio.pause();

            audio.currentTime = 0;

            audio.volume = 1;

            audioUnlocked = true;

            console.log(
                "Audio unlocked:",
                file
            );

        })
        .catch(error => {

            console.log(
                "Audio unlock error:",
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