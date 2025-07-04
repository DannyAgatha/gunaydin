
const canvas = document.getElementById('daisyCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const daisyImage = new Image();
daisyImage.src = '/images/daisy.png';

const daisies = [];

function spawnDaisy() {
    daisies.push({
        x: Math.random() * canvas.width,
        y: -50,
        speed: 1 + Math.random() * 3,
        size: 20 + Math.random() * 30
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    daisies.forEach((d, i) => {
        d.y += d.speed;
        ctx.drawImage(daisyImage, d.x, d.y, d.size, d.size);
        if (d.y > canvas.height) daisies.splice(i, 1);
    });
}

function loop() {
    spawnDaisy();
    update();
    requestAnimationFrame(loop);
}

daisyImage.onload = () => {
    loop();
};
