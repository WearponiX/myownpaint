var tools = document.forms.tools;
var preset = {
  color: tools.color.value,
  size: tools.brushSize.value
};
tools.addEventListener('change', function() {
  preset = {
    color: tools.color.value,
    size: tools.brushSize.value
  };
})