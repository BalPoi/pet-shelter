function closeSideMenu() {
  const checkbox = document.getElementById('menu-toggle');
  checkbox.checked = false;
  checkbox.dispatchEvent(new Event('change'));
}
function disableScrolling() {
  const bodyElem = document.querySelector('body');
  bodyElem.style.overflow = 'hidden';
}
function enableScrolling() {
  const bodyElem = document.querySelector('body');
  bodyElem.style.overflow = 'auto';
}
function scrollingController(e) {
  if (e.target.checked) disableScrolling(); else enableScrolling();
}

document
  .querySelectorAll('.menubox li')
  .forEach((item) => item.addEventListener('click', closeSideMenu));
document
  .querySelectorAll('.blackout')
  .forEach((item) => item.addEventListener('click', closeSideMenu));
document
  .querySelector('#menu-toggle')
  .addEventListener('change', scrollingController);
