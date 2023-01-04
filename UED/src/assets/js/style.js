import "../scss/style.scss";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";


$(".carousel").swipe({

  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll: "vertical"

});
