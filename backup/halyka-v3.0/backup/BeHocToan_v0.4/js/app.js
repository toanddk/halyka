const startButton = document.getElementById("startButton");
const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const backBtn = document.getElementById("backBtn");
const phepcongBtn = document.getElementById("phepcongBtn");
const questionScreen = document.getElementById("questionScreen");

function showMenu() {

    menuScreen.style.display = "block";
    gameScreen.style.display = "none";
    questionScreen.style.display = "none";

};

function showgame() {

    menuScreen.style.display = "none";
    gameScreen.style.display = "block";
    questionScreen.style.display = "none";

};

function showphepcong() {

    menuScreen.style.display = "none";
    gameScreen.style.display = "none";
    questionScreen.style.display = "block";

};

startButton.addEventListener("click", function () {

    showgame();

});

backBtn.addEventListener("click", function () {

    showMenu();

});

settingButton.addEventListener("click", function () {

    alert("Đang phát triển...");

});

phepcongBtn.addEventListener("click", function () {
    showphepcong();
});

backBtnQuestion.addEventListener("click", function () {
    showgame();
});


scoreButton.addEventListener("click", function () {

    alert("Chưa có dữ liệu.");

});
