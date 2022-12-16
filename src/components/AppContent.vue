<template>
	<div class="container-fluid competency-region">
		<div class="competencies">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h2 class="competency-title">
							13 лет совершенствуем компетенции в Drupal поддержке!
						</h2>
						<div class="competencies-description">
							Разрабатываем и оптимизируем модули, расширяем функциональность
							сайтов, обновляем дизайн
						</div>
					</div>
				</div>
				<div class="row row-flex competencies-row">
					<div class="bbb col-6 col-md-3">
						<div class="competency mb-3">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Добавление информации на сайт, создание новых разделов"
											src="../assets/img/competency-1.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Добавление <br />
									информации на сайт,<br />
									создание новых <br />
									разделов
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Разработка и оптимизация модулей сайта"
											src="../assets/img/competency-2.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Разработка <br />
									и оптимизация <br />
									модулей сайта
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Интеграция"
											src="../assets/img/competency-3.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Интеграция с CRM, <br />
									1C, платежными <br />
									системами, любыми <br />
									веб-сервисами
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Доработки"
											src="../assets/img/competency-4.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Любые доработки <br />
									функционала <br />
									и дизайна
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Безопасность"
											src="../assets/img/competency-5.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Аудит и мониторинг <br />
									безопасности Drupal <br />
									сайтов
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Миграция"
											src="../assets/img/competency-6.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Миграция, импорт <br />
									контента и апгрейд <br />
									Drupal
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="Оптимизация"
											src="../assets/img/competency-7.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Оптимизация <br />
									и ускорение <br />
									Drupal-сайтов
								</div>
							</div>
						</div>
					</div>
					<div class="bbb col-6 col-md-3">
						<div class="competency">
							<div class="competency-wrapper">
								<div class="competency-header">
									<div class="competency-icon">
										<img
											alt="SEO"
											src="../assets/img/competency-8.svg"
											class="img-responsive"
										/>
									</div>
								</div>
								<div class="competency-body">
									Веб-маркетинг, <br />
									консультации <br />
									и работы по SEO
								</div>
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
	name: 'AppContent',
}
</script>

<style scoped>
.competencies {
	padding: 100px 0;
}
div {
	display: block;
}
.competency-title {
	font-size: 28px;
	font-weight: bold;
	margin-bottom: 20px;
}
.competencies-description {
	margin-bottom: 55px;
}
.competency-body {
	font-size: 15px;
	margin-top: 20px;
}

.bbb {
	margin-right: none;
}

@media (max-width: 1300px) {
	.container {
		position: relative;
		z-index: 15;
	}
}
</style>
