var colors = document.querySelector('.colors');
var customInput = document.querySelector('input.custom--text');
var customLabel = document.querySelector('.label--custom');
colors.addEventListener('change', checkColor);


function checkColor() {
  var customColor = document.querySelector('.color--custom')
  var activeColor = document.querySelector('input.color:checked');
  var lineColor = activeColor.value;
  hideCustomInput();

  if (lineColor == 'custom') {
     showCustomInput();
  //   if (validateColor(lineColor)) {
  // }
    lineColor = customInput.value;
    
    
     var tempStyle = document.querySelector('style'); 
      if (!tempStyle) {
        var tempStyle = document.createElement('style');
        document.querySelector('head').appendChild(tempStyle);
      };
     tempStyle.innerHTML += '.color--custom::before{background:' + lineColor + '}';
    
  };
  return lineColor;
}

function showCustomInput() {
  customLabel.style.opacity = '0';
  customInput.style.display = 'block';
};

function hideCustomInput() {
  if (customInput.value) {
    return
  };
  customLabel.style.opacity = '1';
  customInput.style.display = 'none';
};

function validateColor(str) {
  if (str.length < 4 || str.length > 7 || str.indexOf('#') < 0) {
    return false
  };
  if (str.length == 4) {
    str += str.slice(str.indexOf('#'));
  };
  return str;
};

function getColor() {
  var lineColor = checkColor();
  return lineColor;
};

// if (color == 'custom') {
//   var tempStyle = document.querySelector('style');
// 
// 
//   color = customInput.value;
// 
//   if (color.length < 7) {
//     alert('Цвет введен некорректно');
//     return;
//   }
// 
//  var tempStyle = document.querySelector('style'); 
//   if (!tempStyle) {
//     var tempStyle = document.createElement('style');
//     document.querySelector('head').appendChild(tempStyle);
//   };
//  tempStyle.innerHTML += '.color--custom::before{background:' + color + '}';
// };