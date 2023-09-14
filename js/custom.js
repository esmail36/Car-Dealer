
$(document).ready(function () {

  

  $(".check-slider.owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
            margin: 300,
        },
        400: {
          items: 2,
          margin: 220,
        },
        640: {
          items: 2,
          margin: 10,
        },
        767: {
            items: 2,
            margin: 20,
        },
        800: {
            items: 3,
            margin: 200,
        },
        991: {
            items: 3,
            margin: 80,
        },
        1199: {
            items: 4,
            margin: 40,
        },
    }
  });
  
  
  $(".seconed-slider").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    margin: 360,
    dots: true,
    autoplay: true,
    autoplayHoverPause: false ,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,
            margin: 300,
        },
        500: {
            items: 2,
            margin: 330,
        },
        600: {
          items: 2,
          margin: 120,
        },
        700: {
            items: 2,
            margin: 120,
        },
       991: {
            items: 3,
            margin: 280,
        },
        1199: {
            items: 3,
            margin: 0,
        },
    }
  });


  
  $('.about-slider').owlCarousel({
    items: 1,
    loop: false,
    margin: 50,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })



$(function() {
  var header = $(".navbar-main");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 30) {
          header.addClass("scrolled");
      } else {
          header.removeClass("scrolled");
      }
  });

});

  function countUp(numberElement) {
    let current = 0;
    const total = parseInt(numberElement.textContent);
    const increment = Math.ceil(total / 800);
    
    function step() {
      current += increment;
      if (current > total) current = total;
      numberElement.textContent = current.toLocaleString();
      (current !== total) && requestAnimationFrame(step);
    }
    step();
  }
  
  document.querySelectorAll('.number').forEach(elem => countUp(elem));
  
       /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $(".carAnimate");
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");

        // $(scrollTop).animate({
        //     bottom:"-10%",
        // },100);
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      },
      100
      );
      
      return false;
  
    }); // click() scroll top EMD

    $('select').niceSelect();

    $(".pag .top-filter-box .right-side .grid-icons a").on("click" , function () {
      console.log($(this).addClass("active-red").siblings().removeClass("active-red"));
    })
  });
    // Requires jQuery

// Initialize slider:





$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  arrows: false
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});

$(document).ready( function() {
  $(".faq-section .panel-default").on("click" , function () {
    console.log($(this).toggleClass("faq-active").siblings().removeClass("faq-active"));
  })
});

// CountDow


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 370 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);



