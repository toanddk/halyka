// js/data/subjects.js
function getLessonList(subject, level) {

    return subjects[subject].levels[level] || [];

}

const subjects = {

    math: {

        title: "🔢 Toán",

        levels: {

            1: [

                {
                    id: "numbers",
                    name: "🔢Số đếm ",
                    type: "quiz",
                    datafile: "math/addition/matmath/numbers/mathNumbersLevel1.js"
                },

                {
                    id: "addition",
                    name: "➕ Phép cộng",
                    type: "quiz",
                    datafile: "math/addition/mathAddititonLevel1.js"
                },

                {
                    id: "subtraction",
                    name: "➖ Phép trừ",
                    type: "quiz",
                    datafile: "math/subtraction/mathSubtractionLevel1.js"
                }

            ],


            2: [

                {
                    id: "multiply",
                    name: "✖ Phép nhân",
                    type: "quiz",
                    datafile: null
                },

                {
                    id: "divide",
                    name: "➗ Phép chia",
                    type: "quiz",
                    datafile: null
                }

            ]

        }

    },
   vietnamese: {

        title: "📖 Tiếng Việt",

        levels: {

            1: [
                {
                    id: "vietnameseAlphabet",
                    name: "🔤 Bảng chứ cái",
                    type: "quiz",
                    datafile: "vietnamese/alphabet/vietnameseAlphabetLevel1.js" 
               },

                {
                    id: "colors",
                    name: "⚙ Màu sắc",
                    type: "quiz",
                    datafile: "vietnamese/Colors/vietnameseColorsLevel1.js" 
               },

                {
                    id: "animals",
                    name: "🐶 Động vật",
                    type: "quiz",
                    datafile: "vietnamese/animals/vietnameseAnimalsLevel1.js" 
                },

                {
                    id: "objects",
                    name: "🍎 Đồ vật",
                    type: "quiz",
                    datafile: null
                }

            ],


            2: [

                {
                    id: "story",
                    name: "📚 Đọc hiểu",
                    type: "reading",
                    datafile: null
                }

            ]

        }

    },

    puzzle: {

        title: " Puzzle ",

        levels: {


            1: [

                {
                    id: "puzzle",
                    name: "Ghép hình",
                    type: "puzzle",
                    datafile: "puzzle/puzzleLevel1.js"
                }
            ],
            2: [

                {
                    id: "puzzle",
                    name: "Ghép hình",
                    type: "puzzle",
                    datafile: "puzzle/puzzleLevel2.js"
                }
            ]

        }

    }

};