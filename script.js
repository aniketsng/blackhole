const canvas = document.getElementById('accretionDisk');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawDisk() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < 50; i++) {
    const radius = 100 + i * 3;
    const hue = (i * 10 + angle) % 360;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  angle += 1;
  requestAnimationFrame(drawDisk);
}

drawDisk();
