<template>
	<AppHeader></AppHeader>
	<AppContent></AppContent>
	<AppModal></AppModal>
	<AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppContent from '@/components/AppContent.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppModal from "@/components/AppModal.vue"

export default {
	name: 'App',
	components: {
		AppModal,
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
