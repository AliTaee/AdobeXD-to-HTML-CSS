import $ from 'jquery';

$(document).ready(function () {

    // Hover sub menu
    $(".menu__sub, .menu__sub-menu").hover(function () {
        // Disable menu
        $(".menu__sub-menu").css({
            "opacity": "1",
            "visibility": "visible"
        });
        // Animation
        $(".menu__arrow").css({
            "transform": "rotate(-135deg)",
            "-webkit-transform": "rotate(-135deg)",
            "transition": "1s",
        });
    }, function () {
        // Hide menu
        $(".menu__sub-menu").css({
            "opacity": "0",
            "visibility": "hidden"
        });
        // Animation
        $(".menu__arrow").css({
            "transform": "rotate(45deg)",
            "-webkit-transform": "rotate(45deg)",
            "transition": "1s",
        });
    });
});