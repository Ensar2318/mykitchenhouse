// Header ve footer load işlemi
$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $(".faq-wrap .faq-content").slideUp();
    $(".faq-wrap .faq-title").click(function(e) {
        e.preventDefault();
        $(".faq-wrap .faq-content").removeClass("max-height");

        if (!$(this).parent().hasClass("active")) {
            $(".faq-wrap .faq-content").slideUp();
            $(".faq-wrap .default-faq-item").removeClass("active");
        }
        $(this).parent().toggleClass("active");
        $(this).parent().children(".faq-content").slideToggle();

    });

  
});

$(document).scroll(function() {
    if (window.pageYOffset >= 100) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");

    }
});

var heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".heroSwiper-button-next",
        prevEl: ".heroSwiper-button-prev",
    },
    speed:800

});


var feature1Swiper = new Swiper(".feature1Swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var featuredProductFluidSwiper = new Swiper(".featuredProductFluidSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".featuredProductFluidSwiper-button-next",
        prevEl: ".featuredProductFluidSwiper-button-prev",
    },

});

var blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
    breakpoints: {

        650: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    autoplay: {
        delay: 2000,
      },

});


const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});






//#####Swiper Örneği######

// var announcementSwiper = new Swiper(".announcementSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     centeredSlides: true,
//     breakpoints: {

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".announcementSwiper-button-next",
//         prevEl: ".announcementSwiper-button-prev",
//     },
// });