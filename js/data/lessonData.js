const lessonData = {
    addition: {
        1: mathAddititonLevel1
    },
   
    //vietnamese
    reading: {
        1: vietnameseReadingLevel1
    },

    animals: {
        1: vietnameseAnimalsLevel1
    }

};

function getLessonData(){
    console.log("lesson:", currentLesson);
    console.log("level:", currentLevel);
    console.log("data:", lessonData[currentLesson]?.[currentLevel]);

    return lessonData[currentLesson]?.[currentLevel]||[];
}
