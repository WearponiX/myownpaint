var tools = document.querySelector('.tools');
var toolsShow = document.querySelector('.toggle-tools');

toolsShow.addEventListener('click', hideToolbar);

function hideToolbar() {
  toolsShow.removeEventListener('click', hideToolbar);
  toolsShow.addEventListener('click', showToolbar);
  tools.style.display = 'none';
};

function showToolbar() {
  toolsShow.removeEventListener('click', showToolbar);
  toolsShow.addEventListener('click', hideToolbar);
  tools.style.display = 'block';
};