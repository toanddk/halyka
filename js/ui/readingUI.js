// js/ui/readingUI.js

// =================================================
// Reading UI
// =================================================

function readingUI(container, lesson) {
    console.log("reading ui view");

    container.innerHTML = "";

    // =================================================
    // Container chính
    // =================================================

    const content =
        document.createElement("div");

    content.className =
        "reading-content";


    // =================================================
    // Grid cho chữ cái
    // =================================================

    const letterGrid =
        document.createElement("div");

    letterGrid.className =
        "reading-letter-grid";


    let hasLetters = false;


    // =================================================
    // Nội dung từng item
    // =================================================

    lesson.items.forEach(item => {


        // =================================================
        // Dạng chữ cái
        // =================================================

        if (item.type === "letter") {

            hasLetters = true;


            const button =
                document.createElement("button");

            button.className =
                "reading-letter";

            button.textContent =
                item.text;


            // -----------------------------------------
            // Phát âm thanh
            // -----------------------------------------

            button.onclick = () => {

                playSound(item.audio);

            };


            // -----------------------------------------
            // Thêm vào grid
            // -----------------------------------------

            letterGrid.appendChild(button);

            return;
        }


        // =================================================
        // Dạng ghép âm
        // =================================================

        if (
            item.blend &&
            item.word
        ) {

            const row =
                document.createElement("div");

            row.className =
                "reading-row";


            // -----------------------------------------
            // Icon
            // -----------------------------------------

            const icon =
                document.createElement("span");

            icon.className =
                "reading-icon";

            icon.textContent =
                item.icon || "";


            row.appendChild(icon);


            // -----------------------------------------
            // Phần đánh vần
            // -----------------------------------------

            const blendButton =
                document.createElement("button");

            blendButton.className =
                "reading-blend";

            blendButton.textContent =
                item.blend;


            blendButton.onclick = () => {playSound(
                    item.blendAudio
                );

            };


            row.appendChild(blendButton);


            // -----------------------------------------
            // Từ hoàn chỉnh
            // -----------------------------------------

            const wordButton =
                document.createElement("button");

            wordButton.className =
                "reading-word";

            wordButton.textContent =
                item.word;


            wordButton.onclick = () => {

                playSound(
                    item.wordAudio
                );

            };


            row.appendChild(wordButton);


            // -----------------------------------------
            // Thêm row
            // -----------------------------------------

            content.appendChild(row);
        }

    });


    // =================================================
    // Nếu có chữ cái
    // =================================================

    if (hasLetters) {

        content.appendChild(letterGrid);

    }


    // =================================================
    // Đưa toàn bộ vào container
    // =================================================

    container.appendChild(content);

}