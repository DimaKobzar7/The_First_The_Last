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

  const link = document.querySelector('.intro__title');
  // const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
        const span = document.querySelector('h1');
        console.log(span);
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') {
          span.style.transform = '';
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
