import $ from 'jquery';

$(document).ready(function () {
	$(".menu__hum").click(function(){
		$(this).toggleClass("menu__hum-item--active");
		$('.menu__ham-wrapper').toggleClass("active");
	  });
});