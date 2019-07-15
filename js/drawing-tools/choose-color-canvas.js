var colors = document.querySelector('.colors');
var customColor = document.querySelector('.input-container__color--custom');
var customLabel = document.querySelector('.input-container__label--custom');
var customInput = document.querySelector('.input-container__input-custom-color');
colors.addEventListener('change', getColor);

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
  var activeColor = document.querySelector('.input-container__color:checked').value;
  return activeColor;
};