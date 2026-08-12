// =================================================
// Reading Activity
// =================================================

let currentReadingLesson = 0;

let readingLessons = null;


// =================================================
// Khởi động Reading
// =================================================

function readingActivity(container, lesson) {

    const data = getLessonData();

    if (!data || data.length === 0) {

        console.error(
            "Reading data không hợp lệ."
        );

        return;
    }

    readingData = data;

    currentReadingLesson = 0;


    // =========================================
    // Nút điều hướng
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

        if (currentReadingLesson > 0) {

            currentReadingLesson--;

            showReadingLesson(container);
        }

    };


    // =========================================
    // Tiếp theo
    // =========================================

    nextButton.onclick = () => {

        if (
            currentReadingLesson <
            readingData.length - 1
        ) {

            currentReadingLesson++;

            showReadingLesson(container);
        }

    };


    // =========================================
    // Hiển thị bài đầu tiên
    // =========================================

    showReadingLesson(container);
}


// =================================================
// Hiển thị bài hiện tại
// =================================================

function showReadingLesson(container) {

    const lesson =
        readingData[currentReadingLesson];


    // Số bài

    const progress =
        document.getElementById("quizProgress");

    if (progress) {

        progress.textContent =
            `${currentReadingLesson + 1} / ${readingData.length}`;
    }


    // Hiển thị nội dung

    readingUI(
        container,
        lesson,
        lesson.items
    );
}

    // ---------------------------------------------
    // Navigation
    // ---------------------------------------------

 //   setupReadingNavigation(container);



// =================================================
// Navigation
// =================================================

function setupReadingNavigation(container) {

    const backButton =
        document.getElementById(
            "readingBackButton"
        );

    const nextButton =
        document.getElementById(
            "readingNextButton"
        );


    if (backButton) {

        backButton.onclick =
            () => {

                previousReadingLesson(
                    container
                );

            };
    }


    if (nextButton) {

        nextButton.onclick =
            () => {

                nextReadingLesson(
                    container
                );

            };
    }
}


// =================================================
// Bài trước
// =================================================

function previousReadingLesson(container) {

    if (
        currentReadingLesson <= 0
    ) {

        return;
    }


    currentReadingLesson--;

    showReadingLesson(container);
}// =================================================
// Bài tiếp theo
// =================================================

function nextReadingLesson(container) {

    if (
        currentReadingLesson <
        readingLessons.length - 1
    ) {

        currentReadingLesson++;

        showReadingLesson(container);

        return;
    }


    // Hết bài
    finishReading(container);
}


// =================================================
// Kết thúc
// =================================================

function finishReading(container) {

    container.innerHTML = "";

    showMessage("🎉 Hoàn thành!");

}