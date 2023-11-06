



const btn = document.getElementById('snGame');
const startContainer = document.getElementById('aDiv');
let clickSound = new Audio('sound/click.mp3')

function theBubbleGame() {

    let hitNum = 0;
    let score = 0;

    function bubbleElement() {
        let clutter = "";

        for (let i = 0; i <= 168; i++) {

            clutter += `<div class="bubble" id="bubble">${Math.floor(Math.random() * 10)}</div>`;

            document.getElementById('playgrnd').innerHTML = clutter;
        }
    }


    function runTimer() {
        

        let timer = document.getElementById('dropdown').value;
        
        let scoreSound = new Audio('sound/success.mp3');
        
        let time = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.getElementById('timer-card').innerText = timer;
            } else {
                clearInterval(time)
                scoreSound.play();
                
                if(score > 50){
                    document.getElementById('playgrnd').innerHTML=`<h1> 🎉🎉🏆🎉🎉 <br>  Score: ${score}</h1>`
                }else{
                    document.getElementById('playgrnd').innerHTML=`<h1>🎉🎉🎉🎉 <br> Score: ${score}</h1>`  
                }
    
                
            }
        }, 1000);

    }

    function newHit() {

        hitNum = Math.floor(Math.random() * 10);
        document.getElementById('hit-card').innerText = hitNum;
    }


    function increaseScore() {
        score += 10
        document.getElementById('score-card').innerText = score;
    }

    
    document.getElementById('playgrnd').addEventListener('click', function (details) {
        
        let bubbleNum = Number(details.target.textContent)
        if (hitNum === bubbleNum) {
           
            clickSound.play();
            increaseScore();
            newHit();
            bubbleElement();
        }
    })

    runTimer();
    newHit();
    bubbleElement();

}


function startGame() {

    startNewGame = btn.addEventListener('click', function () {
        startContainer.style.display = "none";

        theBubbleGame();
    })
}

startGame();




