let vnindex = 0;
let vnscore = 0;
let vnwrong = 0;
let vnfirstTry = true;

function vnshowquestion() {
    vnfirstTry = true;
    const q = vietnamesequizdata[vnindex];

    const imgbox = document.getElementById("vn-img");
    imgbox.innerText = q.img;

    const ansbox = document.getElementById("vn-answers");
    ansbox.innerHTML = "";

    // Tạo bản sao để shuffle
    const shuffledAnswers = [...q.answers];
    shuffle(shuffledAnswers);

    // Tìm vị trí đáp án đúng trong mảng đã shuffle
    q.shuffledCorrectIndex = shuffledAnswers.findIndex(a => a.text === q.answers[q.correct].text);

    shuffledAnswers.forEach((ans, shuffledIndex) => {
        const balloon = document.createElement("div");
        balloon.className = "answer-balloon";
        balloon.innerText = "🎈 " + ans.text;

        balloon.onclick = () => {
            vnsoundplay(ans.sound);
            vncheckanswer(shuffledIndex);   // ← truyền index sau shuffle
        };

        ansbox.appendChild(balloon);
    });
}

function vncheckanswer(i) {
    const q = vietnamesequizdata[vnindex];
    const result = document.getElementById("vn-result");
    const ansbox = document.getElementById("vn-answers");
    const balloons = ansbox.querySelectorAll(".answer-balloon");

    result.classList.remove("correct-bounce", "wrong-shake");

    // Kiểm tra đúng/sai theo vị trí đã shuffle
    const isCorrect = (i === q.shuffledCorrectIndex);

    if (isCorrect) {

        // Bong bóng nổ đúng vị trí
        balloons[i].classList.add("balloon-pop");

        // Chỉ cộng điểm nếu đây là lần chọn đầu tiên
        if (vnfirstTry) {
            vnscore++;
        }

        result.innerText = "🎉 Chính xác!";
        result.style.color = "green";
        result.classList.add("correct-bounce");

    } else {

        // Nếu sai lần đầu → tăng số sai
        if (vnfirstTry) {
            vnwrong++;
        }

        result.innerText = "❌ Sai rồi!";
        result.style.color = "red";
        result.classList.add("wrong-shake");
    }

    // Sau lần đầu tiên → không tính điểm nữa
    vnfirstTry = false;
}


function vnfinishquiz() {
    // Xóa hình + đáp án
    document.getElementById("vn-img").innerText = "";
    document.getElementById("vn-answers").innerHTML = "";

    // Hiện kết quả cuối
    const result = document.getElementById("vn-result");
    result.innerText = `Bạn đã hoàn thành!\nĐiểm: ${vnscore}/${vietnamesequizdata.length}`;
    result.style.color = "blue";

    // Ẩn nút câu tiếp theo
    document.getElementById("vn-nextBtn").style.display = "none";

    // Giữ nút Thoát
    document.getElementById("vn-exitBtn").style.display = "inline-block";
}


function vnstartquiz() {
    vnindex = 0;
    vnscore = 0;

    // Reset giao diện
    document.getElementById("vn-result").innerText = "";
    document.getElementById("vn-nextBtn").style.display = "inline-block";

    vnshowquestion();
}


function vnsoundplay(src) {
    const audio = new Audio(src);
    audio.volume = 1.0;
    audio.play().catch(err => console.log(err));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
