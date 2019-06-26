var canvas = document.querySelector('canvas.canvas');
var ctx = canvas.getContext('2d');

var canvasX = canvas.getBoundingClientRect().left + pageXOffset;
var canvasY = canvas.getBoundingClientRect().top + pageYOffset;

canvas.addEventListener('mousedown', start);

function start() {
  ctx.strokeStyle = getColor();
  ctx.lineWidth = sliderPin.value;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.imageSmoothingQuality = 'high'
  ctx.beginPath();
  ctx.moveTo((event.pageX - canvasX), (event.pageY - canvasY));
  event.target.addEventListener('mousemove', move);
};

function move() {
  document.addEventListener('mouseup', end);
  ctx.lineTo((event.pageX - canvasX), (event.pageY - canvasY));
  ctx.stroke();
};

function end() {
  event.target.removeEventListener('mousemove', move);
  document.removeEventListener('mouseup', end);
  ctx.moveTo((event.pageX - canvasX), (event.pageY - canvasY));
  ctx.closePath();
  ctx.stroke();
};