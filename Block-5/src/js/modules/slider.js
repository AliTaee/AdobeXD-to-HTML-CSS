import $ from 'jquery';

$(document).ready(function () {

	const slider = (time = 6000) => {

		let sliderItems = $(".slider__item");
		let index = 1;
		setInterval((function sliderFunc() {

			if (index >= sliderItems.length) {
				$(sliderItems[index - 1]).removeClass("slider__item--active").fadeOut(1000);
				index = 0;
				$(sliderItems[index]).addClass("slider__item--active").fadeIn(1000);
			} else {
				$(sliderItems[index - 1]).removeClass("slider__item--active").fadeOut(1000);
				$(sliderItems[index]).addClass("slider__item--active").fadeIn(1000);
				index++;
			}

		}), time);

	}

	window.onload = slider(6000);
});