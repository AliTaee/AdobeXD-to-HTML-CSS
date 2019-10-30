import $ from 'jquery';

$(document).ready(function () {

	class slider {
		constructor(time, sliderContainer, bulletContainer, bullet) {
			this.time = time;
			this.timer = null;
			this.sliderContainer = sliderContainer;
			this.bulletContainer = bulletContainer;
			this.bullet = bullet;
			this.index = 1;
		};

		slide() {

			let sliderItems = $(this.sliderContainer);
			let bullet = $(this.bullet);
			let index = this.index;

			this.timer = setInterval((function sliderFunc() {
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
				if (index === 1) {
					$(bulletContainer).append(`<span sliderIndex='${index}' class='slider__bullet slider__bullet--active'></span>`);
				} else {
					$(bulletContainer).append(`<span sliderIndex='${index}' class='slider__bullet'></span>`);
				}
			}
		};

		nav() {

			let sliderItems = $(this.sliderContainer);
			let bullet = $(this.bullet);

			$(bullet).on("click", (e) => {
				clearInterval(this.timer);

				// Remove Active class
				for (let index = 0; index < bullet.length; index++) {
					$(bullet[index]).removeClass("slider__bullet--active");
					$(sliderItems[index]).removeClass("slider__item--active");
				}

				// Set active class to current user click bullet
				$(e.target).addClass("slider__bullet--active");

				// Active slide
				$(sliderItems[e.target.attributes.sliderIndex.value - 1]).addClass("slider__item--active");
			});
		}

		start() {
			this.bulletGenerate();
			this.slide();
			this.nav();
		}
	};

	// Time - slider wrapper - slider bullet wrapper - slider bullet
	let headerSlider = new slider(4000, ".slider__item", ".slider__nav", ".slider__bullet");

	// Start when page is load
	window.onload = headerSlider.start();
});