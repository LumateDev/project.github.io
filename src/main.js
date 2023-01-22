import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router.js'
import '@/assets/style.css'
import store from './store'
window.$ = window.jQuery = require('jquery')

createApp(App).mount('#app')
const app = createApp(App)
app.use(Router)
app.use(store)
app.mount('#app')
