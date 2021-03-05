(function($) {
  
  "use strict";

/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 500
    });

/* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/* 
   Clients Sponsor 
   ========================================================================== */
    var owl = $("#clients-scroller");
    owl.owlCarousel({
      items:5,
      itemsTablet:3,
      margin:90,
      stagePadding:90,
      smartSpeed:450,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,3],
      itemsTablet: [767,2],
      itemsTabletSmall: [480,2],
      itemsMobile : [479,1],
    });

  /* Testimonials Carousel 
  ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsTablet: [767,1],
        itemsTabletSmall: [480,1],
        itemsMobile : [479,1],
      });   

/* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      itemsDesktopSmall: [1024, 1],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="lni-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    }); 

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });
/* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 30,
    responsive: false
  });

/* 
   Page Loader
   ========================================================================== */
   $(window).on('load',function() {
      "use strict";
      $('#loader').fadeOut();
    });

}(jQuery));


var btn=document.querySelector(".btn-hover");

btn.addEventListener('click',()=>{
    btn.style.color="#1abc9c"
})


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

function check(){
const WINDOW_INNERWIDTH = window.innerWidth
if (WINDOW_INNERWIDTH<600 && WINDOW_INNERWIDTH > 300){
  document.querySelector('.textImg1').style.fontSize = "30px";
  document.querySelector('.textImg2').style.fontSize = "20px";
}
else if(WINDOW_INNERWIDTH>600){
  document.querySelector('.textImg1').style.fontSize = "50px";
  document.querySelector('.textImg2').style.fontSize = "30px";
}
else{
  document.querySelector('.textImg1').style.fontSize = "20px";
  document.querySelector('.textImg2').style.fontSize = "10px";
}
if(WINDOW_INNERWIDTH<=300){
  document.querySelector('.mainBtn').style.marginLeft = "20%";
}
// 300 365
else if (WINDOW_INNERWIDTH >=300 && WINDOW_INNERWIDTH <= 365)
{
   if(WINDOW_INNERWIDTH <=330){
  document.querySelector('.mainBtn1').style.fontSize="small !important"
  document.querySelector('.mainBtn1').style.width="20px !important"
  document.querySelector('.mainBtn').style.marginLeft = "0%";
}
else{
  document.querySelector('.mainBtn').style.marginLeft = "0%";
}
}
else if (WINDOW_INNERWIDTH >=300 && WINDOW_INNERWIDTH <= 415){
  document.querySelector('.mainBtn').style.marginLeft = "10%";
}
// 360 637
else if(WINDOW_INNERWIDTH<=637 && WINDOW_INNERWIDTH>=360){
  document.querySelector('.mainBtn').style.marginLeft = "20%";
}
}
window.addEventListener('onload')
window.addEventListener('resize',()=>{
  // if (window.innerWidth<600 && window.innerWidth > 300){
  //   document.querySelector('.textImg1').style.fontSize = "30px";
  //   document.querySelector('.textImg2').style.fontSize = "20px";
  // }
  // else if(window.innerWidth>600){
  //   document.querySelector('.textImg1').style.fontSize = "50px";
  //   document.querySelector('.textImg2').style.fontSize = "30px";
  // }
  // else{
  //   document.querySelector('.textImg1').style.fontSize = "20px";
  //   document.querySelector('.textImg2').style.fontSize = "10px";
  // }
  
  if(window.innerWidth<=300){
    document.querySelector('.mainBtn').style.marginLeft = "20%";
  }
  // 300 365
  else if (window.innerWidth >=300 && window.innerWidth <= 365)
  {
     if(window.innerWidth <=330){
    document.querySelector('.mainBtn1').style.fontSize="small !important"
    document.querySelector('.mainBtn1').style.width="20px !important"
    document.querySelector('.mainBtn').style.marginLeft = "0%";
  }
  else{
    document.querySelector('.mainBtn').style.marginLeft = "0%";
  }
  }
  else if (window.innerWidth >=300 && window.innerWidth <= 415){
    document.querySelector('.mainBtn').style.marginLeft = "10%";
  }
  // 360 637
  else if(window.innerWidth<=637 && window.innerWidth>=360){
    document.querySelector('.mainBtn').style.marginLeft = "20%";
  }

})
