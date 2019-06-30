(function() {

  function savePicture(format = 'png') {
    let save = document.createElement('a');
    save.href = canvas.toDataURL('image/' + format);
    save.download = 'img.' + format;
    save.click();
  };

  var save = document.querySelector('.save');
  save.addEventListener('click', function(){
    savePicture('png');
  });

})();