<template>
	<div class="container reviews">
		<h2 class="reviews__title">Отзывы</h2>
		<div class="reviews__wrapper">
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
			<div class="reviews__right">
				<img
					@click="() => (counter > 0 ? counter-- : counter)"
					class="reviews__arrow__left"
					src="../assets/img/arrow-left.svg"
					alt=""
				/>
				<p>{{ counter + 1 }}/8</p>
				<img
					@click="() => (counter < 7 ? counter++ : counter)"
					class="reviews__arrow__left"
					src="../assets/img/arrow-right.svg"
					alt=""
				/>
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
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
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
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
					img: 'logo.png',
				},
				{
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
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
					name: 'Нуреев Александр, менеджер проекта Winamp Russian Community',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
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
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate, dolore' +
						' eligendi eos et facilis illo qui reprehenderit velit? Ad atque laborum odio sequi voluptates voluptatibus. Animi, nemo, rerum',
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

<style lang="scss" scoped></style>
