const swiper = new Swiper('.swiper', {
   // Optional parameters



   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
   },

});


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
   menu.classList.toggle('active');
   menuBtn.classList.toggle('active');
   document.body.classList.toggle('_lock');
})

