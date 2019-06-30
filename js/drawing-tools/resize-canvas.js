var canvasWidthInput = document.querySelector('.canvas-size__input--width');
var canvasHeightInput = document.querySelector('.canvas-size__input--height');

function resizeCanvas() {
  var width = canvasWidthInput.value;
  var height = canvasHeightInput.value;
  var img = ctx.getImageData(0,0,width,height);
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  canvasWidthInput.value = width;
  canvasHeightInput.value = height;
  ctx.putImageData(img, 0, 0);
};

canvasWidthInput.addEventListener('change', resizeCanvas);
canvasHeightInput.addEventListener('change', resizeCanvas);