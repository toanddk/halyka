function renderActivity(){

    const container =
        document.getElementById(
            "activityContainer"
        );

    const data = getLessonData();

    switch(currentLesson){

        case "addition":

            quizUI(container, data, mathRenderer );
            break;

        case "animals":

            quizUI(container, data, animalRenderer);
            break;

        case "reading":

            readingUI(container, data);
            break;

        default:

            console.log("Chưa có UI" );

    }

}