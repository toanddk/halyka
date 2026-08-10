function puzzleCommon(container, puzzle, actions) {

    container.innerHTML = "";

    switch (puzzle.ui) {

        case "image-grid":

            imageGridUI(
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