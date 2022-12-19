<template>
	<header class="navbar-region">
		<div class="header-background"></div>
		<video autoplay muted loop class="video-back">
			<source src="../assets/video.mp4" type="video/mp4" />
		</video>
		<div class="navbar navbar-expand-lg navbar-dark pt-4" id="navbar">
			<div class="container-fluid px-2 px-lg-0">
				<div class="ms-0 ms-lg-4">
					<a class="navbar-brand" href="#">
						<img
							class="img-fluid"
							src="../assets/img/drupal-coder.svg"
							alt="Project"
							width="200"
							height="35"
						/>
					</a>
				</div>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggler"
					aria-controls="navbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse justify-content-center"
					id="navbarToggler"
				>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a
								class="nav-link active text-light navbar-effect"
								aria-current="page"
								href="#"
								>Поддержка Drupal
							</a>
						</li>
						<li
							class="nav-item dropdown"
							onmouseover="showDropdown('#navbarDropdown-1','#list-1')"
							onmouseout="hideDropdown('#navbarDropdown-1','#list-1')"
						>
							<a
								class="nav-link dropdown-toggle text-light"
								href="#"
								id="navbarDropdown-1"
								role="button"
								data-toggle="dropdown"
								aria-expanded="false"
							>
								Администрирование
							</a>
							<ul
								id="list-1"
								class="dropdown-menu dropdown-menu-dark"
								aria-labelledby="navbarDropdown-1"
							>
								<li>
									<a
										class="dropdown-item text-light"
										href="https://github.com/SergeiB2002/Project"
										>Миграция</a
									>
								</li>
								<li><a class="dropdown-item text-light" href="#">Бэкапы</a></li>
								<li>
									<a class="dropdown-item text-light" href="#"
										>Аудит безопасности</a
									>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-light" href="#">Продвижение</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-light" href="#">Реклама</a>
						</li>
						<li
							class="nav-item dropdown"
							onmouseover="showDropdown('#navbarDropdown-2','#list-2')"
							onmouseout="hideDropdown('#navbarDropdown-2','#list-2')"
						>
							<a
								class="nav-link dropdown-toggle text-light"
								href="#"
								id="navbarDropdown-2"
								role="button"
								data-toggle="dropdown"
								aria-expanded="false"
							>
								О нас
							</a>
							<ul
								id="list-2"
								class="dropdown-menu dropdown-menu-dark"
								aria-labelledby="navbarDropdown-2"
							>
								<li>
									<a class="dropdown-item text-light" href="#team">Команда</a>
								</li>
								<li>
									<a class="dropdown-item text-light" href="#blogger"
										>DRUPALGIVE</a
									>
								</li>
								<li>
									<a class="dropdown-item text-light" href="#blogger">Блог</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-light" href="#">Проекты</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-light" href="#">Контакты</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="header-data container-fluid">
			<div class="row d-flex" id="header-data">
				<div class="col-10 col-lg-5 px-3 text-start ms-4 me-auto py-5">
					<h1 class="text-about-main">
						Поддержка
						<br />
						сайтов на Drupal
					</h1>
					<div class="text-about-service">
						Сопровождение и поддержка сайтов
						<br />
						на CMS Drupal любых версий и сложности
					</div>
					<a
						role="button"
						href="#tariff"
						class="btn btn-outline-light btn-tariff mt-5"
					>
						Тарифы
					</a>
				</div>
				<div class="col-11 col-lg-6 me-sm-3 mx-auto mt-3 pb-5 pb-lg-0 py-5">
					<div class="row">
						<div class="col-5 col-sm-4 achievement-tab ms-auto me-auto">
							<div class="row">
								<div class="col-3 achievement-tab-title-main">#1</div>
								<div class="col ms-2">
									<img src="../assets/img/cup.png" alt="cup" />
								</div>
								<p class="extra-text extra-text-zero">
									Drupal-разработчик
									<br />
									в России по версии Рейтинга Рунета
								</p>
							</div>
						</div>
						<div class="col-5 col-sm-4 achievement-tab ms-auto me-auto">
							<div class="a-t-wrapper">
								<div class="achievement-tab-title">3+</div>
								<p class="extra-text">
									средний опыт
									<br />
									специалистов более
									<br />
									более 3 лет
								</p>
							</div>
						</div>
						<div
							class="col-5 col-sm-4 achievement-tab mt-sm-0 mt-4 ms-auto me-auto"
						>
							<div class="achievement-tab-title">14</div>
							<p class="extra-text">лет опыта в сфере Drupal</p>
						</div>
						<div class="col-5 col-sm-4 achievement-tab mt-4 ms-auto me-auto">
							<div class="achievement-tab-title">50+</div>
							<p class="extra-text">
								модулей и тем
								<br />
								в формате DRUPALGIVE
							</p>
						</div>
						<div class="col-5 col-sm-4 achievement-tab mt-4 ms-auto me-auto">
							<div class="achievement-tab-title">90 000+</div>
							<p class="extra-text">
								часов поддержки
								<br />
								сайтов на Drupal
							</p>
						</div>
						<div class="col-5 col-sm-4 achievement-tab mt-4 ms-auto me-auto">
							<div class="achievement-tab-title">300+</div>
							<p class="extra-text">
								Проектов
								<br />
								на поддержке
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>

<style scoped>
.video-back {
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -1;
	opacity: 0.15;
	filter: blur(1px);
	transform: scale(2.04);
}

.dropdown-menu {
	background-color: #292b2c;
}

.btn-tariff {
	color: #fff;
	border-color: #f14d34;
	width: 220px;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 12px;
	transition: background 300ms;
	padding: 20px 22px;
}
.btn-tariff:hover {
	color: #fff;
	background: #f14d34;
	border-color: #f14d34;
}

.header-background {
	position: absolute;
	z-index: -2;
	background: #040613;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

.achievement-tab {
	border-left: 3px solid #f14d34;
}

.extra-text {
	margin-top: 30px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.25;
	color: rgba(255, 255, 255, 0.7);
}

.achievement-tab-title-main {
	font-size: 48px;
}

.achievement-tab-title {
	font-size: 24px;
	color: #fff;
	font-weight: bold;
	line-height: 1;
	margin-top: 12px;
	position: relative;
}

.text-about-service {
	font-size: 14px;
}

.text-about-main {
	font-size: 52px;
	line-height: 60px;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 20px;
}

.nav-link {
	font-size: 12px;
	font-weight: 500;
	text-transform: uppercase;
}

.extra-text-zero {
	margin-top: 0;
}

.navbar-brand {
	margin-right: 0;
}

.nav-link {
	border-bottom: 3px solid transparent;
}

.navbar-effect {
	border-bottom: 3px solid #f14d34;
}

.nav-link:hover {
	border-bottom: 3px solid #f14d34;
	transition: border-color 200ms;
}

.navbar-region {
	width: 100%;
	height: auto;
	position: relative;
	overflow: hidden;
}

.header-data {
	z-index: 10;
	color: white;
	position: center;
}

@media screen and (min-width: 992px) {
	.dropdown-menu {
		background-color: #f14d34;
	}
}
</style>
