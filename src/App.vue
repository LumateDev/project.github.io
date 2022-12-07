<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AppHeader></AppHeader>
  <AppContent></AppContent>
  <AppFooter></AppFooter>

</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {


    AppHeader,
    AppContent,
    AppFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
