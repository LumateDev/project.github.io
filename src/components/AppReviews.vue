<template>
	<div class="container reviews">
		<h2 class="reviews__title">Отзывы</h2>
		<div class="reviews__blok">
			<div class="reviews__wrapper">
				<div class="left_blok">
					<div
						class="reviews__left"
						v-for="(item, i) in infoList.length"
						:key="item"
					>
						<div v-if="counter === i">
							<img class="reviews__img" :src="itemImage" alt="" />
							<h6 class="reviews__text">{{ infoList[i].text }}</h6>
							<p class="reviews__name">{{ infoList[i].name }}</p>
						</div>
					</div>
				</div>
				<div class="img_palc">
					<img src="../assets/img/free-png.png" width="50" height="400" />
				</div>
				<div class="right_blok">
					<div class="reviews__right">
						<img
							@click="() => (counter > 0 ? counter-- : counter)"
							class="reviews__arrow__left"
							src="../assets/img/arrow-left.svg"
							alt=""
							width="30"
							height="60"
						/>
						<p class="counter">{{ counter + 1 }}/8</p>
						<img
							@click="() => (counter < 7 ? counter++ : counter)"
							class="reviews__arrow__left"
							src="../assets/img/arrow-right.svg"
							alt=""
							width="30"
							height="60"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			infoList: [
				{
					name:
						'С уважением, Наталья Сушкова руководитель Отдела' +
						'веб-проектов Группы компаний «Си Эль парфюм»',
					text:
						'Долгие поиски единственного и неповторимого мастера на' +
						'многострадальный сайт www.cielparfum.com, который был' +
						'собран крайне некомпетентным программистом и раз в месяц' +
						'стабильно грозил погибнуть, привели меня на сайт и, в' +
						'итоге, к ребятам из Drupal-coder.',
					img: 'cableman_ru.png',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolore eaque ratione suscipit vero, voluptate.',
					img: 'farbors_ru.jpg',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'И вот уже практически полгода как не проходит и дня,чтобы я не поудивлялась и не порадовалась своему везению!' +
						'Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими' +
						'существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и' +
						'доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф).',
					img: 'logo.png',
				},
				{
					name: 'С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»',
					text: 'Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!',
					img: 'logo-estee.png',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
					img: 'logo_0.png',
				},
				{
					name: 'С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»',
					text: 'Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню.',
					img: 'logo_2.png',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
					img: 'lpcma_rus_v4.jpg',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text: 'И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!',
					img: 'nashagazeta_ch.png',
				},
			],
			counter: 0,
		}
	},
	methods: {
		changeSlideLeft() {
			if (this.counter > 0) {
				this.counter -= this.counter
			}
		},
		changeSlideRight() {
			if (this.counter < 7) {
				this.counter += this.counter
			}
		},
	},
	computed: {
		itemImage() {
			return require(`../assets/img/${this.infoList[this.counter].img}`)
		},
	},
}
</script>

<style scoped>
.counter {
	text-align: center;
	font-size: 30px;
	font-weight: 500;
	margin: 10px 20px 0px 20px;
}
.reviews__img {
	margin-bottom: 20px;
}
.reviews__blok {
	display: flex;
	align-items: center;
	justify-content: center;
}
.reviews__title {
	text-align: center;
	font-size: 42px;
	font-weight: 700;
	margin: 150px 15px 30px 15px;
}

.img_palc {
	opacity: 0.2;
}

.reviews__wrapper {
	width: 70%;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	border-radius: 10px;
	padding: 30px 40px 30px 40px;
	margin: 10px 15px 30px 15px;
	display: flex;
	justify-content: space-between;
}

.left_blok {
	width: 60%;
	justify-content: space-between;
}

@media (min-width: 560px) {
	.right_blok {
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.reviews__right {
		display: flex;
	}
}

@media (max-width: 750px) and (min-width: 561px) {
	.reviews__wrapper {
		width: 100%;
	}
}

@media (max-width: 560px) {
	.reviews__wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.counter {
		margin: 10px 20px 0px 0px;
	}

	.left_blok {
		width: 80%;
		justify-content: space-between;
	}

	.right_blok {
		width: 20%;
		display: flex;
	}
}
</style>
