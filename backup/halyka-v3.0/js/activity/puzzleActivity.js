// js/activity/puzzleActivity.js

let currentPuzzle = 0;
let puzzleData = null;


/**
 * Khởi động một bài Puzzle
 */
function puzzleActivity(container, lesson) {

    // Lấy dữ liệu của lesson hiện tại
    const allPuzzles = getLessonData();

    if (!allPuzzles || allPuzzles.length === 0) {

        console.error("Puzzle data không hợp lệ.");
        return;
    }

    // Lưu toàn bộ dữ liệu Puzzle
    puzzleData = allPuzzles;

    // Bắt đầu từ Puzzle đầu tiên
    currentPuzzle = 0;

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

        // Bấm "Câu tiếp theo"
        // luôn cho phép chuyển
        onNext: () => {

            nextPuzzle(container);

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