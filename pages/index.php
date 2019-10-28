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

				<a href="#" class="menu__logo">
					<img src="../src/images/site-logo.png" alt="site logo" class="menu__img-logo">
					<div class="menu__text-wrapper">
						<h1 class="menu__site-title">
							رستوران ایکس
						</h1>
						<p class="menu__site-desc">طعم‌های ناشناخته</p>
					</div>
				</a>

				<nav class="menu__nav">
					<ul class="menu__list">
						<li class="menu__item"><a href="#" class="menu__link">خانه</a></li>
						<li class="menu__item">
							<p class="menu__sub menu__link">محصولات</p>
						</li>
						<li class="menu__item"><a href="#" class="menu__link">درباره </a></li>
						<li class="menu__item"><a href="#" class="menu__link">تماس</a></li>
					</ul>
				</nav>

				<div class="menu__contact">
					<p class="menu__tel">تلفن سفارشات</p>
					<a href="tel:+9821750440" class="menu__tel-number"><span class="menu__area-number">۰۲۱</span>۷۵۰
						۴۴۰</a>
				</div>

			</div>
		</header>
		<section class="slider">
			<div class="slider__wrapper">
				<div class="slider__item" style="background-image: url('../src/images/img1.png')">
					<h2 class="slider__title">طعم‌های ناشناخته را با ما تجربه کنید</h2>
					<p class="slider__desc">۱۵ سال همراه‌تان بوده‌ایم</p>
				</div>
				<div class="slider__item" style="background-image: url('../src/images/img2.jpg')">
					<h2 class="slider__title">طعم‌های ناشناخته را با ما تجربه کنید</h2>
					<p class="slider__desc">۱۵ سال همراه‌تان بوده‌ایم</p>
				</div>
				<div class="slider__item" style="background-image: url('../src/images/img1.png')">
					<h2 class="slider__title">طعم‌های ناشناخته را با ما تجربه کنید</h2>
					<p class="slider__desc">۱۵ سال همراه‌تان بوده‌ایم</p>
				</div>
				<div class="slider__nav">
				</div>
			</div>
		</section>
	</div>

	<?php include 'common/js.php'; ?>
</body>

</html>