function closeSideMenu() {
  document.getElementById('menu-toggle').checked = false;
}
document
  .querySelectorAll('.menubox li')
  .forEach((item) => item.addEventListener('click', closeSideMenu));
document
  .querySelectorAll('.blackout')
  .forEach((item) => item.addEventListener('click', closeSideMenu));
