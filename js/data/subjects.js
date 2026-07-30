function getLessonList(subject, level) {

    return subjects[subject].levels[level] || [];

}

const subjects = {

    math: {

        title: "🔢 Toán",

        levels: {

            1: [
                { id: "addition", name: "➕ Phép cộng" },
                { id: "subtraction", name: "➖ Phép trừ" }
            ],

            2: [
                { id: "multiply", name: "✖ Phép nhân" },
                { id: "divide", name: "➗ Phép chia" }
            ]

        }

    },


    vietnamese: {

        title: "📖 Tiếng Việt",

        levels: {

            1: [
                { id: "reading", name: "📖 Tập đọc" },
                { id: "animals", name: "🐶 Động vật" },
                { id: "objects", name: "🍎 Đồ vật" }
            ],

            2: [
                { id: "story", name: "📚 Đọc hiểu" }
            ]

        }

    }

};