const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervaliId
const startChangingColor = function () {
    if (!intervaliId) {
        intervaliId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.background = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(intervaliId);
    intervaliId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);