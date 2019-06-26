var slider = document.querySelector('.slider');
var sliderPin = slider.querySelector('.slider-pin');
function moveSliderPin() {
  var sliderLine = slider.querySelector('.slider-line');
  var sliderX = slider.getBoundingClientRect().left + pageXOffset;
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

slider.addEventListener('mouseup', moveSliderPin);