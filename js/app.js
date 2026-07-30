// app.js


// =====================================
// Trạng thái hiện tại
// =====================================

let currentSubject = null;
let currentLevel = null;
let currentLesson = null;

// =====================================
// Khởi động app
// =====================================

window.onload = function(){

    appInit();

};


function appInit(){

    showTopScreen();

}



// =====================================
// Chọn môn học
// =====================================

function selectSubject(subject){

    currentSubject = subject;

    // reset lựa chọn phía sau
    currentLevel = null;
    currentLesson = null;


    showLevelScreen();

}



// =====================================
// Chọn độ tuổi
// =====================================

function selectLevel(level){
    console.log("levellevel");
    currentLevel = level;

    const lessons = getLessonList(
        currentSubject,
        currentLevel
    );

    showLessonScreen(lessons);

}

/*
function selectLevel(level){

    currentLevel = level;

    // reset bài học
    currentLesson = null;


    showLessonScreen();

}
*/


// =====================================
// Chọn bài học
// =====================================

function selectLesson(lesson){

    currentLesson = lesson;


    startLesson();

}



// =====================================
// Bắt đầu bài học
// =====================================

function startLesson(){

    showActivityScreen();

}



// =====================================
// Quay lại
// =====================================

function backToHome(){

    currentSubject = null;
    currentLevel = null;
    currentLesson = null;


    showTopScreen();

}


function backToLevel(){

    currentLevel = null;
    currentLesson = null;


    showLevelScreen();

}


function backToLesson(){

    currentLesson = null;


    showLessonScreen();

}

