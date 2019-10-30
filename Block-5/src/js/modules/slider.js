import $ from 'jquery';

$(document).ready(function () {

	class slider {
		constructor(time, sliderContainer, bulletContainer, bullet) {
			this.time = time;
			this.sliderContainer = sliderContainer;
			this.bulletContainer = bulletContainer;
			this.bullet = bullet;
			this.index = 1;
		};

		slide() {

			let sliderItems = $(this.sliderContainer);
			let bullet = $(this.bullet);
			let index = this.index;

			setInterval((function sliderFunc() {
				if (index < sliderItems.length) {
					$(sliderItems[index]).addClass("slider__item--active");
					$(sliderItems[index - 1]).removeClass("slider__item--active");
					$(bullet[index]).addClass("slider__bullet--active");
					$(bullet[index - 1]).removeClass("slider__bullet--active");
					index++;
				} else {
					$(sliderItems[0]).addClass("slider__item--active");
					$(sliderItems[index - 1]).removeClass("slider__item--active");
					$(bullet[0]).addClass("slider__bullet--active");
					$(bullet[index - 1]).removeClass("slider__bullet--active");
					index = 1;
				}

			}), this.time);

		};

		bulletGenerate() {

			let bulletContainer = $(this.bulletContainer);
			let bulletNumber = $(this.sliderContainer).length;

			for (let index = 1; index <= bulletNumber; index++) {
				if (index === 3) {
					$(bulletContainer).prepend("<span class='slider__bullet slider__bullet--active'></span>");
				} else {
					$(bulletContainer).prepend("<span class='slider__bullet'></span>");
				}
			}
		};

		start() {
			this.bulletGenerate();
			this.slide();
		}
	};

	// Time - slider wrapper - slider bullet wrapper - slider bullet
	let headerSlider = new slider(4000, ".slider__item", ".slider__nav", ".slider__bullet");

	// Start when page is load
	window.onload = headerSlider.start();
});