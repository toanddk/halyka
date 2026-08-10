const lessonData = {
    //math
    numbers: {
        1: mathNumbersLevel1
    },
    addition: {
        1: mathAdditionLevel1
    },

    subtraction: {
        1: mathSubtractionLevel1
    },

    //vietnamese
    vietnameseAlphabet: {
        1: vietnameseAlphabetLevel1
    },
    reading: {
        1: vietnameseReadingLevel1
    },

    animals: {
        1: vietnameseAnimalsLevel1
    },

    colors: {
        1: vietnameseColorsLevel1
    },

    //puzzle
    puzzle: {
        1: puzzleLevel1,
        2: puzzleLevel2
    },

};

function getLessonData(){
    console.log("lesson:", currentLesson);
    console.log("level:", currentLevel);
    console.log("data:", lessonData[currentLesson]?.[currentLevel]);

    return lessonData[currentLesson]?.[currentLevel]||[];
}
