
var swiper = new Swiper(".mySwiper", {
   grabCursor: true,
   spaceBetween: 12,
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      576: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
      1600: {
         slidesPerView: 4,
      },
   },
});