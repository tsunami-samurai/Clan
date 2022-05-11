const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});
openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});

  window.saveDataAcrossSessions = true;

  const loader = document.querySelector('.loader');
 const outerLoader = document.querySelector('.outer-loader');
 const app = document.querySelector('.app');

 
setTimeout(() => {
   Math.random
 loader.classList.add('removed');
  loader.addEventListener('transitionend', () => {
    loader.remove();
    outerLoader.remove();
  });
}, 2200);
map = new google.maps.Map(document.getElementById('map'), {

});








