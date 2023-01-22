<template>
	<MainPage></MainPage>
</template>

<script>
import MainPage from '@/components/MainPage.vue'

export default {
	name: 'App',
	components: {
		MainPage,
	},
	data() {
		return {}
	},
	mounted() {},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;900&display=swap');
#app {
	font-family: 'Montserrat', sans-serif;
}
</style>
