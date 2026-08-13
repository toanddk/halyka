// js/data/vietnamese/alphabet/vietnameseAlphabetLevel1.js
const vietnameseAlphabetLevel1 = [
    // ========================================
    // CHỮ CÁI
    // ========================================
    /*
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-A-o-dau.mp3",
        answers: [
            { text: "A", sound: "system/chinh-xac.mp3" },
            { text: "Ă", sound: "system/thu-lai-nhe.mp3" },
            { text: "Â", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-A-moc.mp3",
        answers: [
            { text: "A", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ă", sound: "system/chinh-xac.mp3" },
            { text: "Â", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-A-mu.mp3",
        answers: [
            { text: "A", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ă", sound: "system/thu-lai-nhe.mp3" },
            { text: "Â", sound: "system/chinh-xac.mp3" }
        ],
        correct: 2
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-B.mp3",
        answers: [
            { text: "B", sound: "system/chinh-xac.mp3" },
            { text: "D", sound: "system/thu-lai-nhe.mp3" },
            { text: "P", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-C.mp3",
        answers: [
            { text: "C", sound: "system/chinh-xac.mp3" },
            { text: "K", sound: "system/thu-lai-nhe.mp3" },
            { text: "S", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-D.mp3",
        answers: [
            { text: "D", sound: "system/chinh-xac.mp3" },
            { text: "Đ", sound: "system/thu-lai-nhe.mp3" },
            { text: "B", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-D-bar.mp3",
        answers: [
            { text: "D", sound: "system/thu-lai-nhe.mp3" },
            { text: "Đ", sound: "system/chinh-xac.mp3" },
            { text: "B", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-E.mp3",
        answers: [
            { text: "E", sound: "system/chinh-xac.mp3" },
            { text: "Ê", sound: "system/thu-lai-nhe.mp3" },{ text: "I", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-E-hat.mp3",
        answers: [
            { text: "E", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ê", sound: "system/chinh-xac.mp3" },
            { text: "I", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-G.mp3",
        answers: [
            { text: "G", sound: "system/chinh-xac.mp3" },
            { text: "H", sound: "system/thu-lai-nhe.mp3" },
            { text: "C", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-H.mp3",
        answers: [
            { text: "H", sound: "system/chinh-xac.mp3" },
            { text: "G", sound: "system/thu-lai-nhe.mp3" },
            { text: "K", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-I.mp3",
        answers: [
            { text: "I", sound: "system/chinh-xac.mp3" },
            { text: "Y", sound: "system/thu-lai-nhe.mp3" },
            { text: "E", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-K.mp3",
        answers: [
            { text: "K", sound: "system/chinh-xac.mp3" },
            { text: "C", sound: "system/thu-lai-nhe.mp3" },
            { text: "H", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-L.mp3",
        answers: [
            { text: "L", sound: "system/chinh-xac.mp3" },
            { text: "N", sound: "system/thu-lai-nhe.mp3" },
            { text: "M", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-M.mp3",
        answers: [
            { text: "M", sound: "system/chinh-xac.mp3" },
            { text: "N", sound: "system/thu-lai-nhe.mp3" },
            { text: "L", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-N.mp3",
        answers: [
            { text: "N", sound: "system/chinh-xac.mp3" },
            { text: "M", sound: "system/thu-lai-nhe.mp3" },
            { text: "L", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-O.mp3",
        answers: [
            { text: "O", sound: "system/chinh-xac.mp3" },
            { text: "Ô", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ơ", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-O-mu.mp3",
        answers: [
            { text: "O", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ô", sound: "system/chinh-xac.mp3" },
            { text: "Ơ", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-O-moc.mp3",
        answers: [
            { text: "O", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ô", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ơ", sound: "system/chinh-xac.mp3" }
        ],
        correct: 2
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-P.mp3",
        answers: [
            { text: "P", sound: "system/chinh-xac.mp3" },
            { text: "B", sound: "system/thu-lai-nhe.mp3" },
            { text: "Q", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-Q.mp3",
        answers: [
            { text: "Q", sound: "system/chinh-xac.mp3" },
            { text: "P", sound: "system/thu-lai-nhe.mp3" },
            { text: "G", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-R.mp3",
        answers: [
            { text: "R", sound: "system/chinh-xac.mp3" },
            { text: "D", sound: "system/thu-lai-nhe.mp3" },
            { text: "L", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-S.mp3",
        answers: [
            { text: "S", sound: "system/chinh-xac.mp3" },
            { text: "X", sound: "system/thu-lai-nhe.mp3" },
            { text: "C", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-T.mp3",
        answers: [
            { text: "T", sound: "system/chinh-xac.mp3" },
            { text: "TH", sound: "system/thu-lai-nhe.mp3" },
            { text: "TR", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",audio: "vietnamese/alphabet/chu-U.mp3",
        answers: [
            { text: "U", sound: "system/chinh-xac.mp3" },
            { text: "Ư", sound: "system/thu-lai-nhe.mp3" },
            { text: "O", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-U-moc.mp3",
        answers: [
            { text: "U", sound: "system/thu-lai-nhe.mp3" },
            { text: "Ư", sound: "system/chinh-xac.mp3" },
            { text: "O", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-V.mp3",
        answers: [
            { text: "V", sound: "system/chinh-xac.mp3" },
            { text: "U", sound: "system/thu-lai-nhe.mp3" },
            { text: "Y", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "Chữ nào bé vừa nghe?",
        audio: "vietnamese/alphabet/chu-X.mp3",
        answers: [
            { text: "X", sound: "system/chinh-xac.mp3" },
            { text: "S", sound: "system/thu-lai-nhe.mp3" },

            { text: "C", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },

    {

        ui: "text-text",

        question: "Chữ nào bé vừa nghe?",

        audio: "vietnamese/alphabet/chu-Y.mp3",

        answers: [

            { text: "Y", sound: "system/chinh-xac.mp3" },

            { text: "I", sound: "system/thu-lai-nhe.mp3" },

            { text: "V", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },*/

    // ========================================

    // CHỮ GHÉP

    // ========================================

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/CH.mp3",

        answers: [

            { text: "CH", sound: "system/chinh-xac.mp3" },

            { text: "TR", sound: "system/thu-lai-nhe.mp3" },

            { text: "TH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/G.mp3",

        answers: [

            { text: "KH", sound: "system/thu-lai-nhe.mp3" },

            { text: "GI", sound: "system/thu-lai-nhe.mp3" },

            { text: "GH", sound: "system/chinh-xac.mp3" }

        ],

        correct: 2

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/GI.mp3",

        answers: [

            { text: "GI", sound: "system/chinh-xac.mp3" },

            { text: "GH", sound: "system/thu-lai-nhe.mp3" },

            { text: "NH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/KH.mp3",

        answers: [

            { text: "CH", sound: "system/thu-lai-nhe.mp3" },

            { text: "KH", sound: "system/chinh-xac.mp3" },

            { text: "TH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 1

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/NG.mp3",

        answers: [

            { text: "NG", sound: "system/chinh-xac.mp3" },

            { text: "NH", sound: "system/thu-lai-nhe.mp3" },

            { text: "GH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/NG.mp3",

        answers: [

            { text: "GH", sound: "system/thu-lai-nhe.mp3" },

            { text: "KH", sound: "system/thu-lai-nhe.mp3" },

            { text: "NGH", sound: "system/chinh-xac.mp3" }

        ],

        correct: 2

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/NH.mp3",

        answers: [

            { text: "NG", sound: "system/thu-lai-nhe.mp3" },

            { text: "NH", sound: "system/chinh-xac.mp3" },

            { text: "CH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 1

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/PH.mp3",

        answers: [

            { text: "CH", sound: "system/thu-lai-nhe.mp3" },

            { text: "TH", sound: "system/thu-lai-nhe.mp3" },

            { text: "PH", sound: "system/chinh-xac.mp3" }

        ],

        correct: 2

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/QU.mp3",

        answers: [

            { text: "QU", sound: "system/chinh-xac.mp3" },

            { text: "Q", sound: "system/thu-lai-nhe.mp3" },

            { text: "GU", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/TH.mp3",

        answers: [

            { text: "T", sound: "system/thu-lai-nhe.mp3" },

            { text: "TH", sound: "system/chinh-xac.mp3" },

            { text: "TR", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 1

    },

    {

        ui: "text-text",

        //question: "Chữ ghép nào bé vừa nghe?",

        audio: "vietnamese/alphabet/TR.mp3",

        answers: [

            { text: "TR", sound: "system/chinh-xac.mp3" },

            { text: "CH", sound: "system/thu-lai-nhe.mp3" },

            { text: "TH", sound: "system/thu-lai-nhe.mp3" }

        ],

        correct: 0

    }

];