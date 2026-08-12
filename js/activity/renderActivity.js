//js/activity/renderActivity.js

function renderActivity() {
    const container =
        document.getElementById("activityContainer" );

    const lesson = getCurrentLesson();

    container.innerHTML= "";
  
    showMessage("");
    
    switch (lesson.type) {

        case "quiz":
            quizActivity(container,lesson);
            break;

        case "puzzle":
            puzzleActivity(container,lesson);
            break;

        case "reading":
            readingActivity(container,lesson);
            break;
        default: 
        console.error("chua co Activity:", lesson.type);
    }
}

