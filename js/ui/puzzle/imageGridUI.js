// js/activity/ui/puzzle/imageGrid.js
function imageGridUI(
    container,
    puzzle,
    actions
) {
    let puzzleCompleted = false;
    // ========================================
    // PUZZLE CONTAINER
    // ========================================
    const wrapper =
        document.createElement("div");
    wrapper.className =
        "puzzle-container";
    // ========================================
    // PUZZLE GRID
    // ========================================
    const grid =
        document.createElement("div");
    grid.className =
        "puzzle-grid";
    grid.style.gridTemplateColumns =
        `repeat(${puzzle.cols}, 1fr)`;
    grid.style.gridTemplateRows =
        `repeat(${puzzle.rows}, 1fr)`;

    // ========================================
    // TOTAL PIECES
    // ========================================
    const totalPieces =
        puzzle.rows * puzzle.cols;
    // ========================================
    // CREATE PIECE INDEX
    // ========================================
    let pieces = [];
    for (
        let i = 0;
        i < totalPieces;
        i++
    ) {
        pieces.push(i);
    }
    // ========================================
    // SHUFFLE
    // ========================================
    pieces.sort(
        () => Math.random() - 0.5
    );
    // ========================================
    // CREATE PIECES
    // ========================================
    for (
        let position = 0;
        position < totalPieces;
        position++
    ) {
        // Vị trí đúng của mảnh
        const pieceIndex =
            pieces[position];
        // Hàng của mảnh trong ảnh gốc
        const row =
            Math.floor(
                pieceIndex / puzzle.cols
            );
        // Cột của mảnh trong ảnh gốc
        const col =
            pieceIndex % puzzle.cols;
        // ====================================
        // CREATE PIECE
        // ====================================
        const piece =
            document.createElement("div");
        piece.className =
            "puzzle-piece";
        // ====================================
        // DATA
        // ====================================
        // Vị trí đúng
        piece.dataset.correctIndex =
            pieceIndex;
        // Vị trí hiện tại
        piece.dataset.position =
            position;
        // ====================================
        // IMAGE
        // ====================================
        piece.style.backgroundImage =
            `url("${puzzle.image}")`;
        // ====================================
        // IMAGE SIZE
        // ====================================
        piece.style.backgroundSize =
            `${puzzle.cols * 100}% ${puzzle.rows * 100}%`;
        // ====================================
        // IMAGE POSITION
        // ====================================
        const x =
            puzzle.cols === 1
                ? 0: (col / (puzzle.cols - 1)) * 100;
        const y =
            puzzle.rows === 1
                ? 0
                : (row / (puzzle.rows - 1)) * 100;
        piece.style.backgroundPosition =
            `${x}% ${y}%`;
        // ====================================
        // TEMPORARY NUMBER
        // ====================================
 
      if(puzzle.showNumber !== false){
        const number = document.createElement("span");
        number.className = "puzzle-piece-number";
        number.textContent = pieceIndex + 1;
        piece.appendChild(number);
      }
            // ====================================
        // POINTER SETTINGS
        // ====================================
        piece.style.touchAction =
            "none";
        piece.style.cursor =
            "grab";
        // ====================================
        // POINTER DOWN
        // ====================================
        piece.addEventListener("pointerdown", function (event) {
            
            if(puzzleCompleted){
                return;
            }
            playSound("system/silent.mp3");
            
                event.preventDefault();
                selectedPiece =
                    piece;
                piece.classList.add(
                    "dragging"
                );
                piece.style.cursor =
                    "grabbing";
            }
        );
        // ====================================
        // POINTER UP
        // ====================================
       piece.addEventListener(
    "pointerup",
    function (event) {

        event.preventDefault();

        if (!selectedPiece) {
            return;
        }

        // Tìm phần tử thực sự nằm dưới con trỏ
        const target =
            document.elementFromPoint(
                event.clientX,
                event.clientY
            );

        const targetPiece =
            target?.closest(".puzzle-piece");


        // Nếu thả vào một mảnh khác
        if (
            targetPiece &&
            targetPiece !== selectedPiece
        ) {

            swapPieces(
                selectedPiece,
                targetPiece
            );

            if (!puzzleCompleted && checkPuzzleComplete(grid)) {

                puzzleCompleted = true;

                playSound(puzzle.audio);

                const message = document.createElement("div");

                message.className = "puzzle-complete-message";
                
                message.textContent = "🎉 Hoàn thành!";
                
                wrapper.insertBefore( message, navigation );

            if (actions?.onComplete) {

                actions.onComplete();

            }

}

        }


        selectedPiece.classList.remove(
            "dragging"
        );

        selectedPiece.style.cursor =
            "grab";


        try {

            selectedPiece.releasePointerCapture(
                event.pointerId
            );

        }
        catch (error) {
            // Không làm gì
        }


        selectedPiece = null;

    }
);
        // ====================================
        // POINTER CANCEL
        // ====================================
        piece.addEventListener(
            "pointercancel",
            function () {
                if (!selectedPiece) {
                    return;
                }
                selectedPiece.classList.remove(
                    "dragging"
                );
                selectedPiece.style.cursor =
                    "grab";
                selectedPiece =
                    null;
            }
        );// ====================================
        // ADD PIECE
        // ====================================
        grid.appendChild(
            piece
        );
    }
    // ========================================
    // ADD GRID TO WRAPPER
    // ========================================
    wrapper.appendChild(
        grid
    );
    // ========================================
    // ADD WRAPPER TO CONTAINER
    // ========================================
    container.appendChild(
        wrapper
    );

// ========================================
// PUZZLE NAVIGATION
// ========================================

const navigation =
    document.createElement("div");

navigation.className =
    "puzzle-navigation";


// ========================================
// RETRY BUTTON
// ========================================

const retryButton = document.createElement("button");

retryButton.className = "puzzle-retry-button";

retryButton.textContent = "🔄 Làm lại";

retryButton.addEventListener( "click", function () {

        if (actions?.onRetry) {

            actions.onRetry();

        }

    }
);

//const navigation = document.getElementById("activityNavigation");
//navigation.insertBefore("nextButton");

navigation.appendChild( retryButton);

// ========================================
// ADD NAVIGATION
// ========================================

wrapper.appendChild(navigation);

}
// ============================================
// SELECTED PIECE
// ============================================
let selectedPiece = null;
// ============================================
// SWAP PIECES
// ============================================
function swapPieces(
    pieceA,
    pieceB
) {
    // ========================================
    // CURRENT POSITIONS
    // ========================================
    const positionA =
        pieceA.dataset.position;
    const positionB =
        pieceB.dataset.position;
    // ========================================
    // SWAP DATA
    // ========================================
    pieceA.dataset.position =
        positionB;
    pieceB.dataset.position =
        positionA;
    // ========================================
    // SWAP DOM POSITION
    // ========================================
    const parent =
        pieceA.parentNode;
    const nextA =
        pieceA.nextSibling;
    const nextB =
        pieceB.nextSibling;
    if (
        nextA === pieceB
    ) {
        parent.insertBefore(
            pieceB,
            pieceA
        );
    }
    else if (
        nextB === pieceA
    ) {
        parent.insertBefore(
            pieceA,
            pieceB
        );
    }
    else {
        parent.insertBefore(
            pieceB,
            nextA
        );
        parent.insertBefore(
            pieceA,
            nextB
        );
    }
}

function checkPuzzleComplete(grid) {

    const pieces =
        grid.querySelectorAll(
            ".puzzle-piece"
        );

    for (const piece of pieces) {

        if (
            piece.dataset.position !==
            piece.dataset.correctIndex
        ) {

            return false;

        }

    }

    return true;
}

