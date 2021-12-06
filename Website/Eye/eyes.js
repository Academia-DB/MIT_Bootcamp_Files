const balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
    }
};

document.onmousedown = () => {
    const eyeBalls = document.getElementsByClassName("eye");
    for (let i = 0; i < 2; i++) {
        eyeBalls[i].style.background = '#0e3342';
    }
    const balls = document.getElementsByClassName("ball");
    for (let i = 0; i < 2; i++) {
        balls[i].style.background = '#0e3342';
    }
}

document.onmouseup = () => {
    const eyeBalls = document.getElementsByClassName("eye");
    for (let i = 0; i < 2; i++) {
        eyeBalls[i].style.background = '#fff';
    } 
    const balls = document.getElementsByClassName("ball");
    for (let i = 0; i < 2; i++) {
        balls[i].style.background = '#000';
    }
}