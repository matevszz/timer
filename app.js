const time = document.querySelector('.time');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;

let timer;

const timing = () => {
    timer = setInterval(() => {
        seconds++;
        time.innerHTML = (minutes + ':'+ 0 + seconds);
        if(seconds === 60) {
            minutes++;
            seconds = 0;
            time.innerHTML = (minutes + ':' + 0 + seconds);
        }
        else if(seconds >= 10) {
            time.innerHTML = (minutes + ':' + seconds);
        }
    }, 1000);
}

start.addEventListener('click', () => {
    timing();
});

stop.addEventListener('click', () => {
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    time.innerHTML = (minutes + ':' + 0 + seconds);
});