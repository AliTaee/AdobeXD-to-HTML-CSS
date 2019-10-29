import $ from 'jquery';

$(document).ready(function () {
	
	const sliderFunc = (index = 1, time = 6000) => {
		let slider = $(".slider__item");

		if (index >= slider.length) {
			$(slider[index - 1]).removeClass("slider__item--active").fadeOut(1000);
			index = 0;
			$(slider[index]).addClass("slider__item--active").fadeIn(1000);
		} else {
			$(slider[index - 1]).removeClass("slider__item--active").fadeOut(1000);
			$(slider[index]).addClass("slider__item--active").fadeIn(1000);
			index++;
		}

		setTimeout(sliderFunc, time);
	}

	window.onload = sliderFunc;
});