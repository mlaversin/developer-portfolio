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
  .typeString("Moi c'est John Doe,")
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





// Contact - Input animation

const input_fields = document.querySelectorAll('input');

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];

  field.addEventListener('input', (e) => {
    if (e.target.value !== '') {
      e.target.parentNode.classList.add('animation');
    } else if (e.target.value == '') {
      e.target.parentNode.classList.remove('animation');
    }
  });
}



// Home - GSAP + ScrollMagic Animation

const navbar = document.querySelector('.nav-left');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-home');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-round');


const TL1 = gsap.timeline({paused: true});

TL1 
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(title, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})