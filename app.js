// Burger menu animation

const btnMenu = document.querySelector('.btn-round-menu');
const nav = document.querySelector('.nav-left');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const line = document.querySelector('.lines-container');

btnMenu.addEventListener('click', () => {
  line.classList.toggle('active');
  nav.classList.toggle('menu-visible');
});

if (window.matchMedia('(max-width: 1300px)')) {
  allItemNav.forEach((item) => {
    item.addEventListener('click', () => {
      nav.classList.toggle('menu-visible');
      line.classList.toggle('active');
    });
  });
}

