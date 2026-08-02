function renderActivity(){

    const container =
        document.getElementById(
            "activityContainer"
        );

    const data = getLessonData();

    switch(currentLesson){

        case "addition":

            mathUI(container, data, mathRenderer );
            break;

        case "animals":

            animalUI(container, data, animalRenderer);
            break;

        case "reading":

            readingUI(container, data);
            break;

        default:

            console.log("Chưa có UI" );

    }

}