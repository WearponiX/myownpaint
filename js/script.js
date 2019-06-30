(function() {
  let tools = document.forms.tools;
  tools.addEventListener('change', function() {
    window.preset = {
      color: tools.color.value,
      brushSize: tools.brushSize.value,
      canvasWidth: tools.canvasWidth.value,
      canvasHeight: tools.canvasHeight.value
      //    customColors: [{}]
    };
    lsSet('preset', window.preset);
  })
})();