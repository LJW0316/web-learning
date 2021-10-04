const spinner = document.querySelector('div');
const body = document.querySelector('body');
let rotateCount = 0;
let rAF;
let startTime = null;
let isRotate = false;

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }
    rotateCount = (timestamp - startTime) / 3;
    if (rotateCount > 359) {
        rotateCount %= 360;
    }

    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}

body.addEventListener('click', function () {
    if (isRotate) {
        cancelAnimationFrame(rAF);
        isRotate = false;
    } else {
        draw()
        isRotate = true;
    }
})
//
// draw()