//funkcja odmierzania czasu

const time = document.querySelector('.time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.scale = 0.9;
        setTimeout(() => {
            button.style.scale = 1;
        }, 300);
    })
});

let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let timerRunning = false;

let timer;

const timing = () => {
    timer = setInterval(() => {
        miliseconds++;
        time.innerHTML = (minutes + ':'+ 0 + seconds + ':' + miliseconds);
        if(miliseconds === 100) {
            seconds++
            miliseconds = 0;
            time.innerHTML = (minutes + ':' + 0 + seconds + ':' + miliseconds);
        }
        else if(miliseconds < 10) {
            time.innerHTML = (minutes + ':' + 0 + seconds + ':' + 0 + miliseconds);
        }
        else if(seconds === 60) {
            minutes++;
            seconds = 0;
            time.innerHTML = (minutes + ':' + 0 + seconds);
        }
        else if(seconds >= 10) {
            time.innerHTML = (minutes + ':' + seconds);
        }
    }, 10);
}

start.addEventListener('click', () => {
    if(!timerRunning) { 
        timerRunning = true;
        timing();
    }
});

stop.addEventListener('click', () => {
    clearInterval(timer);
    timerRunning = false;
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timerRunning = false;
    seconds = 0;
    minutes = 0;
    miliseconds = 0;
    time.innerHTML = (minutes + ':' + 0 + seconds + ':' + 0 + miliseconds);
});

const timerBtn = document.querySelector('#timer-btn');
const timepieceBtn = document.querySelector('#timepiece-btn');
const timerWindow = document.querySelector('.timer');
const timepieceWindow = document.querySelector('.timepiece');

//funkcja na zmiane z jednego timera na drugi

timerBtn.addEventListener('click', () => {
    timepieceWindow.classList.add("remove");
    timerWindow.classList.add('show');
    timerBtn.style.scale = 1;
    timepieceBtn.style.scale = .8;

    if(timerWindow.classList = ('timer show')) {
        timepieceBtn.addEventListener('mouseover', () => {
            timepieceBtn.style.scale = 1;
            timepieceBtn.style.transition = ('all .3s')
        });
        timepieceBtn.addEventListener('mouseout', () => {
            timepieceBtn.style.scale = .8;
        });
        timepieceBtn.addEventListener('click', () => {
            location.reload();
        });
    }
});

//funkcja na odliczanie wybranego czasu

const inputMinutes = document.querySelector('#minutes');
const inputSeconds = document.querySelector('#seconds');
const startTimer = document.querySelector('#start-timer');
const stopTimer = document.querySelector('#stop-timer');
const resetTimer = document.querySelector('#reset-timer');
const timeTimer = document.querySelector('.time-timer');

let timerCountDown;
let timerSeconds;
let timerMinutes;

let countDownRunning = false;

const timingDown = () => {
    let timerSeconds = Number(inputSeconds.value);
    let timerMinutes = Number(inputMinutes.value);
    timeTimer.innerHTML = (timerMinutes + ':' + timerSeconds);
    if(timerSeconds < 10) {
        timeTimer.innerHTML = (timerMinutes + ':' + 0 + timerSeconds);
    }
    timerCountDown = setInterval(() => {
        timerSeconds--;
        timeTimer.innerHTML = (timerMinutes + ':' + timerSeconds);
        if(timerSeconds === -1){
            timerMinutes -= 1;
            timerSeconds = 59;
            timeTimer.innerHTML = (timerMinutes + ':' + timerSeconds);
        }
        else if(timerSeconds < 10) {
            timeTimer.innerHTML = (timerMinutes + ':' + 0 + timerSeconds);
        }
        if(timerMinutes === -1) {
            clearInterval(timerCountDown);
            timeTimer.innerHTML = '0:00';
            alert('END OF TIME!')
        }
    }, 1000);
    
}

startTimer.addEventListener('click', () => {
    if(!countDownRunning){
        if(Number.isNaN(timerMinutes) || Number.isNaN(timerSeconds)) {
            alert('You have to input value in numbers!');
            timeTimer.innerHTML = '0:00';
        }
        else {
            countDownRunning = true;
            timingDown();
        }
    }
});

stopTimer.addEventListener('click', () => {
    clearInterval(timerCountDown);
    countDownRunning = false;
});

resetTimer.addEventListener('click', () => {
    clearInterval(timerCountDown);
    countDownRunning = false;
    timerMinutes = 0;
    timerSeconds = 0;
    timeTimer.innerHTML = (timerMinutes + ':' + 0 + timerSeconds);
});