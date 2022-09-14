$(document).ready(function(){
  $('.slickclass').slick({
    nextArrow: '<div class="arrow-next"><i class="zmdi zmdi-chevron-right"></i></div>',
    prevArrow: '<div class="arrow-prev"><i class="zmdi zmdi-chevron-left"></i></div>',
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  })
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-sticky").style.top = "-50%";
  } else {
    document.getElementById("header-sticky").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}




