function buildVietnameseTryread(item) {
    return `
        <p class="read-line" onclick="speakText('${item.audioA}')">${item.textA}</p>
        <p class="read-line" onclick="speakText('${item.audioB}')">${item.textB}</p>
        <p class="read-line" onclick="speakText('${item.audioC}')">${item.textC}</p>
        <p class="read-line" onclick="speakText('${item.audioD}')">${item.textD}</p>
    `;
}

function showVietnameseTryread() {
    //tryreadContent.innerHTML = "";

    let item = vietnameseTryread[currentTryreadIndex];

    tryreadContent.innerHTML = buildVietnameseTryread(item);

    setTimeout(() => {
    autoResizeText();
    }, 0);
}

function speakText(name) {
    const audio = new Audio(`audio/${name}.mp3`);
    audio.play();
}

nextTryreadBtn.addEventListener("click", function () {
    currentTryreadIndex = Math.floor(Math.random() * vietnameseTryread.length);

    if (currentTryreadIndex >= vietnameseTryread.length) {
        currentTryreadIndex = 0;
    }

    showVietnameseTryread();
});
