// ui.js

// =================================================
// Chuyển màn hình
// =================================================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.style.display = "none";
    });

    document.getElementById(screenId).style.display = "block";
}


// =================================================
// Tạo button dùng chung
// =================================================

function createButton(parentId, label, callback) {

    const btn = document.createElement("button");

    btn.textContent = label;

    btn.onclick = callback;

    document.getElementById(parentId)
            .appendChild(btn);
}

function createBackButton(parentId, callback){

    const btn = document.createElement("button");

    btn.textContent = "🔙 Quay lại";

    btn.onclick = callback;

    document.getElementById(parentId)
            .appendChild(btn);

}

// =================================================
// Top Screen
// =================================================

function showTopScreen() {

    showScreen("topScreen");

    topScreen();

}


function topScreen() {

    const list = document.getElementById("subjectList");

    list.innerHTML = "";


    createButton(
        "subjectList",
        "🔢 Toán",
        () => selectSubject("math")
    );


    createButton(
        "subjectList",
        "📖 Tiếng Việt",
        () => selectSubject("vietnamese")
    );


    createButton(
        "subjectList",
        "🔤 Tiếng Anh",
        () => selectSubject("english")
    );

}



// =================================================
// Level Screen
// =================================================

function showLevelScreen() {

    showScreen("levelScreen");

    levelScreen();

}


function levelScreen() {

    const list = document.getElementById("levelList");

    list.innerHTML = "";


    createButton(
        "levelList",
        "🐣 4 - 6 tuổi",
        () => selectLevel(1)
    );


    createButton(
        "levelList",
        "🚀 6 - 8 tuổi",
        () => selectLevel(2)
    );

    const nav = document.getElementById("levelNavigation");
    nav.innerHTML = "";
    createBackButton(
        //"levelList",
        "levelNavigation",
        () => showTopScreen()
    );

}



// =================================================
// Lesson Screen
// =================================================

function showLessonScreen() {
    const lessons = getLessonList(currentSubject, currentLevel);
    showScreen("lessonScreen");

    lessonScreen(lessons);

}

function lessonScreen(lessons) {

    const list = document.getElementById("lessonList");

    list.innerHTML = "";


    if (!lessons) {

        console.log("Không có lessons");

        return;

    }


    lessons.forEach(lesson => {

        createButton(
            "lessonList",
            lesson.name,
            () => selectLesson(lesson.id)
        );

    });


    const nav = document.getElementById("lessonNavigation");

    nav.innerHTML = "";

    createBackButton(
        "lessonNavigation",
        () => showLevelScreen()
    );

}

// =================================================
// Activity Screen
// =================================================

function showActivityScreen() {

    showScreen("activityScreen");

    const exitButton = document.getElementById("exitButton");
    exitButton.onclick = exitActivity;
    renderActivity();

}

// =================================================
// Result Screen
// =================================================

function showResultScreen(score) {

    showScreen("resultScreen");

    resultScreen(score);

}


function resultScreen(score) {

    document.getElementById("scoreText")
            .textContent = score;
}

function resetActivityUI(){

    const progress =
        document.getElementById("quizProgress");

    const nextButton =
        document.getElementById("nextButton");

    if(progress){
        progress.textContent = "";
    }

    if(nextButton){
        nextButton.style.display = "block";
        nextButton.disabled = false;
        nextButton.onclick = null;
    }

}