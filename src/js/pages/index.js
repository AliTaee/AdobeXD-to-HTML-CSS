import $ from 'jquery';

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
});