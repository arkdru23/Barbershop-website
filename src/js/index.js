const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation__wrapper');
const scrollElement = document.querySelectorAll('.scroll');
const navigationElement = document.querySelectorAll(
  '.navigation__wrapper .nav-list ul li',
);

function toogleElement() {
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('navigation__wrapper--active');
}

hamburger.addEventListener('click', toogleElement);

scrollElement.forEach((element) => {
  element.scrollIntoView();
});

navigationElement.forEach((element) => {
  element.addEventListener('click', toogleElement);
});
