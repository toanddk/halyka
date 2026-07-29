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

    createBackButton(
        "levelList",
        () => showTopScreen()
    );

}



// =================================================
// Lesson Screen
// =================================================

function showLessonScreen() {

    showScreen("lessonScreen");

    lessonScreen();

}


function lessonScreen() {

    const list = document.getElementById("lessonList");

    list.innerHTML = "";


    if(currentSubject === "math") {

        createButton(
            "lessonList",
            "➕ Phép cộng",
            () => selectLesson("addition")
        );

        createButton(
            "lessonList",
            "➖ Phép trừ",
            () => selectLesson("subtraction")
        );

    }


    if(currentSubject === "vietnamese") {

        createButton(
            "lessonList",
            "📖 Tập đọc",
            () => selectLesson("reading")
        );

        createButton(
            "lessonList",
            "🐶 Động vật",
            () => selectLesson("animals")
        );

        createButton(
            "lessonList",
            "🍎 Đồ vật",
            () => selectLesson("objects")
        );

    }

}
// =================================================
// Activity Screen
// =================================================

function showActivityScreen() {

    showScreen("activityScreen");

    activityScreen();

}


function activityScreen() {

    const container =
        document.getElementById("activityContainer");

    container.innerHTML = "";

    // Sau này:
    // quiz.js
    // reading.js
    // listening.js
    // sẽ tạo nội dung ở đây

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
