var canvas = document.querySelector('canvas.canvas');
var ctx = canvas.getContext('2d');
var slider = document.querySelector('.slider');
var sliderPin = slider.querySelector('.slider-pin');
var sliderLine = slider.querySelector('.slider-line');
canvas.addEventListener('mousedown', start)
var canvasX = canvas.getBoundingClientRect().left + pageXOffset;
var canvasY = canvas.getBoundingClientRect().top + pageYOffset;
var sliderX = slider.getBoundingClientRect().left + pageXOffset;
function setBackgroundToCanvas() {
  ctx.rect(0, 0, 400, 400);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.fillStyle = ''
}

function start() {
  ctx.strokeStyle = document.querySelector('input.color:checked').value;
  ctx.lineWidth = sliderPin.value;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'butt';
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
document.querySelector('.clear').addEventListener('click', clear);

function clear() {
  setBackgroundToCanvas();
  ctx.clearRect(0, 0, 99999, 99999);
}

function save(format) {
  var save = document.createElement('a');
  save.href = canvas.toDataURL('image/'+format);
  save.download = 'img.'+format;
  save.click();
}
slider.addEventListener('mouseup', moveSliderPin);

function moveSliderPin() {
  var mouseX = event.pageX - sliderX - sliderPin.offsetWidth;
  if (mouseX < 25) {
    mouseX = 1
  };
  if (mouseX > 275) {
    mouseX = 275
  };
  sliderPin.style.margin = '0 0 0 ' + mouseX + 'px';
  sliderLine.style.width = mouseX + 'px';
  mouseX /= 2.75;
  sliderPin.value = mouseX / 10;
  sliderPin.textContent = Math.ceil(sliderPin.value * 10) / 10;
};
sliderPin.textContent = 1;
