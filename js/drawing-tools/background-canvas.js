var whiteCanvas = document.querySelector('.add-background');
whiteCanvas.addEventListener('click', setBackgroundToCanvas);

function setBackgroundToCanvas(evt, value = 'white', type = 'color') {
  if (type == 'color') {
    clear();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = value;
    ctx.fill();
    ctx.fillStyle = ''
  };
};


// var canvasBG = document.querySelector('.canvas-bg');
// canvasBG.addEventListener('change', setImageAsCanvasBg);
// 
// function setImageAsCanvasBg() {
//   var reader = new FileReader;
//   console.log('ccc')
//   var file = canvasBG.files[0];
//   var url = reader.readAsDataURL(file);
//   ctx.drawImage(url, 200, 200);;
// }