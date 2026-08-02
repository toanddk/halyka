// readingUI.js

let currentReadingIndex = 0;


// =============================
// Khởi tạo màn hình đọc
// =============================

function readingUI(container, data){

    resetActivityUI();

    currentReadingIndex = 0;

    const nextButton = document.getElementById("nextButton" );
    
    if(nextButton){

        nextButton.onclick = function(){

            currentReadingIndex++;
            renderReading(container, data );
        };

    }

    renderReading(container,data);

}

// =============================
// Hiển thị bài đọc
// =============================

function renderReading(container, data){

    container.innerHTML = "";
// hết bài đọc

    if(currentReadingIndex >= data.length){

        container.innerHTML = `

            <div class="quizResult">

                <h2> 🎉 Hoàn thành! </h2>
            </div>
        `;

        const nextButton = document.getElementById("nextButton");

        if(nextButton){

            nextButton.style.display = "none";
        }

        const progress = document.getElementById("quizProgress");
        
        if(progress){progress.textContent = "";
            
        }

        return;
    }

    const lesson = data[currentReadingIndex];
    const progress = document.getElementById("quizProgress");
    
    if(progress){
        progress.textContent =
         `Bài ${currentReadingIndex + 1} / ${data.length}`;
        }

    if(!lesson){

        container.innerHTML = "<h2>🎉 Hoàn thành</h2>";
        return;
    }


    const title = document.createElement("h3");

    title.textContent = "Bài đọc " + (currentReadingIndex + 1);

    container.appendChild(title);

    lesson.words.forEach(word => {

        const btn = document.createElement("button");
        btn.textContent = word.text;

        btn.onclick = function(){

            playSound(word.audio);

        };

        container.appendChild(btn);
    });

}