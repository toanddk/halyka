// js/audio/audio.js


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

}