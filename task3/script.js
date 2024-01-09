const greenEl = document.querySelector('#green');
const yellowEl = document.querySelector('#yellow');
const redEl = document.querySelector('#red');

function makeGreen() {
    greenEl.style.backgroundColor = 'green';
    yellowEl.style.backgroundColor = 'black';
    redEl.style.backgroundColor = 'black';
}

function makeYellow() {
    greenEl.style.backgroundColor = 'black';
    yellowEl.style.backgroundColor = 'yellow';
    redEl.style.backgroundColor = 'black';
}

function makeRed() {
    greenEl.style.backgroundColor = 'black';
    yellowEl.style.backgroundColor = 'black';
    redEl.style.backgroundColor = 'red';
}

greenEl.addEventListener('click', makeGreen);
yellowEl.addEventListener('click', makeYellow);
redEl.addEventListener('click', makeRed);
