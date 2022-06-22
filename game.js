const mario = document.querySelector('.mario');
let runner = document.querySelector('.runner');

score = 0;

// loadeadGame(); 

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

        check();
        
    }, 500);
}

const loop = setInterval(() => {

    const runnerPosition = runner.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(runnerPosition <= 100 && runnerPosition > 0 && marioPosition < 80){
        
        runner.style.animation = 'none';
        runner.style.left = `${runnerPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/mario_dead.png';
        mario.style.width = '70px'
        mario.style.marginLeft = '30px'

        gameOver();

        clearInterval(loop);
    }
}, 10)

function check(){

    const runnerPosition = runner.offsetLeft;
    
    runnerPosition > 1440 ? scorePointer():null;
}

function scorePointer(){


        score += 1;
        
        document.getElementById("point").innerHTML = score;

}

function gameOver(){
    let gameOver = document.getElementById("gameOver");
    gameOver.style.display = 'flex';
}

document.addEventListener('keydown', jump);
