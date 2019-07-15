(function() {
  let tools = document.forms.tools;
  let reset = document.querySelector('.reset-settings');
  const defaultSettings = {
    currentColor: tools.color.value,
    brushSize: tools.brushSize.value,
    canvasWidth: tools.canvasWidth.value,
    canvasHeight: tools.canvasHeight.value
  };
  reset.addEventListener('click', clearSettings);
  tools.addEventListener('change', saveSettings);
  slider.addEventListener('mouseup', saveSettings);
  window.addEventListener('load', function() {
    applySettings();
  });

  function clearSettings() {
    applySettings(true);
    storageClear();
  };

  function applySettings (def=false) {
    if (def) {
      var preset = defaultSettings;
      storageClear();
    } else {
      var preset = storageGet('preset');
    };
    if (!preset) return;

    //load canvas size
    canvasWidthInput.value = preset.canvasWidth;
    canvasHeightInput.value = preset.canvasHeight;
    resizeCanvas();

    //load active tools
    document.querySelector('.input-container__color[value=' + preset.currentColor + ']').checked = true;

    //load brush size
    // (0..9) / 9 = (0..1) 
    // (0..1) * 275 = 0px..275px 
    let sliderPinPX = Math.floor((preset.brushSize - 1) / 9 * 275);
    moveSliderPin(sliderPinPX, preset.brushSize);
  }

  function saveSettings() {
    window.preset = {
      currentColor: tools.color.value,
      brushSize: tools.brushSize.value,
      canvasWidth: tools.canvasWidth.value,
      canvasHeight: tools.canvasHeight.value,
      customColors: getCustomColors
    };
    storageSet('preset', window.preset);
  }

  function getCustomColors() {

  }

})();