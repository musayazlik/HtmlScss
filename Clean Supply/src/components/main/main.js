import "bootstrap";
import Swiper from "swiper/swiper-bundle";
import $ from "jquery";
import "daterangepicker";
import 'swiper/swiper-bundle.css';
import "./main.scss";
import "bootstrap-select";

$(function () {
  $(".swiper-container").each(function (i, el) {
    let data = $(el).data();
    console.log(data);
    let swiper = new Swiper(el, data);
  })

  $("#closes").on("click", function () {
    $("#sidebar").toggleClass("closeSidebar");
    $(".close-back").toggleClass("d-none");
  });

  $("#menu-open").on("click", function () {
    $("#sidebar").toggleClass("closeSidebar");
    $(".close-back").toggleClass("d-none");
  });

  $("#search-mobile-button").on("click", function () {
    $(".mobile-search").toggleClass("d-flex");
    $(".close-back").removeClass("d-none");
  });

  $("#theme-dark-mode").on("click", function () {
    $("body").toggleClass("dark");
    $("i.bi-moon-stars").toggleClass("invisible");
    $("i.bi-brightness-high").toggleClass("invisible");
  });

  // My Orders Page Search Order Data
  $('#order-date').daterangepicker({
    opens: 'right',
    singleDatePicker: true,
    showDropdowns: true,
  });

  //Card Page Component
  $('#list').click(function (event) {
    event.preventDefault();
    $('.card-items .item').addClass('list-group-item');
    $(this).addClass('active');
    $('#grid').removeClass('active');
  });
  $('#grid').click(function (event) {
    event.preventDefault();
    $('.card-items .item').removeClass('list-group-item');
    $(".card-items .item").addClass('grid-group-item');
    $(this).addClass('active');
    $('#list').removeClass('active');
  });

  //profile Page Content
  $("#profile-container").click(function(e) {
    $("#imageUpload").click();
  });
  function fasterPreview( uploader ) {
    if ( uploader.files && uploader.files[0] ){
      $('#profileImage').attr('src',
        window.URL.createObjectURL(uploader.files[0]) );
    }
  }
  $("#imageUpload").change(function(){
    fasterPreview( this );
  });

  //Address Select
  $('.selectpicker').selectpicker().after().siblings().addClass("rounded-0");
})



