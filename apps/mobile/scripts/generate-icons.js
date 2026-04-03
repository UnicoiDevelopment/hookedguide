const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function generateIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0A1628';
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
  const scale = size / 1024;

  ctx.strokeStyle = '#C17F3E';
  ctx.lineWidth = 40 * scale;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // Hook shaft (vertical line going down)
  ctx.beginPath();
  ctx.moveTo(cx, cy - 280 * scale);
  ctx.lineTo(cx, cy + 100 * scale);

  // Hook curve (bottom curve going left then up)
  ctx.quadraticCurveTo(cx, cy + 300 * scale, cx - 180 * scale, cy + 300 * scale);
  ctx.quadraticCurveTo(cx - 340 * scale, cy + 300 * scale, cx - 340 * scale, cy + 100 * scale);

  // Hook point (barb going up and slightly right)
  ctx.lineTo(cx - 340 * scale, cy - 20 * scale);
  ctx.stroke();

  // Barb
  ctx.beginPath();
  ctx.moveTo(cx - 340 * scale, cy - 20 * scale);
  ctx.lineTo(cx - 280 * scale, cy + 40 * scale);
  ctx.stroke();

  // Eye of the hook (small circle at top)
  ctx.beginPath();
  ctx.arc(cx, cy - 320 * scale, 50 * scale, 0, Math.PI * 2);
  ctx.stroke();

  // Fishing line coming from eye
  ctx.lineWidth = 12 * scale;
  ctx.beginPath();
  ctx.moveTo(cx + 30 * scale, cy - 360 * scale);
  ctx.quadraticCurveTo(cx + 250 * scale, cy - 500 * scale, cx + 350 * scale, cy - 420 * scale);
  ctx.stroke();

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'assets', filename), buffer);
  console.log(`Generated ${filename} (${size}x${size})`);
}

function generateSplash(width, height, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0A1628';
  ctx.fillRect(0, 0, width, height);

  const cx = width / 2;
  const cy = height / 2;
  const scale = width / 512;

  // Draw the hook icon smaller, above center
  ctx.strokeStyle = '#C17F3E';
  ctx.lineWidth = 20 * scale;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const hookCy = cy - 60 * scale;

  ctx.beginPath();
  ctx.moveTo(cx, hookCy - 120 * scale);
  ctx.lineTo(cx, hookCy + 40 * scale);
  ctx.quadraticCurveTo(cx, hookCy + 130 * scale, cx - 80 * scale, hookCy + 130 * scale);
  ctx.quadraticCurveTo(cx - 150 * scale, hookCy + 130 * scale, cx - 150 * scale, hookCy + 40 * scale);
  ctx.lineTo(cx - 150 * scale, hookCy - 10 * scale);
  ctx.stroke();

  // Barb
  ctx.beginPath();
  ctx.moveTo(cx - 150 * scale, hookCy - 10 * scale);
  ctx.lineTo(cx - 120 * scale, hookCy + 20 * scale);
  ctx.stroke();

  // Eye
  ctx.beginPath();
  ctx.arc(cx, hookCy - 140 * scale, 22 * scale, 0, Math.PI * 2);
  ctx.stroke();

  // "HOOKED" text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${52 * scale}px DejaVu Sans`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = `${6 * scale}px`;
  ctx.fillText('HOOKED', cx, cy + 100 * scale);

  // "FISH SMARTER." tagline
  ctx.fillStyle = '#C17F3E';
  ctx.font = `${18 * scale}px DejaVu Sans`;
  ctx.fillText('FISH SMARTER.', cx, cy + 140 * scale);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '..', 'assets', filename), buffer);
  console.log(`Generated ${filename} (${width}x${height})`);
}

// Make sure assets dir exists
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

generateIcon(1024, 'icon.png');
generateIcon(1024, 'adaptive-icon.png');
generateIcon(48, 'favicon.png');
generateSplash(512, 512, 'splash-icon.png');
console.log('All icons generated!');
