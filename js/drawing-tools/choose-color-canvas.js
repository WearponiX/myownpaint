var colors = document.querySelector('.colors');
var customColor = document.querySelector('.input-container__color--custom');
var customLabel = document.querySelector('.input-container__label--custom');
var customInput = document.querySelector('.input-container__input-custom-color');
colors.addEventListener('change', checkColor);


function checkColor() {
  var activeColor = document.querySelector('.input-container__color:checked');
  var lineColor = activeColor.value;
  hideCustomInput();

  if (lineColor == 'custom') {
    showCustomInput();
    lineColor = customInput.value;

    var tempStyle = document.querySelector('style');
    if (!tempStyle) {
      var tempStyle = document.createElement('style');
      document.querySelector('head').appendChild(tempStyle);
    };
    tempStyle.innerHTML += '.input-container__color--custom::before{background:' + lineColor + '}';

  };
  return lineColor;
}

function showCustomInput() {
  customLabel.style.opacity = '0';
  customInput.style.display = 'block';
};

function hideCustomInput() {
  if (customInput.value) {
    return;
  };
  customLabel.style.opacity = '1';
  customInput.style.display = 'none';
};

function getColor() {
  var lineColor = checkColor();
  return lineColor;
};