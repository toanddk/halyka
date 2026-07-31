// readingUI.js

let currentReadingIndex = 0;


// =============================
// Khởi tạo màn hình đọc
// =============================

function readingUI(container, data){

    currentReadingIndex = 0;

    renderReading(container, data);

}



// =============================
// Hiển thị từng bài đọc
// =============================

function renderReading(container, data){

    container.innerHTML = "";


    const lesson = data[currentReadingIndex];


    const title = document.createElement("h3");

    title.textContent =
        "Bài đọc " + 
        (currentReadingIndex + 1);

    container.appendChild(title);



    // tạo các nút đọc

    lesson.words.forEach(word => {


        const btn =
            document.createElement("button");


        btn.textContent = word.text;


        btn.onclick = function(){

            playSound(word.audio);

        };


        container.appendChild(btn);


    });



    // nút tiếp theo

    const nextBtn =
        document.createElement("button");


    nextBtn.textContent =
        "➡ Tiếp theo";


    nextBtn.onclick = function(){


        currentReadingIndex++;


        if(currentReadingIndex < data.length){

            renderReading(
                container,
                data
            );

        }else{

            container.innerHTML =
                "🎉 Hoàn thành bài đọc!";

        }

    };


    container.appendChild(nextBtn);

}