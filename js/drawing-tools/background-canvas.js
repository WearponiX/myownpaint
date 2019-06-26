function setBackgroundToCanvas(source='white', type='color') {
  if (type == color) {
    clear();
    ctx.rect(0, 0, 400, 400);
    ctx.fillStyle = color;
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