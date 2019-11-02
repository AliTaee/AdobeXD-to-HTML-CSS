import $ from 'jquery';

$(document).ready(function () {
	let $hum = $('.menu__hum');
	let $humWrapper = $('.menu__ham-wrapper');
	
	$hum.click(function(){
		$hum.toggleClass("menu__hum-item--active");
		$humWrapper.toggleClass("active");
	  });
});