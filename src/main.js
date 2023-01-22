import { createApp } from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')
createApp(App).mount('#app')
