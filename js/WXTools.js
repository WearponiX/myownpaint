function log(val) {
  return console.log(val);
};

function ranValInArr(arr) {
  var rand = Math.random();
  return arr[rand * arr.length];
};

function ranNum(max, min = 0, step = 1) {
  var rand = Math.random();
  if (min) {
    min /= step;
  };
  max /= step;
  return (rand * (max - min) + min);
};

function getPerc(perc, max) {
  return (perc / max * 100);
}

function lsSet(name, val) {
  return window.localStorage.setItem(name, val);
};

function lsGet(name) {
  return window.localStorage.getItem(name);
}

function hide(element) {
  return element.classList.add('hidden');
}

function show(element) {
  return element.classList.remove('hidden');
}

function tempStyle(style) {
  var tempStyle = document.querySelector('style');
  if (!tempStyle) {
    var tempStyle = document.createElement('style');
    document.querySelector('head').appendChild(tempStyle);
  };
  tempStyle.innerHTML += style;
}