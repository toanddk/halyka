//js/activity/renderActivity.js

function renderActivity() {
    const container =
        document.getElementById(
            "activityContainer"
        );

    const lesson = getCurrentLesson();

    switch (lesson.type) {

        case "quiz":
            quizActivity(container,lesson);
            break;

        case "reading":
            //ReadingActivity(container,lesson);
            break;

        case "listening":
            ListeningActivity(container,lesson);
            break;
        default: 
        console.error("chua co Activity:", lesson.type);
    }
}

