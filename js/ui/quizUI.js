// js/ui/quizUI.js


function renderQuizUI(container, question, actions) {
console.log("quizui selected:", actions.selectedAnswer);
    container.innerHTML = "";

    switch (question.ui) {

        case "text-text":
            renderTextText(
                container,
                question,
                actions
            );
            break;

        case "image-text":
            renderImageText(
                container,
                question,
                actions
            );
            break;

        case "text-image":
            renderTextImage(
                container,
                question,
                actions
            );
            break;

        case "image-image":
            renderImageImage(
                container,
                question,
                actions
            );
            break;

        default:
            console.error(
                "Không tìm thấy Quiz UI:",
                question.ui
            );
    }
}
