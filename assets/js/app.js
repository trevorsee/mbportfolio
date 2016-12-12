$(document).ready(function () {
  //initialize swiper when document ready
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
    });
});
