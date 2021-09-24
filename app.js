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

// Home section animations

const navbar = document.querySelector('.nav-left');
const title = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-home');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-round');

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: '0px', ease: Power3.easeOut, duration: 0.6 })
  .from(title, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
  .staggerFrom(btn, 1, { opacity: 0 }, 0.2, '-=0.30')
  .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, '-=0.75')
  .from(
    btnRondAccueil,
    { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 },
    '-=1'
  );

window.addEventListener('load', () => {
  TL1.play();
});




// About section animations

const aboutContainer = document.querySelector('.about');
const aboutTitle = document.querySelector('.about-title');
const aboutLeft = document.querySelector('.about-left');
const aboutList = document.querySelectorAll('.list-item');

const tlabout = new TimelineMax();

tlabout
  .from(aboutTitle, { y: -200, opacity: 0, duration: 0.6 })
  .from(aboutLeft, { y: -20, opacity: 0, duration: 0.6 }, '-=0.5')
  .staggerFrom(aboutList, 1, { opacity: 0 }, 0.2, '-=0.5');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: aboutContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlabout)
  // .addIndicators()
  .addTo(controller);




// Portfolio Animation

const portfolioContainer = document.querySelector('.portfolio')
const titlePortfolio = document.querySelector('.portfolio-title')
const itemPortfolio = document.querySelectorAll('.wave1')

const tlPortfolio1 = new TimelineMax();

tlPortfolio1
.from(titlePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio1)
// .addIndicators()
.addTo(controller)

// wave 2 

const itemPortfolio2 = document.querySelectorAll('.wave2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)

// wave 3

const itemPortfolio3 = document.querySelectorAll('.wave3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
// .addIndicators()
.addTo(controller)
