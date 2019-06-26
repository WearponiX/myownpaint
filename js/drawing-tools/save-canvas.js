function save(format) {
  var save = document.createElement('a');
  save.href = canvas.toDataURL('image/' + format);
  save.download = 'img.' + format;
  save.click();
}
var saveJPG = document.querySelector('.save--jpg');
var savePNG = document.querySelector('.save--png');
saveJPG.addEventListener('click', function(){save('jpg')});
savePNG.addEventListener('click', function(){save('png')});