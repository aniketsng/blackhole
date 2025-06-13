const canvas = document.getElementById('accretionDisk');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawDisk() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < 70; i++) {
    const radius = 130 + i * 2;
    const hue = (angle + i * 8) % 360;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `hsl(${hue}, 100%, ${30 + (i % 3) * 10}%)`;
    ctx.lineWidth = 2;
    ctx.shadowColor = `hsl(${hue}, 100%, 60%)`;
    ctx.shadowBlur = 8;
    ctx.stroke();
  }

  angle += 0.8;
  requestAnimationFrame(drawDisk);
}

drawDisk();