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

    currentLevel = level;

    showLessonScreen();

}

// =====================================
// Chọn bài học
// =====================================

function selectLesson(lesson){

    currentLesson = lesson;
    resetQuiz();

    startLesson();

}



// =====================================
// Bắt đầu bài học
// =====================================

function startLesson(){

    showActivityScreen();

}

// =====================================
// Lấy bài học hiện tại
// =====================================

function getCurrentLesson(){

    const lessons = getLessonList(
        currentSubject,
        currentLevel
    );


    return lessons.find(
        lesson => lesson.id === currentLesson
    );

}

function getLessonData(){
    return lessonData[currentLesson]?.[currentLevel]||[];
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

function resetQuiz(){

    currentQuestion = 0;
    score = 0;

}

function exitActivity(){

    currentLesson = null;


    showLessonScreen();

}

