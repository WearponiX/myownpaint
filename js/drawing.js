var canvas = document.querySelector('canvas.canvas-tools__canvas');
var ctx = canvas.getContext('2d');

var canvasX = canvas.getBoundingClientRect().left + pageXOffset;
var canvasY = canvas.getBoundingClientRect().top + pageYOffset;

window.onload = function(){canvas.addEventListener('mousedown', start)};

function initDrawing() {
  ctx.strokeStyle = getColor();
  ctx.lineWidth = sliderInput.value;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.imageSmoothingQuality = 'high'
};

function start(event) {
  event.preventDefault();
  initDrawing();
  ctx.beginPath();
  ctx.moveTo((event.pageX - canvasX), (event.pageY - canvasY));
  event.target.addEventListener('mousemove', move);
};

function move(event) {
  event.preventDefault();
  document.addEventListener('mouseout', end);
  document.addEventListener('mouseup', end);
  ctx.lineTo((event.pageX - canvasX), (event.pageY - canvasY));
  ctx.stroke();
};

function end(event) {
  event.preventDefault();
  event.target.removeEventListener('mousemove', move);
  document.removeEventListener('mouseout', end);
  document.removeEventListener('mouseup', end);
  ctx.moveTo((event.pageX - canvasX), (event.pageY - canvasY));
  ctx.closePath();
  ctx.stroke();
};

canvas.addEventListener('touchstart', startMobile);

function startMobile(event) {
  event.preventDefault();
  initDrawing();
  ctx.beginPath();
  ctx.moveTo((event.changedTouches[0].pageX - canvasX), (event.changedTouches[0].pageY - canvasY));
  event.target.addEventListener('touchmove', moveMobile);
  console.log('start');

};

function moveMobile(event) {
  event.preventDefault();
  document.addEventListener('touchend', endMobile);
  ctx.lineTo((event.changedTouches[0].pageX - canvasX), (event.changedTouches[0].pageY - canvasY));
  ctx.stroke();
};

function endMobile(event) {
  event.preventDefault();
  console.log('end');
  event.target.removeEventListener('touchmove', moveMobile);
  document.removeEventListener('touchend', endMobile);
  ctx.moveTo((event.changedTouches[0].pageX - canvasX), (event.changedTouches[0].pageY - canvasY));
  ctx.closePath();
  ctx.stroke();
};