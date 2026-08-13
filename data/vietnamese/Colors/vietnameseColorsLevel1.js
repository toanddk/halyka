// js/data/vietnamese/colors/level1.js
const vietnameseColorsLevel1 = [
    // ========================================
    // 1–10: NHÌN MÀU → CHỌN TÊN MÀU
    // ========================================
    {
        ui: "text-text",
        question: "🔴 Đây là màu gì?",
        //icon: "🔴",
        answers: [
            { text: "Đỏ", sound: "system/chinh-xac.mp3" },
            { text: "Vàng", sound: "system/thu-lai-nhe.mp3" },
            { text: "Xanh", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🟡 Đây là màu gì?",
        //icon: "🟡",
        answers: [
            { text: "Xanh", sound: "system/thu-lai-nhe.mp3" },
            { text: "Vàng", sound: "system/chinh-xac.mp3" },
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "🔵 Đây là màu gì?",
        //icon: "🔵",
        answers: [
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "Xanh", sound: "system/chinh-xac.mp3" },
            { text: "Vàng", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "🟢 Đây là màu gì?",
        //icon: "🟢",
        answers: [
            { text: "Xanh lá", sound: "system/chinh-xac.mp3" },
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "Vàng", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🟠 Đây là màu gì?",
        //icon: "🟠",
        answers: [
            { text: "Tím", sound: "system/thu-lai-nhe.mp3" },
            { text: "Cam", sound: "system/chinh-xac.mp3" },
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "🟣 Đây là màu gì?",
        //icon: "🟣",
        answers: [
            { text: "Cam", sound: "system/thu-lai-nhe.mp3" },
            { text: "Tím", sound: "system/chinh-xac.mp3" },
            { text: "Xanh", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "🩷 Đây là màu gì?",
        //icon: "🩷",
        answers: [
            { text: "Hồng", sound: "system/chinh-xac.mp3" },
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "Tím", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🟤 Đây là màu gì?",
        //icon: "🟤",
        answers: [
            { text: "Cam", sound: "system/thu-lai-nhe.mp3" },
            { text: "Nâu", sound: "system/chinh-xac.mp3" },
            { text: "Đen", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        question: "⚫ Đây là màu gì?",
        //icon: "⚫",
        answers: [
            { text: "Đen", sound: "system/chinh-xac.mp3" },{ text: "Trắng", sound: "system/thu-lai-nhe.mp3" },
            { text: "Nâu", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "⚪ Đây là màu gì?",
        //icon: "⚪",
        answers: [
            { text: "Đen", sound: "system/thu-lai-nhe.mp3" },
            { text: "Trắng", sound: "system/chinh-xac.mp3" },
            { text: "Xám", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    // ========================================
    // 11–16: NGHE → CHỌN MÀU
    // ========================================
    {
        ui: "text-text",
        //question: "Màu đỏ ở đâu?",
        audio: "vietnamese/colors/mau-do-o-dau.mp3",
        answers: [
            { text: "🔴 Đỏ", sound: "system/chinh-xac.mp3" },
            { text: "🟡 Vàng", sound: "system/thu-lai-nhe.mp3" },
            { text: "🔵 Xanh", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        //question: "Màu vàng ở đâu?",
        audio: "vietnamese/colors/mau-vang-o-dau.mp3",
        answers: [
            { text: "🔵 Xanh", sound: "system/thu-lai-nhe.mp3" },
            { text: "🟡 Vàng", sound: "system/chinh-xac.mp3" },
            { text: "🔴 Đỏ", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        //question: "Màu xanh ở đâu?",
        audio: "vietnamese/colors/mau-xanh-o-dau.mp3",
        answers: [
            { text: "🟢 Xanh", sound: "system/chinh-xac.mp3" },
            { text: "🔴 Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "🟡 Vàng", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        //question: "Màu cam ở đâu?",
        audio: "vietnamese/colors/mau-cam-o-dau.mp3",
        answers: [
            { text: "🟣 Tím", sound: "system/thu-lai-nhe.mp3" },
            { text: "🟠 Cam", sound: "system/chinh-xac.mp3" },
            { text: "🟢 Xanh", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        //question: "Màu tím ở đâu?",
        audio: "vietnamese/colors/mau-tim-o-dau.mp3",
        answers: [
            { text: "🟠 Cam", sound: "system/thu-lai-nhe.mp3" },
            { text: "🟣 Tím", sound: "system/chinh-xac.mp3" },
            { text: "🩷 Hồng", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    {
        ui: "text-text",
        //question: "Màu hồng ở đâu?",
        audio: "vietnamese/colors/mau-hong-o-dau.mp3",
        answers: [
            { text: "🔴 Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "🩷 Hồng", sound: "system/chinh-xac.mp3" },
            { text: "🟣 Tím", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 1
    },
    // ========================================// 17–22: ĐỒ VẬT QUEN THUỘC
    // ========================================
    {
        ui: "text-text",
        question: "🍎 Màu gì đây ?",
        //icon: "🍎",
        answers: [
            { text: "Đỏ", sound: "system/chinh-xac.mp3" },
            { text: "Xanh dương", sound: "system/thu-lai-nhe.mp3" },
            { text: "Tím", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🍌 Màu gì đây ?",
        //icon: "🍌",
        answers: [
            { text: "Vàng", sound: "system/chinh-xac.mp3" },
            { text: "Đỏ", sound: "system/thu-lai-nhe.mp3" },
            { text: "Xanh dương", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🥦 Bông cải này màu gì?",
        //icon: "🥦",
        answers: [
            { text: "Xanh lá", sound: "system/chinh-xac.mp3" },
            { text: "Vàng", sound: "system/thu-lai-nhe.mp3" },
            { text: "Tím", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🥕 cà rốt có màu gì?",
        //icon: "🥕",
        answers: [
            { text: "Cam", sound: "system/chinh-xac.mp3" },
            { text: "Xanh", sound: "system/thu-lai-nhe.mp3" },
            { text: "Tím", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    },
    {
        ui: "text-text",
        question: "🍇 Quả nho này màu gì?",
        //icon: "🍇",
        answers: [
            { text: "Tím", sound: "system/chinh-xac.mp3" },
            { text: "Vàng", sound: "system/thu-lai-nhe.mp3" },
            { text: "Cam", sound: "system/thu-lai-nhe.mp3" }
        ],
        correct: 0
    }

];