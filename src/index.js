import './index.html';
import './index.scss';

// import { mult, sum } from './modules/calc';

let startBtn = document.querySelector('.start');
let pauseBtn = document.querySelector('.pause');
let stopBtn = document.querySelector('.stop');
let circle = document.querySelector('.circle');

let timer;
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let startSW;

startBtn.addEventListener('click', function () {
    if (timer == true) {
        return
    } else {
        timer = true;
        startSW = setInterval(stopWatch, 20);;
    };
});

pauseBtn.addEventListener('click', function () {
    timer = false;
    clearInterval(startSW);
    circle.classList.remove('active');
    progressView();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    clearInterval(startSW);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.querySelector('.hr').innerHTML = "00";
    document.querySelector('.min').innerHTML = "00";
    document.querySelector('.sec').innerHTML = "00";
    document.querySelector('.ms').innerHTML = "00";
    circle.classList.remove('active');
    progressView();
});

function stopWatch() {
    if (timer) {
        count += 2;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        if (hour > 0) {
            document.querySelector('.hr_display').classList.add('display');
            document.querySelector('.ms_display').classList.add('hide');
        } else {
            document.querySelector('.hr_display').classList.remove('display');
            document.querySelector('.ms_display').classList.remove('hide');
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.querySelector('.hr').innerHTML = hrString;
        document.querySelector('.min').innerHTML = minString;
        document.querySelector('.sec').innerHTML = secString;
        document.querySelector('.ms').innerHTML = countString;
    }
    circle.classList.add('active');
    progressView();
}

function progressView() {
    let box = document.querySelector('.circle.progress');
    let deg = (360 * document.querySelector('.sec').innerHTML / 60) + 180;
    if (document.querySelector('.sec').innerHTML >= 30) {
        box.classList.add('over_50');
    } else {
        box.classList.remove('over_50');
    }
    box.querySelector('.piece.right').style.transform = 'rotate(' + deg + 'deg)';
}
