function getRandomColor() {
    let colors = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    document.getElementById("body").style.background = color;
    return color;
}

setInterval(getRandomColor, 3500);
