<template>
	<router-view></router-view>
	<header class="mob-nav">
		<div class="container header">
			<div class="header-logo">
				<img src="@/assets/img/drupal-coder.svg" />
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
					<img src="@/assets/img/burger.svg" alt="" />
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
							<span> <img src="@/assets/img/caret.svg" alt="" /></span
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
							>О нас <span><img src="@/assets/img/caret.svg" alt="" /></span
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
				<source src="@/assets/video.mp4" type="video/mp4" />
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
									<img src="@/assets/img/cup.png" />
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
	<div class="main-utilities">
		<div class="container">
			<div class="col-md-6">
				<div class="row">
					<h2 class="util-label">
						13 лет совершенствуем<br />
						компетенции в Друпал<br />
						поддержке!
					</h2>
					<p class="util-low-label">
						Разрабатываем и оптимизируем модули, расширяем функциональность
						сайтов, обновляем дизайн
					</p>
				</div>
			</div>
			<div class="col-md-12 util-list">
				<div class="row d-flex">
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-1.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Добавление<br />
							информации на сайт,<br />
							создание новых<br />
							разделов
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-2.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Разработка и<br />
							оптимизация<br />
							модулей сайта
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-3.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Интеграция с CRM,<br />
							1C, платежными<br />
							системами, любыми<br />
							веб-сервисами
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-4.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Любые доработки<br />
							функционала<br />
							и дизайна
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-5.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Аудит и мониторинг<br />
							безопасности Drupal<br />
							сайтов
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-6.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Миграция, импорт<br />
							контента и апгрейд<br />
							Drupal
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-7.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Оптимизация<br />
							и ускорение<br />
							Drupal-сайтов
						</div>
					</div>
					<div class="col-sm-3 col-6 util-body">
						<div class="util-bg">
							<img src="@/assets/img/competency-8.svg" class="img-fluid" />
						</div>
						<div class="util-title">
							Веб-маркетинг,<br />
							консультации<br />
							и работы по SEO
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-support">
		<div class="container">
			<div class="col-md-12">
				<div class="row text-center">
					<h2 class="support-label">
						Поддержка<br />
						от Drupal-coder
					</h2>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row main-support">
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">01.</div>
								<div class="support-title">Постановка задачи по Email</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Удобная и привычная <br />модель постановки задач,<br />
									при которой задачи <br />фиксируются и никогда<br />
									не теряются.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support1.svg"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">02.</div>
								<div class="support-title">
									Система Helpdesk – отчетность, прозрачность
								</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Возможность посмотреть все заявки в работе и отработанные часы
									в личном кабинете через браузер.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support2.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">03.</div>
								<div class="support-title">
									Расширенная техническая поддержка
								</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Возможность организации расширенной техподдержки с 6:00<br />
									до 22:00 без выходных.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support3.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">04.</div>
								<div class="support-title">Персональный менеджер проекта</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Ваш менеджер проекта всегда в курсе текущего состояния
									проекта<br />
									и в любой момент готов ответить на любые вопросы.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support4.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">05.</div>
								<div class="support-title">Удобные способы оплаты</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Безналичный расчет по договору или<br />
									электронные деньги:<br />
									WebMoney, Яндекс.Деньги, Paypal.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support5.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">06.</div>
								<div class="support-title">Работаем с SLA и NDA</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Работа в рамках соглашений<br />
									о конфиденциальности <br />и об уровне качества<br />
									работ.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support6.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">07.</div>
								<div class="support-title">Штатные специалисты</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Надежные штатные специалисты, никаких фрилансеров.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support7.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-12 support-wrapper">
						<div class="support-body">
							<div class="support-head">
								<div class="support-num">08.</div>
								<div class="support-title">Удобные каналы связи</div>
							</div>
							<div class="support-info">
								<div class="support-desc">
									Консультации по телефону, скайпу,<br />
									в месенджерах.
								</div>
								<div class="support-bg">
									<img
										src="@/assets/img/support8.svg"
										alt=""
										class="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-advantages">
		<div class="container">
			<div class="col-md-12 advantages">
				<div class="row">
					<div class="col-md-6 offset-md-6 col-12">
						<div class="row">
							<h2 class="advantages-label">
								Экспертиза в Drupal,<br />
								опыт 14 лет!
							</h2>
						</div>
						<div class="row">
							<div class="col-sm-6 col-12 commn">
								<div class="adv-body">
									Только системный подход – контроль версий, резервирование и
									тестирование!
								</div>
							</div>
							<div class="col-sm-6 col-12 commn">
								<div class="adv-body">
									Только Drupal сайты, не берем на поддержку сайты на других
									CMS!
								</div>
							</div>
							<div class="col-sm-6 col-12 commn">
								<div class="adv-body">
									Участвуем в разработке ядра Drupal и модулей на Drupal.org,
									разрабатываем <a href="#">свои модули Drupal</a>
								</div>
							</div>
							<div class="col-sm-6 col-12 commn">
								<div class="adv-body">
									Поддерживаем сайты на Drupal 5, 6, 7, 8 и 9
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="adv-bg">
			<img src="@/assets/img/laptop.png" alt="" class="img-fluid" />
		</div>
	</div>
	<div class="main-tarrifs">
		<div class="container" id="tariffs">
			<div class="col-md-12">
				<div class="row text-center">
					<h2 class="tariffs-label">Тарифы</h2>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row tariff-list">
					<div class="col-md-4 col-12 col-12 tariff-item">
						<div class="tariff-header">
							<div class="tariff-name">
								Стартовый
								<hr />
							</div>
						</div>
						<div class="tariff-desc">
							<p>Консультации и работы по SEO</p>
							<p>Услуги дизайнера</p>
							<p>
								Неиспользованные<br />
								оплаченные часы переносятся<br />
								на следующий месяц
							</p>
							<p>
								Предоплата от 6000 рублей в<br />
								месяц
							</p>
						</div>
						<div class="tariff-btn text-align-center">
							<router-link to="/form">Свяжитесь с нами!</router-link>
						</div>
					</div>
					<div class="col-md-4 col-12 col-12 tariff-item active">
						<div class="tariff-header">
							<div class="tariff-name">
								Бизнес
								<hr />
							</div>
						</div>
						<div class="tariff-desc">
							<p>Консультации и работы по SEO</p>
							<p>Услуги дизайнера</p>
							<p>
								Высокое время редакции - до 2 <br />
								рабочих дней
							</p>
							<p>
								Неиспользованные<br />
								оплаченные часы не<br />
								переносятся
							</p>
							<p>
								Предоплата от 30000 рублей в<br />
								месяц
							</p>
						</div>
						<div class="tariff-btn text-align-center">
							<router-link to="/form">Свяжитесь с нами!</router-link>
						</div>
					</div>
					<div class="col-md-4 col-12 col-12 tariff-item">
						<div class="tariff-header">
							<div class="tariff-name">
								VIP
								<hr />
							</div>
						</div>
						<div class="tariff-desc">
							<p>Консультации и работы по SEO</p>
							<p>Услуги дизайнера</p>
							<p>
								Максимальное время реакции<br />
								- в день обращения
							</p>
							<p>
								Неиспользованные<br />
								оплаченные часы не<br />
								переносятся
							</p>
							<p>
								Предоплата от 270 000 рублей в<br />
								месяц
							</p>
						</div>
						<div class="tariff-btn text-align-center">
							<router-link to="/form">Свяжитесь с нами!</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row text-center tariff-main-desc">
					<p>
						Вам не подходят наши тарифы? Оставьте заявку и мы <br />
						предложим вам индивидуальные условия!
					</p>
				</div>
				<div class="row text-center tariff-main-btn">
					<div class="tariff-a">
						<a href="#">Получить индивидуальный тариф</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-addition">
		<div class="container">
			<div class="col-md-12">
				<div class="row">
					<h2 class="addition-label">
						Наши профессиональные разработчики <br />
						выполняют быстро любые задачи
					</h2>
				</div>
			</div>
			<div class="col-md-12 additions-list">
				<div class="row justify-content-around">
					<div class="col-md-3 col-sm-4 col-12 addition-item">
						<div class="addition-bg">
							<img src="@/assets/img/competency-20.svg" class="img-fluid" />
						</div>
						<div class="addition-head">
							<div class="addition-num">от 1ч</div>
							<div class="addition-desc">
								Настройка события GA <br />в интернет-магазине
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-4 col-12 addition-item">
						<div class="addition-bg">
							<img src="@/assets/img/competency-21.svg" class="img-fluid" />
						</div>
						<div class="addition-head">
							<div class="addition-num">от 20ч</div>
							<div class="addition-desc">
								Разработка мобильной <br />
								версии сайта
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-4 col-12 addition-item">
						<div class="addition-bg">
							<img src="@/assets/img/competency-22.svg" class="img-fluid" />
						</div>
						<div class="addition-head">
							<div class="addition-num">от 8ч</div>
							<div class="addition-desc">Интеграция <br />модуля оплаты</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-team">
		<div class="container">
			<div class="col-md-12">
				<div class="row text-center">
					<h2 class="team-label">Команда</h2>
				</div>
				<div class="row team-list">
					<div class="col-md-4 col-sm-6 col-6 team-item">
						<div class="team-img">
							<img src="@/assets/img/IMG_2472_0.jpg" class="img-fluid" />
						</div>
						<div class="team-name">Сергей Синица</div>
						<div class="team-desc">
							Руководитель отдела веб-<br />разработки, канд. техн. наук,
							<br />заместитель директора
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-6 team-item">
						<div class="team-img">
							<img src="@/assets/img/IMG_2539_0.jpg" class="img-fluid" />
						</div>
						<div class="team-name">Роман Агабеков</div>
						<div class="team-desc">
							Руководитель отдела DevOPS,<br />
							директор
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-6 team-item">
						<div class="team-img">
							<img src="@/assets/img/IMG_2474_1.jpg" class="img-fluid" />
						</div>
						<div class="team-name">Алексей Синица</div>
						<div class="team-desc">
							Руководитель отдела<br />
							поддержки сайтов
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-6 team-item">
						<div class="team-img">
							<img src="@/assets/img/IMG_2522_0.jpg" class="img-fluid" />
						</div>
						<div class="team-name">Дарья Бочкарёва</div>
						<div class="team-desc">
							Руководитель отдела<br />
							продвижения, контекстной<br />
							рекламы и контент-поддержки<br />
							сайтов
						</div>
					</div>
					<div class="col-md-4 col-sm-6 col-6 team-item">
						<div class="team-img">
							<img src="@/assets/img/IMG_9971_16.jpg" class="img-fluid" />
						</div>
						<div class="team-name">Ирина Торкунова</div>
						<div class="team-desc">
							Менеджер по работе с<br />
							клиентами
						</div>
					</div>
				</div>
				<div class="row text-center">
					<div class="team-btn">
						<a href="#">Вся команда</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-news">
		<div class="container">
			<div class="col-md-12">
				<div class="row text-center">
					<h2 class="news-label">Последние кейсы</h2>
				</div>
				<div class="row news-list">
					<div class="col-md-4 col-12 news-item mini">
						<div class="news-mini-header">
							<img src="@/assets/img/image1.png" class="img-fluid" />
						</div>
						<div class="news-mini-content">
							<div class="news-mini-title">
								<a href="#">
									Настройка кэширования<br />
									данных. Апгрейд севера. <br />
									Ускорение работы сайта в 30 раз!
								</a>
							</div>
							<div class="news-mini-date"><p>04.05.2020</p></div>
							<div class="news-mini-desc">
								<p>
									Влияние скорости загрузки страниц <br />сайта на отказы и
									конверсии. Кейс <br />ускорения...
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-8 col-12 news-item full">
						<div class="news-full-bg">
							<img src="@/assets/img/image2.png" class="img-fluid" />
						</div>
						<div class="news-full-content">
							<div class="news-full-title">
								<a href="#">
									Использование отчетов<br />
									Ecommerce в Яндекс.Метрике
								</a>
							</div>
							<div class="news-full-date">
								<p>24.01.2020</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-12 news-item full">
						<div class="news-full-bg">
							<img src="@/assets/img/image3.png" class="img-fluid" />
						</div>
						<div class="news-full-content">
							<div class="news-full-title">
								<a href="#">
									Повышение конверсии <br />
									страницы с формой заявки <br />
									с применением AB- <br />
									тестирования
								</a>
							</div>
							<div class="news-full-date">
								<p>22.02.2019</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-12 news-item full">
						<div class="news-full-bg">
							<img src="@/assets/img/image4.png" class="img-fluid" />
						</div>
						<div class="news-full-content">
							<div class="news-full-title">
								<a href="#">
									Drupal 7: ускорение<br />
									времени генерации<br />
									страниц интернет-магазина<br />
									на 32%
								</a>
							</div>
							<div class="news-full-date">
								<p>18.09.2019</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-12 news-item mini">
						<div class="news-mini-header">
							<img src="@/assets/img/image5.png" class="img-fluid" />
						</div>
						<div class="news-mini-content">
							<div class="news-mini-title">
								<a href="#">
									Обмен товарами и заказами <br />
									интернте-магазинов на <br />
									Druapl 7 c 1С:Предприятие, <br />
									МойСклад, Класс365
								</a>
							</div>
							<div class="news-mini-date"><p>22.08.2019</p></div>
							<div class="news-mini-desc">
								<p>Опубликован <a href="#">релиз модуля...</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!----------------------------------------FeedBack------------------------------------------>
	<div class="main-feedback">
    <div class="container">
      <div class="col-md-12">
        <div class="row text-center">
          <h2 class="feedback-label">
            Отзывы
          </h2>
        </div>
      </div>
      <div class="col-md-12">
        <div class="container">
          <div class="feedback-container">
            <div class="carousel-wrapper">
              <Feedback v-bind:reviewsSliderItems="reviewsSliderItems" />
              <div class="carousel-nav">
                <div class="feedback-nav">
                  <span class="feedback-counter"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
	<!----------------------------------------FeedBack------------------------------------------>
	<!---------------------------------------------------------------------------------------- -->
	<div class="main-faq">
		<div class="container">
			<div class="col-md-12">
				<div class="row">
					<h2 class="faq-label text-center">FAQ</h2>
				</div>
			</div>
			<div class="col-md-12">
				<div class="row">
					<div class="accordion" id="accordionExample">
						<div class="accordion-item opened">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									<span class="accordion-num">1.</span>Кто непосредственно
									занимается поддержкой?
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									<span class="accordion-num">2.</span>Как организована работа
									поддержки?
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingThree">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									<span class="accordion-num">3.</span>Что происходит, когда
									отработаны все предоплаченные часы за месяц?
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingFour">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									<span class="accordion-num">4.</span>Что происходит, когда не
									отработаны все предоплаченные часы за месяц?
								</button>
							</h2>
							<div
								id="collapseFour"
								class="accordion-collapse collapse"
								aria-labelledby="headingFour"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingFive">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFive"
								>
									<span class="accordion-num">5.</span>Как происходит оценка и
									согласование планируемого времени на выполнение заявок?
								</button>
							</h2>
							<div
								id="collapseFive"
								class="accordion-collapse collapse"
								aria-labelledby="headingFive"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingSix">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSix"
									aria-expanded="false"
									aria-controls="collapseSix"
								>
									<span class="accordion-num">6.</span>Сколько программистов
									выделяется на проект?
								</button>
							</h2>
							<div
								id="collapseSix"
								class="accordion-collapse collapse"
								aria-labelledby="headingSix"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingSeven">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSeven"
									aria-expanded="false"
									aria-controls="collapseSeven"
								>
									<span class="accordion-num">7.</span>Как подать заявку на
									внесение изменений на сайте?
								</button>
							</h2>
							<div
								id="collapseSeven"
								class="accordion-collapse collapse"
								aria-labelledby="headingSeven"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingEight">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseEight"
									aria-expanded="false"
									aria-controls="collapseEight"
								>
									<span class="accordion-num">8.</span>Как подать заявку на
									добавление пользователя, изменение настроек веб-сервера и
									других задач по администрированию?
								</button>
							</h2>
							<div
								id="collapseEight"
								class="accordion-collapse collapse"
								aria-labelledby="headingEight"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingNine">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseNine"
									aria-expanded="false"
									aria-controls="collapseNine"
								>
									<span class="accordion-num">9.</span>В течение какого времени
									начинается работа по заявке?
								</button>
							</h2>
							<div
								id="collapseNine"
								class="accordion-collapse collapse"
								aria-labelledby="headingNine"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTen">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTen"
									aria-expanded="false"
									aria-controls="collapseTen"
								>
									<span class="accordion-num">10.</span>В какое время работает
									поддержка?
								</button>
							</h2>
							<div
								id="collapseTen"
								class="accordion-collapse collapse"
								aria-labelledby="headingTen"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingEleven">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseEleven"
									aria-expanded="false"
									aria-controls="collapseEleven"
								>
									<span class="accordion-num">11.</span>Подходят ли услуги
									поддержки, если необходимо произвести обновление ядра Drupal
									или модулей?
								</button>
							</h2>
							<div
								id="collapseEleven"
								class="accordion-collapse collapse"
								aria-labelledby="headingEleven"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwelve">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwelve"
									aria-expanded="false"
									aria-controls="collapseTwelve"
								>
									<span class="accordion-num">12.</span>Можно ли пообщаться со
									специалистом голосом или в мессенджере?
								</button>
							</h2>
							<div
								id="collapseTwelve"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwelve"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.
									Краснодар, прошедшие специальное обучение и имеющие опыт
									работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2
									специалиста по SEO, 4 системных администратора.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer>
		<div class="container">
			<div class="col-12">
				<div class="row footer-container">
					<div class="col-md-6 col-12">
						<div class="row">
							<div class="footer-block">
								<div class="footer-header">
									Оставить заявку на <br />
									поддержку сайта
								</div>
								<div class="footer-desc">
									Срочно нужна поддержка сайта? Ваша команда не успевает<br />
									справиться самостоятельно или предыдущий подрядчик не<br />
									справился с работой? Тогда вам точно к нам! Просто оставьте<br />
									заявку и наш менеджер с вами свяжется!
								</div>
								<div class="footer-contacts">
									<div class="footer-tel">
										<a href="#">8 800 222-26-73</a>
									</div>
									<div class="footer-mail">
										<a href="#">info@drupal-coder.ru</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-12">
						<Form />
					</div>
				</div>
			</div>
			<div class="col-12 footer-social">
				<div class="row">
					<div class="col-md-6 col-12">
						<div class="row">
							<div class="social-block">
								<ul class="social-list">
									<li class="social-list-item">
										<a href="#"
											><img src="@/assets/img/facebook.svg" alt=""
										/></a>
									</li>
									<li class="social-list-item">
										<a href="#"><img src="@/assets/img/vk.svg" alt="" /> </a>
									</li>
									<li class="social-list-item">
										<a href="#"
											><img src="@/assets/img/telegram.svg" alt=""
										/></a>
									</li>
									<li class="social-list-item">
										<a href="#"
											><img src="@/assets/img/youtube.svg" alt=""
										/></a>
									</li>
								</ul>
								<div class="social-desc">
									<p>
										Проект ООО «Инитлаб», Краснодар, Россия.<br />
										Drupal является зарегистрированной торговой маркой Dries
										Buytaert.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import Form from './Form.vue'
import Feedback from "./Feedback.vue";
var globalID
export default {
	components: { Feedback,Form },

	watch: {
		$route(to, from) {
			if (to.path == '/form') {
				globalID = requestAnimationFrame(this.repeatOften)
			} else {
				cancelAnimationFrame(globalID)
			}
		},
	},
}
</script>

<style>
.route-enter-from {
	opacity: 0;
}
.route-enter-active {
	transition: all 0.3s ease-out;
}
.route-leave-to {
	opacity: 0;
}
.route-leave-active {
	transition: all 0.3s ease-in;
}
</style>
