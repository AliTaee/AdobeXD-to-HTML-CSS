<?php
	include '../config.php';

	$page_title = '';
	$page_desc = '';
	$page_url = '';
	$page_image = '';
?>
<!DOCTYPE html>
<html lang="<?=$config->lang?>" class="<?=$config->dir?>">

<head>
	<?php
			include 'common/favicon.php';
			include 'common/meta.php';
			include 'common/head.php';
		 ?>
</head>

<body>
	<div class="intro">
		<header class="menu">
			<div class="menu__wrapper">

				<div class="menu__contact">
					<p class="menu__tel">تلفن سفارشات</p>
					<a href="tel:+9821750440" class="menu__tel-number"><span class="menu__area-number">۰۲۱</span>۷۵۰
						۴۴۰</a>
				</div>

				<nav class="menu__nav">
					<ul class="menu__list">
						<li class="menu__item"><a href="#" class="menu__link">خانه</a></li>
						<li class="menu__item">
							<p class="menu__sub">محصولات</p>
						</li>
						<li class="menu__item"><a href="#" class="menu__link">درباره </a></li>
						<li class="menu__item"><a href="#" class="menu__link">تماس</a></li>
					</ul>
				</nav>

				<a href="#" class="menu__logo">
					<img src="../src/images/site-logo.png" alt="site logo" class="menu__img-logo">
					<div class="menu__text-wrapper">
						<h1 class="menu__site-title">
							رستوران ایکس
						</h1>
						<p class="menu__site-desc">طعم‌های ناشناخته</p>
					</div>
				</a>

			</div>
		</header>
		<section class="slider">
			<div class="slider__wrapper">
				<div class="slider__item" style="back">
					<img src="" alt="slider image" class="slider__img">
					<h2 class="slider__title"></h2>
					<p class="slider__desc"></p>
				</div>
				<div class="slider__item">
					<img src="" alt="slider image" class="slider__img">
					<h2 class="slider__title"></h2>
					<p class="slider__desc"></p>
				</div>
				<div class="slider__item">
					<img src="" alt="slider image" class="slider__img">
					<h2 class="slider__title"></h2>
					<p class="slider__desc"></p>
				</div>
				<div class="slider__nav">
					<span class="slider__bullet"></span>
					<span class="slider__bullet"></span>
					<span class="slider__bullet"></span>
				</div>
			</div>
		</section>
	</div>

	<?php include 'common/js.php'; ?>
</body>

</html>