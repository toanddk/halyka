// js/activity/puzzleActivity.js

let currentPuzzle = 0;
let puzzleData = null;


/**
 * Khởi động một bài Puzzle
 */
function puzzleActivity(container, lesson) {

    const allPuzzles = getLessonData();

    if (!allPuzzles || allPuzzles.length === 0) {

        console.error("Puzzle data không hợp lệ.");
        return;
    }

    puzzleData = allPuzzles;

    currentPuzzle = 0;


    // =========================================
    // Nút điều hướng chung
    // =========================================

    const prevButton =
        document.getElementById("prevButton");

    const nextButton =
        document.getElementById("nextButton");


    prevButton.style.display =
        "inline-block";

    nextButton.style.display =
        "inline-block";


    // =========================================
    // Quay lại
    // =========================================

    prevButton.onclick = () => {

        previousPuzzle(container);

    };


    // =========================================
    // Tiếp theo
    // =========================================

    nextButton.onclick = () => {

        nextPuzzle(container);

    };


    showPuzzle(container);
}


/**
 * Hiển thị Puzzle hiện tại
 */
function showPuzzle(container) {

    if (!puzzleData ||
        puzzleData.length === 0) {

        console.error("Không có Puzzle data.");
        return;
    }

    if (currentPuzzle >= puzzleData.length) {

        finishPuzzle(container);
        return;
    }

    const puzzle =
        puzzleData[currentPuzzle];


    // Hiển thị tiến trình
    const progress =
        document.getElementById("quizProgress");

    if (progress) {

        progress.textContent =
            `Câu ${currentPuzzle + 1} / ${puzzleData.length}`;
    }


    // Gọi Puzzle UI
    puzzleCommon(
    container,
    puzzle,
    {
        // Puzzle được ghép đúng
        onComplete: () => {

            puzzle.completed = true;

        },

        // Bấm "Làm lại"
        onRetry: () => {

            showPuzzle(container);

        }
    }
);
}


/**
 * Sang Puzzle tiếp theo
 */
function nextPuzzle(container) {

    currentPuzzle++;

    showPuzzle(container);
}


function previousPuzzle(container) {

    if (currentPuzzle > 0) {

        currentPuzzle--;

        showPuzzle(container);

    }

}

/**
 * Kết thúc bài Puzzle
 */
function finishPuzzle(container) {

    container.innerHTML = "";

    const result =
        document.createElement("div");

    result.className =
        "puzzle-result";

    result.innerHTML = `<h2>🎉 Hoàn thành!</h2>

        <button id="puzzleRestartButton">
            🔄 Chơi lại
        </button>
    `;

    container.appendChild(result);


    document
        .getElementById("puzzleRestartButton")
        .addEventListener(
            "click",
            () => {

                currentPuzzle = 0;
                showPuzzle(container);

            }
        );
}