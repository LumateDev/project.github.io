<template>
	<header class="mob-nav">
		<div class="container header">
			<div class="header-logo">
				<img src="../assets/img/drupal-coder.svg" />
			</div>
			<div class="header-navigation">
				<nav>
					<ul class="header-nav-menu d-flex justify-content-between">
						<li class="header-nav-menu-item active">
							<a href="#">Поддержка Drupal</a>
						</li>
						<li class="header-nav-menu-item drop" id="Dropdown1">
							<a
								href="#"
								class="dropdown-toggle"
								role="button"
								data-bs-hover="dropdown"
								aria-expanded="false"
								id="Dropdown1"
								>Администрирование</a
							>
							<ul aria-labelledby="Dropdown1" class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Миграция</a></li>
								<li><a class="dropdown-item" href="#">Бэкапы</a></li>
								<li>
									<a class="dropdown-item" href="#">Аудит Безопасности</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">Оптимизация скорости</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">Переезд на Https</a>
								</li>
							</ul>
						</li>
						<li class="header-nav-menu-item">
							<a href="#">Продвижение</a>
						</li>
						<li class="header-nav-menu-item"><a href="#">Реклама</a></li>
						<li class="header-nav-menu-item drop" id="Dropdown2">
							<a
								href="#"
								class="dropdown-toggle"
								role="button"
								id="Dropdown2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								>О нас</a
							>
							<ul aria-labelledby="Dropdown2" class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Наша команда</a></li>
								<li><a class="dropdown-item" href="#">Отдых</a></li>
								<li>
									<a class="dropdown-item" href="#">Достижения</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">История</a>
								</li>
							</ul>
						</li>
						<li class="header-nav-menu-item"><a href="#">Проекты</a></li>
						<li class="header-nav-menu-item"><a href="#">Контакты</a></li>
					</ul>
				</nav>
			</div>
			<div class="btn-group dropup">
				<a
					role="button"
					class="nav-btn dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<img src="../assets/img/burger.svg" alt="" />
				</a>
				<ul class="dropdown-menu animate">
					<li><a class="dropdown-item active" href="#">Поддержка Drupal</a></li>
					<li>
						<a
							href="#"
							class="dropdown-item dropdown-toggle"
							role="button"
							id="Dropdown4"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							>Администрирование
							<span> <img src="../assets/img/caret.svg" alt="" /></span
						></a>
						<ul aria-labelledby="Dropdown4" class="dropdown-menu show">
							<li><a class="dropdown-item" href="#">Миграция</a></li>
							<li><a class="dropdown-item" href="#">Бэкапы</a></li>
							<li>
								<a class="dropdown-item" href="#">Аудит Безопасности</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Оптимизация скорости</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">Переезд на Https</a>
							</li>
						</ul>
					</li>
					<li><a class="dropdown-item" href="#">Продвижение</a></li>
					<li><a class="dropdown-item" href="#">Реклама</a></li>
					<li>
						<a
							href="#"
							class="dropdown-item dropdown-toggle"
							role="button"
							id="Dropdown3"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							>О нас <span><img src="../assets/img/caret.svg" alt="" /></span
						></a>
						<ul aria-labelledby="Dropdown3" class="dropdown-menu show">
							<li><a class="dropdown-item" href="#">Наша команда</a></li>
							<li><a class="dropdown-item" href="#">Отдых</a></li>
							<li>
								<a class="dropdown-item" href="#">Достижения</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">История</a>
							</li>
						</ul>
					</li>
					<li><a class="dropdown-item" href="#">Проекты</a></li>
					<li><a class="dropdown-item" href="#">Контакты</a></li>
				</ul>
			</div>
		</div>
	</header>
	<div class="main-info">
		<div class="main-info-video">
			<video autoplay="autoplay" muted preload="auto" loop playsinline>
				<source src="../assets/video.mp4" type="video/mp4" />
			</video>
		</div>
		<div class="container d-flex justify-content-between">
			<div class="row">
				<div class="col-md-6">
					<h1 class="main-info-title">Поддержка <br />сайтов на Drupal</h1>
					<div class="main-info-desc">
						Сопровождение и поддержка сайтов<br />
						на CMS Drupal любых версий и запущенности
					</div>
					<div class="main-info-btn">
						<a href="#tariffs" class="main-btn"> ТАРИФЫ </a>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row main-list">
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">
									#1
									<img src="../assets/img/cup.png" />
								</div>
								<div class="main-list-item-desc">
									Drupal-разработчик в России по версии Рейтинга Рунета
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">3+</div>
								<div class="main-list-item-desc">
									средний опыт специалистов более 3 лет
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">14</div>
								<div class="main-list-item-desc">лет опыта в сфере Drupal</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">50+</div>
								<div class="main-list-item-desc">
									модулей и тем в формате DrupalGive
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">90 000+</div>
								<div class="main-list-item-desc">
									часов поддержки сайтов на Drupal
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 col-6 main-list-item">
							<div class="main-list-item-border">
								<div class="main-list-item-title">300+</div>
								<div class="main-list-item-desc">Проектов на поддержке</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
.container {
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
}
.container.header {
	height: 50px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}
/* Header */
header {
	width: 100%;
	background: black;
	position: fixed;
	bottom: -3px;
	z-index: 100;
}
.header-navigation {
	display: none;
}
.nav-btn {
	display: block;
	top: 0px;
	position: relative;
	z-index: 3;
}
.nav-btn img {
	width: 27px;
	filter: invert(0.5);
}
.header-logo img {
	width: 137px;
	height: 19px;
	float: left;
}
nav {
	float: left;
	margin-left: 100px;
}
.header-nav {
	padding-top: 2px;
}
.header-nav-menu {
	display: none;
	flex-wrap: wrap;
	list-style: none;
	font-weight: 500;
	font-size: 12px;
	color: black;
	text-transform: uppercase;
}
.header-nav-menu-item {
	color: #fff;
	cursor: pointer;
	z-index: 149;
	opacity: 0.8;
	margin-right: 30px;
	border-bottom: 3px solid transparent;
	transition: border-bottom 0.3s ease-in-out;
}
.header-nav-menu-item a {
	text-decoration: none;
	color: inherit;
}
.header-nav-menu-item:hover {
	border-bottom: 3px solid #f14d34;
	opacity: 1;
}
.header-nav-menu-item.active {
	opacity: 0.8;
	color: #fff;
	border-bottom: 3px solid #f14d34;
}
.header-navigation .dropdown-menu {
	margin-left: -2px;
	margin-top: -2px;
	color: #fff;
	font-size: 12px;
	font-weight: 500;
	text-transform: uppercase;
	transition: all 0.3s ease;
	opacity: 1;
	background-color: #f14d34;
	border-radius: 0;
}
.btn-group .dropdown-menu {
	position: relative;
	padding: 0rem;
	top: 0;
	bottom: -10px;
	border: 0;
}
.btn-group .dropdown-item.active {
	color: #f14e3b;
	background-color: black;
}
.btn-group .dropdown-item:hover {
	color: #f14e3b;
	background-color: black;
}
.header-navigation .dropdown-item:hover {
	background: #d13018;
	color: #fff;
}
.btn-group.dropup {
	position: static;
}
.invisible {
	opacity: 0;
}
.animate {
	animation-duration: 0.3s;
	-webkit-animation-duration: 0.3s;
	animation-fill-mode: both;
	-webkit-animation-fill-mode: both;
}

.btn-group .dropdown-menu.show {
	width: 100%;
	bottom: 40px !important;
}
.btn-group.dropup .dropdown-toggle::after {
	display: none;
}
.btn-group .dropdown-menu .dropdown-menu .dropdown-item {
	padding-left: 40px;
}
.btn-group .dropdown-item {
	font-size: 12px;
	background: black;
	border: 0;
	outline: 0;
	border-bottom: 1px solid #312a2a;
	text-transform: uppercase;
	color: white;
	transition: color 0.3s ease;
}
.btn-group .dropdown-item span img {
	width: 9px;
	filter: invert(0.85);
}
/* Main Info */

.main-info {
	position: relative;
	padding: 40px 0 60px;
	overflow: hidden;
}
.main-info .container {
	z-index: 10;
	position: relative;
	color: white;
}
.main-info-video video {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: 2;
	filter: blur(3px);
}
.main-info-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	text-align: center;
}
.main-info-desc {
	font-size: 14px;
	font-weight: 500;
	opacity: 0.8;
	text-align: center;
}
.main-info-btn {
	text-align: center;
	margin-top: 55px;
	margin-bottom: 55px;
}
.main-info img {
	vertical-align: baseline;
	margin-left: -10px;
}
.main-info:before {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 4;
	background: url('../assets/img/druplicon.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: top center;
	background-color: rgba(0, 0, 0, 0.8);
}
.main-btn {
	display: inline-block;
	border: 2px solid #f14d34;
	box-sizing: border-box;
	border-radius: 5px;
	padding: 19px 0;
	width: 220px;
	text-align: center;
	color: #fff;
	text-decoration: none;
	font-size: 12px;
	transition: all 0.5s ease;
}
.main-btn:hover {
	background: #f14d34;
	color: black;
	font-weight: bold;
}

/* Features List */

.main-list-item-border {
	border-left: 3px solid #f14d34;
	padding-left: 15px;
	padding-top: 5px;
	padding-bottom: 10px;
	height: 100%;
}
.main-list-item-desc {
	margin-top: 4px;
	font-weight: 500;
	font-size: 12px;
	line-height: 14.63px;
	opacity: 0.7;
}
.main-list-item-title {
	display: flex;
	align-items: baseline;
	position: relative;
	font-weight: bold;
	font-size: 24px;
	line-height: 1;
	margin-bottom: 5px;
}
.main-list-item:first-child .main-list-item-title {
	font-size: 48px;
	margin-top: -42px;
}
.main-list {
	display: flex;
	flex-wrap: wrap;
	margin-top: 40px;
}
.main-list-item {
	margin-bottom: 32px;
}

@media (min-width: 767px) {
	.container {
		max-width: 1170px;
		padding: 0;
	}
	.container.header {
		display: block;
		justify-content: unset;
		align-items: unset;
		height: unset;
	}
	header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: unset;
		padding-top: 30px;
		padding-bottom: 30px;
		background: transparent;
		z-index: 15;
	}
	.btn-group {
		display: none;
	}
	.header-navigation {
		display: block;
	}
	.header-nav-menu {
		display: flex;
	}
	.header-logo {
		display: block;
	}
	.main-info {
		padding: 130px 0 60px;
	}
	.main-info-title {
		font-size: 52px;
		text-align: unset;
		line-height: 60px;
	}
	.main-info-desc {
		font-size: 18px;
		text-align: unset;
	}
	.main-info-btn {
		text-align: unset;
		margin-bottom: 0;
	}
	.main-info:before {
		background-size: unset;
		background-position: unset;
	}
	.main-list-item {
		margin-bottom: 96px;
	}
	.main-list-item-title {
		display: block;
		align-items: unset;
	}
	.main-utilities {
		padding-top: 100px;
		padding-bottom: 100px;
	}
}
</style>
