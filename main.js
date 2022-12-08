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
