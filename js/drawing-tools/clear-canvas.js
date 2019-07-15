document.querySelector('.input-container__clear').addEventListener('click', clear);

function clear() {
  canvas.width = canvas.width+1;
  canvas.width = canvas.width-1;
};