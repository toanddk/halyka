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
                    ui: "quiz"
                },

                {
                    id: "subtraction",
                    name: "➖ Phép trừ",
                    ui: "quiz"
                }

            ],


            2: [

                {
                    id: "multiply",
                    name: "✖ Phép nhân",
                    ui: "quiz"
                },

                {
                    id: "divide",
                    name: "➗ Phép chia",
                    ui: "quiz"
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
                    ui: "reading"
                },

                {
                    id: "animals",
                    name: "🐶 Động vật",
                    ui: "quiz"
                },

                {
                    id: "objects",
                    name: "🍎 Đồ vật",
                    ui: "quiz"
                }

            ],


            2: [

                {
                    id: "story",
                    name: "📚 Đọc hiểu",
                    ui: "reading"
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
                    ui: "listening"
                },

                {
                    id: "animals",
                    name: "🐶 Animals",
                    ui: "listening"
                }

            ]

        }

    }

};