const startButton = document.getElementById("startButton");
const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const backBtn = document.getElementById("backBtn");

startButton.addEventListener("click", function () {

    menuScreen.style.display = "none";
    gameScreen.style.display = "block";

});

backBtn.addEventListener("click", function () {

    menuScreen.style.display = "block";
    gameScreen.style.display = "none";

});

settingButton.addEventListener("click", function () {

    alert("Đang phát triển...");

});


scoreButton.addEventListener("click", function () {

    alert("Chưa có dữ liệu.");

});