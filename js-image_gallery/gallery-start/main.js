const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */

for (let i = 1; i <= 5; i++) {
    let path = "images/pic" + i.toString() + ".jpg";
    const newImage = document.createElement('img');
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        displayedImage.src = e.target.src;
    }
}

/* 编写 变暗/变量 按钮功能 */

btn.onclick = function () {
    let curClass = btn.getAttribute('class');
    if (curClass === 'dark') {
        btn.setAttribute('class', 'light')
        btn.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark')
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}