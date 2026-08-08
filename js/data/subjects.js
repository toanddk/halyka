function getLessonList(subject, level) {

    return subjects[subject].levels[level] || [];

}

// js/data/subjects.js


const subjects = {


    math: {

        title: "🔢 Toán",

        levels: {

            1: [

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
                    datafile: null
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
                    id: "reading",
                    name: "📖 Tập đọc",
                    type: "reading",
                    datafile: "vietnamese/reading/vietnameseReadingLevel1.js" 
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


    english: {

        title: "🔤 Tiếng Anh",

        levels: {


            1: [

                {
                    id: "alphabet",
                    name: "🔤 Bảng chữ cái",
                    type: "listening",
                    datafile: null
                },

                {
                    id: "animals",
                    name: "🐶 Animals",
                    type: "listening",
                    datafile: null
                }

            ]

        }

    }

};