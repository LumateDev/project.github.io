import { createApp } from 'vue'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')

import "bootstrap";

createApp(App).mount('#app')
