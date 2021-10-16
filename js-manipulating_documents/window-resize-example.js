let div = document.querySelector('div');
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
div.style.width = WIDTH + 'px';
div.style.height = HEIGHT + 'px';

window.onresize = function () {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    div.style.width = WIDTH + 'px';
    div.style.height = HEIGHT + 'px';
}
