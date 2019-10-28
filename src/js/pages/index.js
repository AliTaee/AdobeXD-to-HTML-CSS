import $ from 'jquery';

const TIME = 3000;
let index = 1;

$(document).ready(function () {

    // Hover sub menu
    $(".menu__sub, .menu__sub-menu").hover(function () {
        // Disable menu
        $(".menu__sub-menu").addClass("menu__sub-menu--active");
        // Animation
        $(".menu__arrow").addClass("menu__arrow--active");
    }, function () {
        // Hide menu
        $(".menu__sub-menu").removeClass("menu__sub-menu--active");
        // Animation
        $(".menu__arrow").removeClass("menu__arrow--active");
    });

    function sliderFunc(){
        let slider = $(".slider__item");
        
        if (index >= slider.length) {
            $(slider[index - 1]).removeClass("slider__item--active");
            index = 0;
            $(slider[index]).addClass("slider__item--active");
        } else {
            $(slider[index - 1]).removeClass("slider__item--active");
            $(slider[index]).addClass("slider__item--active");
            index++;
        }
        
        setTimeout(sliderFunc, TIME); 
    }

    window.onload = sliderFunc;
});