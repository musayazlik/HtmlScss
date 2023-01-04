import "../scss/main.scss";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../../../node_modules/swiper/swiper-bundle.min.css"
import Swiper from "../../../node_modules/swiper/swiper-bundle.min.js";

var swiper = new Swiper(".teams-swiper", {
   spaceBetween: 10,
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      650: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
      1401: {
         slidesPerView: 4,
      },
   },


   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
});

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      650: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
      1400: {
         slidesPerView: 4,
      },
   },
});







