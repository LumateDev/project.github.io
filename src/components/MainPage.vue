<template>
	<!------------------------------------------------------------------------------------------------------------>
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
export default {
	name: 'MainPage',
}
</script>

<style>
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
@keyframes slideIn {
	0% {
		transform: translateY(1rem);
		opacity: 0;
	}
	100% {
		transform: translateY(0rem);
		opacity: 1;
	}
	0% {
		transform: translateY(1rem);
		opacity: 0;
	}
}
@keyframes slideOut {
	0% {
		transform: translateY(0rem);
		opacity: 1;
	}
	100% {
		transform: translateY(1rem);
		opacity: 0;
	}
	0% {
		transform: translateY(0rem);
		opacity: 1;
	}
}
@-webkit-keyframes slideOut {
	0% {
		-webkit-transform: translateY(0rem);
		-webkit-transform: 1;
	}
	100% {
		-webkit-transform: translateY(1rem);
		-webkit-transform: 0;
	}
}
@-webkit-keyframes slideIn {
	0% {
		-webkit-transform: transform;
		-webkit-opacity: 0;
	}

	100% {
		-webkit-transform: translateY(0);
		-webkit-opacity: 1;
	}

	0% {
		-webkit-transform: translateY(1rem);
		-webkit-opacity: 0;
	}
}

.slideIn {
	-webkit-animation-name: slideIn;
	animation-name: slideIn;
}
.slideOut {
	-webkit-animation-name: slideOut;
	animation-name: slideOut;
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
	background: url('./img/druplicon.svg');
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

/* UTILITES */

.main-utilities {
	position: relative;
	z-index: 6;
	background: white;
	color: black;
	padding-top: 50px;
	padding-bottom: 50px;
}

.util-label {
	color: #050c33;
	font-weight: bold;
	font-size: 24px;
	line-height: 1;
	margin-bottom: 18px;
}
.util-low-label {
	display: inline-block;
	color: #050c33;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	opacity: 0.7;
	margin-bottom: 0;
}
.util-list {
	margin-top: 63px;
}
.util-body {
	margin-bottom: 30px;
}
.util-title {
	width: 196px;
	margin-top: 25px;
	font-weight: 500;
	font-size: 14px;
	color: #050c33;
	opacity: 0.7;
	max-width: 100%;
}
.util-title br {
	display: none;
}
.util-bg {
	position: relative;
	text-align: center;
}
.util-bg:before {
	content: '';
	display: block;
	position: absolute;
	width: 114px;
	height: 71px;
	left: -21px;
	bottom: -6px;
	background: url('./img/Vectorlistbg.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}
/* MAIN SUPPORT */
.main-support {
	position: relative;
	background: white;
	padding: 0 12px;
	margin-bottom: -210px;
}
.main-support .container {
	padding-left: 0px;
	padding-right: 0px;
}
.support-label {
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
	margin-bottom: 56px;
}
.support-body {
	position: relative;
	border-radius: 5px;
	min-height: 290px;
	height: 100%;
	margin-left: -12px;
	margin-right: -7px;
	padding: 25px 25px 45px 25px;
	background: #fff;
	filter: drop-shadow(20px 20px 40px rgba(5, 12, 51, 0.05));
	z-index: 10;
}
.support-num {
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	color: #050c33;
	opacity: 0.5;
	margin-bottom: 20px;
}
.support-title {
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	color: #050c33;
	margin-bottom: 12px;
}
.support-wrapper {
	margin-bottom: 5px;
}
.support-desc {
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	color: #050c33;
	opacity: 0.7;
	z-index: 6;
}
.support-bg {
	position: absolute;
	right: 0;
	bottom: 0px;
	z-index: -1;
}

/*  MAIN ADVANTAGES */

.main-advantages {
	position: relative;
	background: linear-gradient(
			261.2deg,
			rgba(255, 255, 255, 0.276) -114.85%,
			rgba(255, 255, 255, 0) 69.04%
		),
		#040613;
	padding: 220px 0 280px;
}
.main-advantages:before {
	content: '';
	background: url('./img/druplicon.svg');
	background-repeat: no-repeat;
	position: absolute;
	display: block;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-position: right bottom;
	background-size: contain;
	z-index: 5;
	opacity: 0.2;
	padding-bottom: 100px;
}
.advantages {
	position: relative;
	z-index: 6;
}
.advantages-label {
	font-weight: bold;
	font-size: 24px;
	color: #ffffff;
}
.adv-list {
	margin-bottom: 30px;
}
.adv-body {
	border-left: 3px solid #f14d34;
	padding-left: 20px;
	padding-top: 5px;
	padding-bottom: 5px;
	min-height: 88px;
	height: 100%;
	width: 280px;
	width: 100%;
	margin-right: 20px;
	font-weight: 500;
	font-size: 16px;
	color: #ffffff;
	opacity: 0.7;
}
.adv-body a {
	color: orangered;
	text-decoration: none;
}
.adv-bg {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 80%;
	max-width: 660px;
	z-index: 5;
	margin-top: 70px;
}
.adv-bg img {
	transform: translateY(17%);
}
.commn {
	padding: calc(var(--bs-gutter-x) * 0.5);
}
/* MAIN TARRIFS */
.main-tarrifs {
	padding-top: 100px;
	position: relative;
	background-color: #fff;
	z-index: 4;
	padding-bottom: 40px;
}
.main-tarrifs:before {
	content: '';
	background: url('./img/Dbg.png');
	display: block;
	position: absolute;
	left: 41%;
	top: 0%;
	bottom: 0%;
	right: 0%;
	background-position: top right;
	background-repeat: no-repeat;
	background-size: cover;
	/* opacity: 0.2; */
}
.tariffs-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #000;
}
.tariff-list {
	margin-top: 20px;
	position: relative;
	justify-content: space-between;
}
.tariff-item {
	background: #ffffff;
	max-width: 280px;
	width: 100%;
	height: auto;
	padding-left: 30px;
	padding-right: 30px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	border-radius: 5px;
	margin: 0 auto;
	margin-bottom: 20px;
}
.tariff-item.active {
	transform: scale(1);
}
.tariff-item.active .tariff-btn {
	background: #f14d34;
	border-radius: 5px;
}
.tariff-item.active a {
	color: #fff;
}
.tariff-name {
	padding-top: 78px;
	font-weight: bold;
	font-size: 22px;
	line-height: 27px;
	color: #f14d34;
}
.tariff-desc {
	font-weight: 500;
	margin-top: 40px;
	font-size: 14px;
	line-height: 20px;
	color: #050c33;
	opacity: 0.7;
	margin-bottom: 50px;
}
.tariff-desc br {
	display: none;
}
.tariff-desc p:before {
	content: '';
	display: block;
	margin-top: 4px;
	margin-right: 7px;
	width: 13px;
	height: 15px;
	position: relative;
	background: url('./img/checked.svg');
	background-repeat: no-repeat;
	background-size: contain;
	padding-right: 16px;
}
.tariff-desc p {
	display: flex;
	margin-bottom: 20px;
}
.tariff-btn {
	width: 100%;
	margin-bottom: 50px;
}
.tariff-btn a {
	display: block;
	padding: 20px 10px;
	border: 2px solid #f14d34;
	border-radius: 5px;
	text-decoration: none;
	color: #f14d34;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	letter-spacing: 0.06em;
	color: #f14d34;
}
hr {
	color: black;
	opacity: 0.2;
	border: 1px solid black;
	background-color: black;
}
.tariff-main-desc {
	position: relative;
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: #050c33;
	opacity: 0.5;
	margin-top: 82px;
}
.tariff-main-desc br {
	display: none;
}
.tariff-main-btn {
	margin-top: 10px;
	position: relative;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	letter-spacing: 0.06em;
	text-decoration-line: underline;
	text-transform: uppercase;
}
.tariff-main-btn a {
	color: #050c33;
}

/* MAIN ADDITION*/

.main-addition {
	position: relative;
	padding-top: 40px;
}
.additions-list {
	margin-top: 45px;
	text-align: center;
}
.addition-item {
	position: relative;
}
.addition-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
}
.addition-head br {
	display: none;
}
.addition-head {
	margin-top: 10px;
	width: 190px;
	max-width: 100%;
	margin: auto;
}
.addition-num {
	font-size: 28px;
	font-weight: bold;
	color: #050c33;
}
.addition-desc {
	font-weight: 500;
	font-size: 14px;
	color: #050c33;
	opacity: 0.7;
}
.addition-bg {
	position: relative;
	z-index: 5;
}
.addition-bg:before {
	content: '';
	display: block;
	position: absolute;
	width: 114px;
	height: 71px;
	left: 50px;
	bottom: -6px;
	z-index: 1;
	background: url('./img/Vectorlistbg.png');
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}

/* MAIN TEAM */

.main-team {
	position: relative;
	padding-top: 50px;
}
.team-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
	margin-bottom: 80px;
}
.team-item {
	position: relative;
	margin-bottom: 20px;
}
.team-name {
	font-weight: bold;
	font-size: 16px;
	line-height: 22px;
	color: #050c33;
	margin-top: 25px;
	margin-bottom: 5px;
}
.team-desc {
	font-weight: 500;
	font-size: 12px;

	color: #050c33;
	opacity: 0.7;
}
.team-btn {
	margin-bottom: 90px;
}
.team-btn a {
	font-size: 12px;
	color: #050c33;
	text-transform: uppercase;
	padding: 12px 30px;
	border: 1px solid #ccc;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 500;
}
/* MAIN NEWS */
.main-news {
	position: relative;
	padding-bottom: 0px;
}
.news-list {
	margin-top: 60px;
}
.news-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
}
.news-item {
	cursor: pointer;
	border-radius: 5px;
	position: relative;
	height: auto;
	margin-bottom: 20px;
}
.news-item.full {
	height: 360px;
}
.news-mini-header {
	border-radius: 5px;
}
.news-mini-content {
	padding-left: 20px;
	padding-top: 20px;
	padding-right: 15px;
}
.news-mini-title {
	line-height: 1;
}
.news-mini-title > a {
	font-weight: bold;
	font-size: 14px;
	color: #050c33;
	text-decoration: none;
}
.news-list br {
	display: none;
}
.news-mini-title > a:hover {
	text-decoration: underline;
}
.news-mini-date {
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	color: #050c33;
	opacity: 0.5;
}
.news-mini-desc {
	font-weight: 500;
	font-size: 13px;
	color: #050c33;
	opacity: 0.7;
}
.news-mini-desc a {
	text-decoration: none;
}
.news-mini-desc a:hover {
	text-decoration: underline;
}
.news-full-bg {
	height: 100%;
	border-radius: 5px;
	overflow: hidden;
}
.news-full-bg img {
	object-fit: contain;
	height: 100%;
	max-width: inherit;
}
.news-full-content {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 5;
	padding: 0px 25px 10px 35px;
	line-height: 1;
}
.news-full-content p {
	margin-bottom: 0;
}
.news-full-title > a {
	font-weight: bold;
	font-size: 14px;
	color: #ffffff;
	text-decoration: none;
}
.news-full-title > a:hover {
	text-decoration: underline;
}
.news-full-date {
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	color: #ffffff;
	opacity: 0.5;
}
/* MAIN REVIEWS */
.main-reviews {
	padding-top: 60px;
	background: url('./img/right-quote-sign.svg') no-repeat;
	position: relative;
	background-size: 27%;
}
.reviews-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
	margin-bottom: 0;
}
.reviews-container {
	position: relative;
	width: 980px;
	margin: auto;
	max-width: 100%;
	margin-top: 76px;
	z-index: 10;
	margin-bottom: 40px;
}
.reviews-container:before {
	content: '';
	display: block;
	background: #ffffff;
	opacity: 0.5;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
	border-radius: 5px;
	position: absolute;
	bottom: 0;
	right: 60px;
	left: 24px;
	top: -32px;
	z-index: 5;
	width: 80%;
}
.reviews-container:after {
	content: '';
	display: block;
	background: #ffffff;
	opacity: 0.34;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
	border-radius: 5px;
	position: absolute;
	bottom: 0;
	right: 90px;
	left: 12px;
	top: -17px;
	z-index: 5;
	width: 90%;
}
.reviews-carousel {
	display: flex;
}
.review-logo img {
	margin: unset;
	text-align: unset;
}
.carousel-wrapper {
	position: relative;
	z-index: 10;
	display: block;
	padding: 0px;
	padding-right: 0;
	flex-wrap: wrap;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
	border-radius: 5px;
	padding-left: 20px;
	padding-top: 20px;
}
.review-logo {
	margin-bottom: 40px;
}
.review-desc {
	font-weight: bold;
	font-size: 14px;
	line-height: 1.22;
	color: #050c33;
	margin-bottom: 0px;
	display: inline-block;
}
.review-desc p {
	display: block;
	padding-right: 10px;
}
.review-author {
	line-height: 1.22;
	font-size: 14px;
	color: #838b9c;
	font-weight: 500;
	padding-bottom: 10px;
}
.carousel-wrapper .slick-slider {
	width: 90%;
	padding: 0;
	padding-bottom: 15px;
	border-right: none;
	border-bottom: 1px solid rgb(214, 214, 214);
}
.carousel-wrapper .slick-slide {
	width: 480px;
	padding-left: 6px;
}
.carousel-wrapper .slick-list {
	margin: 0;
}
.carousel-wrapper .slick-arrow {
	width: 16px;
	height: 32px;
	border: 0;
}
.carousel-wrapper .slick-prev {
	background: url('./img/arrow-left.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
.carousel-wrapper .slick-next {
	background: url('./img/arrow-right.svg');
	background-size: contain;
	background-repeat: no-repeat;
}
.carousel-nav {
	width: 90%;
	display: flex;
}
.reviews-nav {
	margin: auto;
	display: flex;
	margin-top: 20px;
	margin-bottom: 20px;
}
.reviews-counter {
	font-weight: normal;
	font-size: 28px;
	line-height: 28px;
	color: #e0e0e0;
	padding-left: 22px;
	padding-right: 22px;
	vertical-align: super;
}
.reviews-counter-active {
	color: #050c33;
}
/* MAIN WORKERS */
.main-workers {
	margin-top: 100px;
	position: relative;
}
.workers-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
}
.workers-desc {
	margin-top: 10px;
	font-weight: 500;
	font-size: 14px;
	text-align: initial;
	color: #050c33;
	opacity: 0.7;
	margin-bottom: 40px;
}
.workers-desc br {
	display: none;
}
.workers-carousels {
	margin-bottom: 30px;
}
.workers-carousel-wrapper {
	padding: 5px;
}
.workers-carousel-item {
	overflow: hidden;
	display: flex;
	background: #ffffff;
	border: 1px solid #e5e5e5;
	box-sizing: border-box;
	border-radius: 5px;
	height: 80px;
	min-height: 80px;
}
.workers-carousels .slick-slide img {
	margin: 0 auto;
	align-self: center;
}
.workers-carousel.second .slick-track {
	margin-left: 10%;
}
/* MAIN FAQ */

.main-faq {
	position: relative;
	margin-bottom: 50px;
}
.faq-label {
	position: relative;
	font-weight: bold;
	font-size: 24px;
	color: #050c33;
	margin-bottom: 30px;
}
.accordion-button {
	display: flex;
	align-items: inherit;
	position: relative;
	text-decoration: none;
	font-weight: bold;
	font-size: 16px;
	color: #050c33;
	line-height: 1;
	transition: color 0.3s;
}
.accordion-item {
	border: 0;
	transition: border-color 0.35s;
	border: 3px solid transparent;
	border-radius: 0;
	padding-bottom: 10px;
}
.accordion-body {
	font-weight: 500;
	font-size: 14px;
	color: #050c33;
	line-height: 1.37;
	opacity: 0.7;
}
.accordion-num {
	display: block;
	min-width: 15px;
	text-align: right;
	font-weight: bold;
	font-size: 12px;
	color: #828a9b;
	margin-top: 1px;
	margin-right: 3px;
}
.accordion-button:not(.collapsed) {
	color: #f14e3b;
	background: transparent;
	box-shadow: none;
}
.accordion-button::after {
	display: none;
}
.accordion-item:not(:first-of-type) {
	border-top: 3px solid transparent;
}
.accordion-button {
	padding: 0.5rem 1.25rem;
}
.accordion-button:focus {
	border: none;
	box-shadow: none;
}
.accordion-item.opened {
	border-color: #f14e3b;
}
.accordion-body {
	padding: 0rem 2.75rem;
	padding-right: 0rem;
	padding-left: 2rem;
}
.accordion-item:first-of-type {
	border-radius: 0;
}
.accordion-item:not(:first-of-type) {
	border-color: transparent;
	transition: border-color 0.35s;
}
.accordion-item.opened:not(:first-of-type) {
	border: 3px solid;
	border-color: #f14e3b;
}
/* FOOTER */
footer {
	position: relative;
	background: linear-gradient(
			261.2deg,
			rgba(255, 255, 255, 0.276) -114.85%,
			rgba(255, 255, 255, 0) 69.04%
		),
		url('./img/D-flying.svg') top center, url('./img/D.png') bottom right,
		#040613;
	background-repeat: no-repeat;
	background-size: cover, 160px, 110px;
	padding-top: 35px;
	padding-bottom: 45px;
}
.footer-header {
	font-weight: bold;
	font-size: 24px;
	line-height: 1;
	color: #ffffff;
	margin-bottom: 20px;
	text-align: center;
}
.footer-desc {
	font-weight: 500;
	font-size: 14px;
	line-height: 22px;
	color: #ffffff;
	opacity: 0.7;
	margin-bottom: 20px;
}
.footer-desc br {
	display: none;
}
.footer-contacts {
	margin-bottom: 30px;
}
.footer-tel {
	font-size: 20px;
	line-height: 150%;
	font-weight: bold;
}
.footer-tel a {
	position: relative;
	text-decoration: none;
	color: #fff;
	padding-left: 40px;
}
.footer-tel a:before {
	position: absolute;
	content: '';
	height: 24px;
	width: 24px;
	left: 0;
	top: 0px;
	display: inline-block;
	background: url('./img/phoneicon.png');
	background-repeat: no-repeat;
	background-size: contain;
}
.footer-mail {
	position: relative;
	font-weight: bold;
	font-size: 18px;
	line-height: 150%;
	text-decoration-line: underline;
	padding-left: 40px;
}
.footer-mail a {
	text-decoration: none;
	color: #fff;
}
.form-wrapper {
	position: relative;
	margin-left: auto;
	width: 480px;
	max-width: 100%;
}
.footer-mail a:before {
	position: absolute;
	content: '';
	height: 24px;
	width: 24px;
	left: 0;
	top: 4px;
	display: inline-block;
	background: url('./img/mail.png');
	background-repeat: no-repeat;
	background-size: contain;
}
.footer-form input,
.footer-form textarea {
	background-color: transparent;
	border: 1px solid rgba(255, 255, 255, 0.3);
	box-sizing: border-box;
	border-radius: 5px;
	padding: 13px 12px;
	margin-bottom: 7px;
}
.footer-form input::placeholder,
.footer-form textarea::placeholder {
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #fff;
	opacity: 1;
}
.footer-form input:focus,
.footer-form textarea:focus {
	background-color: transparent;
	color: #fff;
	outline: 0;
	border: 1px solid #ffffff;
	border-color: red;
	box-sizing: border-box;
	border-radius: 5px;
	box-shadow: none;
}
.footer-form input[type='checkbox'] {
	border: 1px solid rgba(255, 2556, 255, 0.3);
	display: inline-block;
}
.footer-form input[type='checkbox']:checked {
	border: 1px solid #ffffff;
	border-color: red;
	background-color: transparent;
}
.form-check {
	display: flex;
}
.form-check-label {
	font-weight: normal;
	font-size: 12px;
	line-height: 15px;
	color: #ffffff;
	margin-left: 13px;
	margin-top: 7px;
}
.form-check-label a {
	color: red;
	text-decoration: none;
}
.form-check-label span {
	display: inline-block;
	color: red;
}
.footer-form textarea {
	padding-left: 20px;
	padding-top: 18px;
}
.form-control {
	color: #ccc;
}
.btn-submit {
	background: #f14d34;
	border-radius: 5px;
	width: 100%;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #ffffff;
	transition: background-color 0.3s ease;
	padding: 24px;
	margin-bottom: 70px;
}
.btn-submit:hover {
	color: #fff;
	background-color: #fa735f;
}
.btn-submit:focus {
	box-shadow: none;
}
.footer-social {
	position: relative;
	padding-top: 60px;
}
.footer-social:before {
	content: '';
	position: absolute;
	display: block;
	left: 0;
	top: 0;
	right: 0;
	height: 1px;
	background-color: rgba(255, 255, 255, 0.3);
}

/* SOCIAL BLOCK */

.social-list {
	list-style: none;
	display: flex;
	padding-left: 0px;
}
.social-list-item {
	display: inline-block;
	margin-right: 10px;
}
.social-list-item a {
	width: 30px;
	height: 30px;
	background: #f14d34;
	display: inline-block;
	text-align: center;
	border-radius: 5px;
}
.social-list-item img {
	width: 18px;
	height: 16px;
	filter: invert(1);
}
.social-desc {
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	opacity: 0.5;
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
/* MEDIA TAGS */

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
	.util-body {
		margin-bottom: 50px;
	}
	.util-label {
		font-size: 42px;
		line-height: 51px;
	}
	.util-title {
		font-size: 16px;
		width: unset;
	}
	.util-title br {
		display: inline-block;
	}
	.util-bg {
		text-align: unset;
	}
	.support-label {
		font-size: 42px;
		line-height: 51px;
	}
	.addition-label {
		font-size: 42px;
		line-height: 51px;
	}
	.main-support .container {
		padding-left: 15px;
		padding-right: 15px;
	}
	.support-bg {
		z-index: 4;
	}
	.main-support br {
		display: inline-block;
	}
	.main-advantages {
		padding: 380px 0 150px;
	}
	.advantages-label {
		font-size: 42px;
		line-height: 51px;
	}
	.adv-bg {
		width: 50%;
	}
	.main-tarrifs {
		padding-top: 150px;
	}
	.tariff-item {
		max-width: 360px;
		margin-bottom: 0;
	}
	.tariffs-label {
		font-size: 42px;
		line-height: 51px;
	}
	.tariff-list {
		margin-top: 80px;
	}
	.tariff-item.active {
		transform: scale(1.1);
		z-index: 10;
		border: 1px solid rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
		border-radius: 5px;
	}
	.tariff-btn a {
		padding: 24px 61px;
	}
	.tariff-desc br {
		display: block;
	}
	.tariff-main-desc br {
		display: block;
	}
	.main-addition {
		padding-top: 160px;
	}
	.additions-list {
		text-align: unset;
	}
	.addition-desc {
		font-size: 16px;
		line-height: 22px;
	}
	.addition-head {
		width: unset;
		margin-top: 10px;
	}
	.addition-head br {
		display: inline-block;
	}
	.main-team {
		padding-top: 160px;
	}
	.team-label {
		font-size: 42px;
		line-height: 51px;
	}
	.addition-bg:before {
		left: -52px;
	}
	.team-item {
		padding: 0 50px;
		margin-bottom: 70px;
	}
	.team-desc {
		font-size: 16px;
		line-height: 22px;
	}
	.team-btn a {
		padding: 24px 75px;
	}
	.main-news {
		padding-bottom: 30px;
	}
	.news-label {
		font-size: 42px;
		line-height: 51px;
	}
	.news-item {
		height: 475px;
	}
	.news-mini-title {
		line-height: inherit;
	}
	.news-mini-title > a {
		font-size: 18px;
		line-height: 22px;
	}
	.news-mini-content {
		padding-left: 30px;
		padding-right: 0;
	}
	.news-mini-desc {
		font-size: 14px;
		line-height: 22px;
	}
	.news-item.full {
		height: unset;
	}
	.news-full-bg {
		height: unset;
		overflow: hidden;
	}
	.news-full-bg img {
		object-fit: unset;
	}
	.news-full-content {
		padding: 24px 75px;
	}
	.news-full-content p {
		margin-bottom: 1rem;
	}
	.news-full-title > a {
		font-size: 18px;
		line-height: 22px;
	}
	.reviews-label {
		font-size: 42px;
		line-height: 51px;
		margin-bottom: 46px;
	}
	.reviews-container:before {
		left: 60px;
		top: -40px;
		width: unset;
	}
	.reviews-container:after {
		left: 90px;
		top: -70px;
		width: unset;
	}
	.carousel-wrapper {
		display: flex;
		padding: 66px 68px;
	}
	.carousel-wrapper .slick-slider {
		width: 64%;
		padding: 14px 60px;
		padding-bottom: 0;
		border-right: 1px solid rgb(214, 214, 214);
		border-bottom: none;
	}
	.review-desc {
		margin-top: 28px;
	}
	.carousel-nav {
		width: 36%;
	}
	.reviews-nav {
		display: block;
		margin: auto;
		margin-left: 35px;
	}
	.reviews-counter {
		padding-left: 46px;
		padding-right: 46px;
	}
	.main-workers {
		margin-top: 160px;
	}
	.workers-carousel:nth-child(2) {
		margin-bottom: 110px;
	}
	.workers-label {
		font-size: 42px;
		line-height: 51px;
	}
	.workers-desc {
		font-size: 16px;
		line-height: 22px;
		text-align: center;
		margin-left: 0;
	}
	.workers-desc br {
		display: block;
	}
	.workers-carousel-item {
		overflow: unset;
		height: 160px;
		min-height: 160px;
	}
	.faq-label {
		font-size: 42px;
		line-height: 51px;
		margin-bottom: 80px;
	}
	.accordion-button {
		font-size: 18px;
		line-height: 1.22;
		align-items: center;
	}
	.accordion-body {
		font-size: 16px;
		padding-right: 2.75rem;
		padding-left: 2.75rem;
	}
	footer {
		background-size: inherit;
	}
	.footer {
		padding-bottom: 0;
	}
	.footer-header {
		font-size: 42px;
		line-height: 51px;
		text-align: unset;
	}
	.footer-desc {
		margin-bottom: 142px;
	}
	.footer-desc br {
		display: block;
	}
	.footer-tel {
		font-size: 32px;
	}
	.footer-tel a:before {
		top: 7px;
	}
	.footer-contacts {
		margin-bottom: 0px;
	}
	.form-check {
		display: block;
	}
}
</style>
