import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/style.css";
window.$ = window.jQuery = require('jquery')

createApp(App).mount('#app')
