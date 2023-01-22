import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import Modal from './components/Modal.vue'
import Form from './components/Form.vue'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'HomePage',
			component: MainPage,
			children: [
				{
					path: '/form',
					component: Modal,
					props: {
						component: Form,
					},
				},
			],
		},
	],
})

export default router
