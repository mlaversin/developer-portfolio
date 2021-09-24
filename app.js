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

// Typewriter effect on Home Section

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1300)
  .changeDelay(20)
  .typeString("Moi c'est Morgan Laversin,")
  .pauseFor(300)
  .typeString('<strong> Développeur Full-Stack</strong> !')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: #777bb3;"> PhP</span> !')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #bf47b5;"> Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #c48428;"> JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #27ae60;"> VueJS</span> !')

  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<strong> Full-Stack</strong> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #777bb3;"> PhP</span> !')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #bf47b5;"> Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #c48428;"> JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #27ae60;"> VueJS</span> !')

  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<strong> Full-Stack</strong> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #777bb3;"> PhP</span> !')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #bf47b5;"> Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #c48428;"> JavaScript</span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #27ae60;"> VueJS</span> !')
  .start();
