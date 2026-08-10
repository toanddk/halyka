function puzzleUI(container, puzzle, actions) {

    container.innerHTML = "";

    switch (puzzle.ui) {

        case "image-grid":

            renderImageGrid(
                container,
                puzzle,
                actions
            );

            break;

        default:

            console.error(
                "Không tìm thấy Puzzle UI:",
                puzzle.ui
            );
    }
}