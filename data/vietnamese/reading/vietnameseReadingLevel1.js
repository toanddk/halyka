// ================================================
// Vietnamese Reading - Level 1
// ================================================

const vietnameseReadingLevel1 = [
/*
    // =================================================
    // BÀI 1
    // Nguyên âm + các dấu
    // =================================================

    {
        id: "reading_1",

        name: "Nguyên âm",

        items: [

            // -----------------------------------------
            // Nguyên âm
            // -----------------------------------------

            {
                type: "letter",
                text: "a",
                audio: "vietnamese/reading/a.mp3"
            },

            {
                type: "letter",
                text: "i",
                audio: "vietnamese/reading/i.mp3"
            },

            {
                type: "letter",
                text: "u",
                audio: "vietnamese/reading/u.mp3"
            },

            {
                type: "letter",
                text: "ư",
                audio: "vietnamese/reading/u.mp3"
            },

            {
                type: "letter",
                text: "e",
                audio: "vietnamese/reading/e.mp3"
            },

            {
                type: "letter",
                text: "ê",
                audio: "vietnamese/reading/e.mp3"
            },

            {
                type: "letter",
                text: "o",
                audio: "vietnamese/reading/o.mp3"
            },

            {
                type: "letter",
                text: "ô",
                audio: "vietnamese/reading/o.mp3"
            },


            // -----------------------------------------
            // Dấu sắc
            // -----------------------------------------

            {
                type: "letter",
                text: "á",
                audio: "vietnamese/reading/a-sac.mp3"
            },

            {
                type: "letter",
                text: "í",
                audio: "vietnamese/reading/i-sac.mp3"
            },

            {
                type: "letter",
                text: "ú",
                audio: "vietnamese/reading/u-sac.mp3"
            },

            {
                type: "letter",
                text: "ứ",
                audio: "vietnamese/reading/u-dau-sac.mp3"
            },

            {
                type: "letter",
                text: "é",
                audio: "vietnamese/reading/e-sac.mp3"
            },

            {
                type: "letter",
                text: "ế",
                audio: "vietnamese/reading/e-mu-sac.mp3"
            },

            {
                type: "letter",
                text: "ó",
                audio: "vietnamese/reading/o-sac.mp3"
            },

            {
                type: "letter",
                text: "ố",
                audio: "vietnamese/reading/o-mu-sac.mp3"
            },
            // -----------------------------------------
            // Dấu huyền
            // -----------------------------------------

            {
                type: "letter",
                text: "à",
                audio: "vietnamese/reading/a-huyen.mp3"
            },

            {
                type: "letter",
                text: "ì",
                audio: "vietnamese/reading/i-huyen.mp3"
            },

            {
                type: "letter",
                text: "ù",
                audio: "vietnamese/reading/u-huyen.mp3"
            },

            {
                type: "letter",
                text: "ừ",
                audio: "vietnamese/reading/u-dau-huyen.mp3"
            },

            {
                type: "letter",
                text: "è",
                audio: "vietnamese/reading/e-huyen.mp3"
            },

            {
                type: "letter",
                text: "ề",
                audio: "vietnamese/reading/e-mu-huyen.mp3"
            },

            {
                type: "letter",
                text: "ò",
                audio: "vietnamese/reading/o-huyen.mp3"
            },

            {
                type: "letter",
                text: "ồ",
                audio: "vietnamese/reading/o-mu-huyen.mp3"
            },


            // -----------------------------------------
            // Dấu hỏi
            // -----------------------------------------

            {
                type: "letter",
                text: "ả",
                audio: "vietnamese/reading/a-hoi.mp3"
            },

            {
                type: "letter",
                text: "ỉ",
                audio: "vietnamese/reading/i-hoi.mp3"
            },

            {
                type: "letter",
                text: "ủ",
                audio: "vietnamese/reading/u-hoi.mp3"
            },

            {
                type: "letter",
                text: "ử",
                audio: "vietnamese/reading/u-dau-hoi.mp3"
            },

            {
                type: "letter",
                text: "ẻ",
                audio: "vietnamese/reading/e-hoi.mp3"
            },

            {
                type: "letter",
                text: "ể",
                audio: "vietnamese/reading/e-mu-hoi.mp3"
            },

            {
                type: "letter",
                text: "ỏ",
                audio: "vietnamese/reading/o-hoi.mp3"
            },

            {
                type: "letter",
                text: "ổ",
                audio: "vietnamese/reading/o-mu-hoi.mp3"
            },


            // -----------------------------------------
            // Dấu ngã
            // -----------------------------------------

            {
                type: "letter",
                text: "ã",
                audio: "vietnamese/reading/a-nga.mp3"
            },

            {
                type: "letter",
                text: "ĩ",audio: "vietnamese/reading/i-nga.mp3"
            },

            {
                type: "letter",
                text: "ũ",
                audio: "vietnamese/reading/u-nga.mp3"
            },

            {
                type: "letter",
                text: "ữ",
                audio: "vietnamese/reading/u-dau-nga.mp3"
            },

            {
                type: "letter",
                text: "ẽ",
                audio: "vietnamese/reading/e-nga.mp3"
            },

            {
                type: "letter",
                text: "ễ",
                audio: "vietnamese/reading/e-mu-nga.mp3"
            },

            {
                type: "letter",
                text: "õ",
                audio: "vietnamese/reading/o-nga.mp3"
            },

            {
                type: "letter",
                text: "ỗ",
                audio: "vietnamese/reading/o-mu-nga.mp3"
            },


            // -----------------------------------------
            // Dấu nặng
            // -----------------------------------------

            {
                type: "letter",
                text: "ạ",
                audio: "vietnamese/reading/a-nang.mp3"
            },

            {
                type: "letter",
                text: "ị",
                audio: "vietnamese/reading/i-nang.mp3"
            },

            {
                type: "letter",
                text: "ụ",
                audio: "vietnamese/reading/u-nang.mp3"
            },

            {
                type: "letter",
                text: "ự",
                audio: "vietnamese/reading/u-dau-nang.mp3"
            },

            {
                type: "letter",
                text: "ẹ",
                audio: "vietnamese/reading/e-nang.mp3"
            },

            {
                type: "letter",
                text: "ệ",
                audio: "vietnamese/reading/e-mu-nang.mp3"
            },

            {
                type: "letter",
                text: "ọ",
                audio: "vietnamese/reading/o-nang.mp3"
            },

            {
                type: "letter",
                text: "ộ",
                audio: "vietnamese/reading/o-mu-nang.mp3"
            }

        ]
    },
*/

    // =================================================
    // BÀI 2
    // Ghép âm
    // =================================================

    {
        id: "reading_2",

        name: "Ghép âm",

        items: [

            {
                icon: "🍊",

                blend: "c + am →",

                word: "cam",

                blendAudio:
                    "vietnamese/reading/c-am-cam.mp3",

                wordAudio:
                    "vietnamese/reading/cam.mp3"
            },

            {
                icon: "🍚",

                blend: "c + ơm →",

                word: "cơm",

                blendAudio:
                    "vietnamese/reading/c-om-com.mp3",wordAudio:
                    "vietnamese/reading/com.mp3"
            },

            {
                icon: "🍨",

                blend: "k + em →",

                word: "kem",

                blendAudio:
                    "vietnamese/reading/k-em-kem.mp3",

                wordAudio:
                    "vietnamese/reading/kem.mp3"
            }

        ]
    }

];