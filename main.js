const langIco = document.querySelector('.intro__language')
const langLinks = document.querySelectorAll('.intro__switch-link')

langIco.addEventListener('mouseover', (event) => {
  langLinks.forEach(item => {
    // item.classList.remove('testHover');
    // item.style.setProperty("color", "red","important")
    item.style.setProperty("opacity", "1", )
    item.style.setProperty("transition", "left 3s, opacity 3s")
    // item.classList.add('testTransition')
    console.log(item);
  })
});


langIco.addEventListener('mouseout', (event) => {
  // console.log(langLinks);
  langLinks.forEach(item => {
    // item.classList.remove('testHover');
    // item.style.setProperty("color", "red","important")
    item.style.setProperty("opacity", "0")
    // item.style.setProperty("transition", "left 10s")


    // item.classList.add('testTransition')
    console.log(item);
  })
});
