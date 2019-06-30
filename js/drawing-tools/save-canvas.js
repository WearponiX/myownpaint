function save(format) {
  var save = document.createElement('a');
  save.href = canvas.toDataURL('image/' + format);
  save.download = 'img.' + format;
  save.click();
}
var save = document.querySelector('.save');
save.addEventListener('click', function(){save('png')});