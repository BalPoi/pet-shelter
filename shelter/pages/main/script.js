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

function petCarouselNext() {
  let start = petCarouselRender.startPetIndex;
  let length = petCarouselRender.sliderLength;
  let pets = petCarouselRender.pets;
  if (start + length > pets.length - 1) {
    petCarouselRender.startPetIndex = start + length - pets.length;
  } else {
    petCarouselRender.startPetIndex += length;
  }
  petCarouselRender();
}
function petCarouselPrev() {
  let start = petCarouselRender.startPetIndex;
  let length = petCarouselRender.sliderLength;
  let pets = petCarouselRender.pets;
  if (start - length < 0) {
    petCarouselRender.startPetIndex = start - length + pets.length;
  } else {
    petCarouselRender.startPetIndex -= length;
  }
  petCarouselRender();
}
function petCarouselRender() {
  let start = petCarouselRender.startPetIndex;
  let length = petCarouselRender.sliderLength;
  let pets = petCarouselRender.pets;
  petCarouselRender.carousel.innerHTML = '';
  for (let i = 0; i < length; i++) {
    const index = i + start <= pets.length-1
      ? i + start
      : (pets.length - i - start) * -1;

    petCarouselRender.carousel.innerHTML += `
      <div class="pet_card">
        <img src="${pets[index].img}" alt="${pets[index].name}" />
        <div class="pet_name">${pets[index].name}</div>
        <button>Learn more</button>
      </div>
    `;
  }
}
(async function petCarouselInit() {
  const carousel = document.querySelector('.pet-slider > .cards_wrapper');
  const prevBtn = document.querySelector('.pet-slider > .arrow.prev');
  const nextBtn = document.querySelector('.pet-slider > .arrow.next');
  const sliderLength = Number.parseInt(getComputedStyle(carousel).getPropertyValue('--slider-length'));
  const petsArray = await fetch('../../assets/pets.json').then((resp) => resp.json());

  petCarouselRender.pets = petsArray;
  petCarouselRender.startPetIndex = 0;
  petCarouselRender.sliderLength = sliderLength;
  petCarouselRender.carousel = carousel;

  petCarouselRender();

  prevBtn.addEventListener('click', petCarouselPrev);
  nextBtn.addEventListener('click', petCarouselNext);
})();
