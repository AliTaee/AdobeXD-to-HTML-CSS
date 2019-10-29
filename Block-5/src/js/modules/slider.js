import $ from 'jquery';

$(document).ready(function () {

	class slider {
		constructor(time, sliderContainer, bulletContainer) {
			this.time = time;
			this.sliderContainer = sliderContainer;
			this.bulletContainer = bulletContainer;
			this.index = 1;
		};

		slide() {

			let sliderItems = $(this.sliderContainer);
			let index = this.index;

			this.bulletGenerate();

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

			}), this.time);
		};

		bulletGenerate() {

			let bulletContainer = $(this.bulletContainer);
			let bulletNumber = $(this.sliderContainer).length;

			for (let index = 1; index <= bulletNumber; index++) {
				if (index === 1) {
					$(bulletContainer).prepend("<span class='slider__bullet slider__bullet--active'></span>");
				} else {
					$(bulletContainer).prepend("<span class='slider__bullet'></span>");
				}
			}

		};
	};

	// Time - slider wrapper - bullet wrapper
	let headerSlider = new slider(3000, ".slider__item", ".slider__nav");

	// Start when page is load
	window.onload = headerSlider.slide();
});