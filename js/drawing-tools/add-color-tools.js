var templateColorPattern = document.querySelector('template#color-pattern').content.querySelector('.input-container');
var newColor = document.querySelector('.add-color');
var popup = document.querySelector('.popup-color');
var popupBackground = document.querySelector('.popup-color__background');

popupBackground.addEventListener('click', function() {
  hide(popup);
});

popup.addEventListener('submit', function(event) {
  event.preventDefault();
  hide(popup);
  let form = document.forms.popupColorForm;
  let name = form.popupName.value;
  let color = form.popupColor.value;
  log(color);
  addColor(name, color)
})

function getColorFromUser(ask) {
  show(popup);
};

function addColor(name, color) {
  if (!color) {
    color = white
  };
  let temp = templateColorPattern.cloneNode(true);
  temp.querySelector('input').value = color.toLowerCase();
  temp.querySelector('input').id = name.toLowerCase();
  temp.querySelector('input').classList.add('input-container__color--' + name.toLowerCase());
  temp.querySelector('label').htmlFor = name.toLowerCase();
  temp.querySelector('label').textContent = name;
  
  var tempStyle = document.querySelector('style');
  if (!tempStyle) {
    var tempStyle = document.createElement('style');
    document.querySelector('head').appendChild(tempStyle);
  };
  tempStyle.innerHTML += '.input-container__color--'+name.toLowerCase()+'::before{background:' + color + '}';

  
  colors.appendChild(temp);
};
newColor.addEventListener('click', getColorFromUser);