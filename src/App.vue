<template>
	<AppHeader></AppHeader>
	<AppContent></AppContent>
	<AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppContent from '@/components/AppContent.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
	name: 'App',
	props: ["AppContent.vue"],
	components: {
		AppHeader,
		AppContent,
		AppFooter,
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
