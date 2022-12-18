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
	components: {
		AppHeader,
		AppContent,
		AppFooter,
	},
}
</script>

<style>
#app {
	font-family: 'Montserrat', sans-serif;
}
</style>
