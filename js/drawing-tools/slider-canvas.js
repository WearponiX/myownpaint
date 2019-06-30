var slider = document.querySelector('.slider');
var sliderPin = slider.querySelector('.slider__pin');
var sliderInput = slider.querySelector('.slider__input');
var sliderLine = slider.querySelector('.slider__line');
//функция двигает пин слайдера и меняет значение во внутреннем input 
function getSliderPinValue() {
  var sliderX = slider.getBoundingClientRect().left + pageXOffset;
  var mouseX = event.pageX - sliderX - sliderPin.offsetWidth;
  //получаем процент текущей координаты мыши от всего блока в 275 пикселей, умножаем на 0.9 (x/10*9) т.к. значения будут от 0 до 9 
  //далее делим на 10 для получения 1 знака после запятой и прибавим 1, итог - значения от 1 до 10
  sliderInput.value = Math.floor(getPerc(mouseX, 275)*0.9)/10+1;
  if (mouseX < 0) {
    mouseX = 0
    sliderInput.value = 1;
  };
  if (mouseX > 275) {
    mouseX = 275
    sliderInput.value = 10;
  };
  moveSliderPin(mouseX);
};

function moveSliderPin(value) {
  sliderPin.style.margin = '0 0 0 ' + value + 'px';
  sliderLine.style.width = value + 'px';
  sliderPin.textContent = sliderInput.value;
};

slider.addEventListener('mouseup', getSliderPinValue);