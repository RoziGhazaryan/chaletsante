// Header fixed
window.onscroll = function() {myFunction()};
var nav = document.getElementsByClassName("fixed-js")[0];
var sticky = nav.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

$(document).ready(function () {

// Header mob-menu
    $('.header-box__nav--icone').on('click', function () {
        $("header").addClass("nav-block__open");
        $("#fp-nav").fadeIn();
        
    });
    $(".close-menu, .mob__menu--close").on('click', function () {
        $("#fp-nav").hide();
        if ($("header").hasClass('nav-block__open')) {
            $("header").removeClass("nav-block__open")
        }
    })


// Fullpage
    if (screen.width <= 768 || screen.height < 625) {
        $('#fullpage').attr('id', '');
    }
    else if (screen.width > 768 || screen.height >= 625) {
        $(".invester-container").attr("id", "fullpage");
    }

    $('#fullpage').fullpage({
        anchors: ['page_1', 'page_2', 'page_3', 'page_4', 'page_5', 'page_6'],
        navigation: true,
        verticalCentered: true,
        navigationPosition: 'left',
        navigationTooltips: ['Главная', 'НАШИ СПЕЦИАЛИСТЫ', 'О ЦЕНТРЕ', 'ЭТАПЫ РАБОТЫ', 'ЛИЦЕНЗИИ', 'КОНТАКТЫ'],
    });

});




$('.license-slider-js').slick({
    dots: true,
    infinite: false,
    slidesToShow: 1,
    autoplay: true,
    arrows: true,

    responsive: [
        {
            breakpoint: 9999,
            settings: 'unslick',
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                autoplay: false,
                arrows: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$(document).ready(function() {

    $('.license-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true,
        }
    });

});


$('.specialists-slider-js').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1366.98,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.about-the-center-slider-js').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 1199.98,
            settings: {}
        },
        {
            breakpoint: 991.98,
            settings: {
            }
        },
        {
            breakpoint: 767.98,
            settings: {}
        }
    ]
});