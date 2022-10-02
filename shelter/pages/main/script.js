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

async function petCarouselInit() {
  const carousel = document.querySelector('.pet-slider > .cards_wrapper');
  const prevBtn = document.querySelector('.pet-slider > .arrow.prev');
  const nextBtn = document.querySelector('.pet-slider > .arrow.next');
  const sliderLength = getComputedStyle(carousel).getPropertyValue('--slider-length');
  const petsArray = await fetch('../../assets/pets.json').then((resp) => resp.json());

  for (let i = 0; i < sliderLength; i++) {
    carousel.innerHTML += `
      <div class="pet_card">
        <img src="${petsArray[i].img}" alt="${petsArray[i].name}" />
        <div class="pet_name">${petsArray[i].name}</div>
        <button>Learn more</button>
      </div>
    `;
  }
}

petCarouselInit();
