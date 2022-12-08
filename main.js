const langIco = document.querySelector('.intro__language')
// const langLinks = document.querySelectorAll('.intro__switch-link')
const rulang = document.querySelector('.intro__switch-link--RU')
const uaLang = document.querySelector('.intro__switch-link--UA')
const spiner = document.querySelector('.superSpiner')
const spinerSvg =  document.querySelector('.superSpiner svg')

langIco.addEventListener('mouseover', (event) => {

    rulang.style.setProperty("opacity", "1", )
    rulang.style.setProperty("transition", "left 1s, opacity 2s")
    // console.log(item);

    uaLang.style.setProperty("opacity", "1", )
    uaLang.style.setProperty("transition", "left 1s, opacity 2s")
});


langIco.addEventListener('mouseout', (event) => {
  uaLang.style.setProperty("opacity", "0")
  rulang.style.setProperty("opacity", "0",)
  rulang.style.setProperty("transition", "left 1s, opacity 2s")
  uaLang.style.setProperty("transition", "left 2s, opacity 2.5s")
});

// langIco.addEventListener('mouseover', (event) => {
//   langLinks.forEach(item => {
//     item.style.setProperty("opacity", "1", )
//     item.style.setProperty("transition", "left 3s, opacity 3s")
//     console.log(item);
//   })
// });


// langIco.addEventListener('mouseout', (event) => {
//   langLinks.forEach(item => {
//     item.style.setProperty("opacity", "0")

//     console.log(item);
//   })
// });

// spiner.addEventListener('mouseover', (event) => {
//   spiner.style.setProperty("transform", "rotate(-360deg)")
//   spiner.style.setProperty("transition", "3s")

// });


// spiner.addEventListener('mouseout', (event) => {
//   spiner.style.setProperty("transition", "transform 3s")
// });


spiner.addEventListener('mouseover', (event) => {
  // spiner.style.setProperty("transform", "rotate(-360deg)")
  // spiner.style.setProperty("transition", "transform 3s")
  // spiner.style.setProperty("animation", "spin 5s infinite linear")
  spinerSvg.style.setProperty("animation", "spin 5s infinite linear")
});

spiner.addEventListener('mouseout', (event) => {
  // spiner.style.setProperty("transform", "rotate(-360deg)")
  // spiner.style.setProperty("transition", "transform 3s")
  spinerSvg.style.setProperty("animation", "spin 5s infinite linear paused")
});


(function () {

  const link = document.querySelector('main');
  // const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
        const title = document.querySelector('.intro__title');
        console.log(title);
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        title.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') {
          title.style.transform = '';
        }
  };

  // const editCursor = e => {
  //       const { clientX: x, clientY: y } = e;
  //       cursor.style.left = x + 'px';
  //       cursor.style.top = y + 'px';
  // };

  link.addEventListener('mousemove', animateit);
  link.addEventListener('mouseleave', animateit);
  // window.addEventListener('mousemove', editCursor);

})();

// (function () {

//   const link = document.querySelectorAll('nav > .hover-this');
//   const cursor = document.querySelector('.cursor');

//   const animateit = function (e) {
//         const span = this.querySelector('span');
//         const { offsetX: x, offsetY: y } = e,
//         { offsetWidth: width, offsetHeight: height } = this,

//         move = 25,
//         xMove = x / width * (move * 2) - move,
//         yMove = y / height * (move * 2) - move;

//         span.style.transform = `translate(${xMove}px, ${yMove}px)`;

//         if (e.type === 'mouseleave') span.style.transform = '';
//   };

//   const editCursor = e => {
//         const { clientX: x, clientY: y } = e;
//         cursor.style.left = x + 'px';
//         cursor.style.top = y + 'px';
//   };

//   link.forEach(b => b.addEventListener('mousemove', animateit));
//   link.forEach(b => b.addEventListener('mouseleave', animateit));
//   window.addEventListener('mousemove', editCursor);

// })();

// HTML
{/* <div class="nav-wrapper">
  <nav>
    <a href="#" class="hover-this"><span>Home</span></a>
    <a href="#" class="hover-this"><span>Our Story</span></a>
    <a href="#" class="hover-this"><span>Studio</span></a>
    <a href="#" class="hover-this"><span>Contact</span></a>
    <div class="cursor"></div>
  </nav>
</div> */}

// CSS
// html, body {
//   margin: 0;
//   padding: 0;
//   cursor: none;
// }

// .nav-wrapper {
//   width: 100%;
//   height: 100vh;
//   background: #161616;
// }

// nav {
//   width: 100%;
//   margin: 0 auto;
//   text-align: center;
//   position: absolute;
//   top: 50%;
// }

// .hover-this {
//   transition: all 0.3s ease;
// }

// span {
//   display: inline-block;
//   font-family: 'Russo One', sans-serif;
//   font-weight: 400;
//   color: #fff;
//   font-size: 36px;
//   text-transform: uppercase;
//   pointer-event: none;
//   transition: transform 0.1s linear;
// }

// .cursor {
//   pointer-events: none;
//   position: fixed;
//   padding: 0.3rem;
//   background-color: #fff;
//   border-radius: 50%;
//   mix-blend-mode: difference;
//   transition: transform 0.3s ease;
// }

// .hover-this:hover ~ .cursor {
//   transform:translate(-50%, -50%) scale(8);
// }

// @media(min-width: 900px) {
//   nav {
//     display: flex;
//     justify-content: space-around;
//   }
// }

// @media(max-width: 900px) {
//   nav {
//     top: 30%;
//   }

//   .hover-this {
//     width: 100%;
//     padding: 20px 0;
//     display: inline-block;
//   }
// }
