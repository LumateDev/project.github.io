<template>
	<div class="form-wrapper">
		<form
			class="footer-form"
			action=""
			method="POST"
			accept-charset="UTF-8"
			id="sendForm"
			@submit.prevent="sendFormInfo"
		>
			<Loader v-if="tempInfo.sending" />
			<div class="mb-1">
				<input
					type="name"
					name="name"
					class="form-control"
					id="inputName"
					aria-describedby="emailHelp"
					placeholder="Ваше имя"
					v-model="tempInfo.name"
				/>
			</div>
			<div class="mb-1">
				<input
					type="phone"
					name="phone"
					class="form-control"
					id="inputPhone"
					placeholder="Телефон"
					v-model="tempInfo.phone"
				/>
			</div>
			<div class="mb-1">
				<input
					type="email"
					class="form-control"
					name="email"
					id="inputEmail"
					placeholder="E-mail"
					v-model="tempInfo.email"
				/>
			</div>
			<div class="mb-1">
				<textarea
					name="text"
					class="form-control"
					id="inputText"
					placeholder="Ваш комментарий"
					rows="5"
					v-model="tempInfo.text"
				></textarea>
			</div>
			<div class="mb-2 form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1" />
				<label class="form-check-label" for="exampleCheck1"
					>Отправляя заявку, я даю согласие на
					<a href="#"
						>обработку своих персональных<br />
						данных</a
					>.<span>*</span></label
				>
			</div>
			<button type="submit" class="btn btn-submit btn-lg" id="form-submit">
				Свяжитесь с нами
			</button>
		</form>
	</div>
</template>

<script>
import Loader from './Loader.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
	data() {
		return {
			tempInfo: {
				name: '',
				email: '',
				phone: '',
				text: '',
				sending: false,
			},
		}
	},
	components: { Loader },
	methods: {
		...mapGetters(['getValues']),
		...mapActions(['sendForm']),
		validateForm() {
			const name = document.getElementById('inputName').value
			const email = document.getElementById('inputEmail').value
			const phone = document.getElementById('inputPhone').value
			const text = document.getElementById('inputText').value
			if (name != '' && email != '' && phone != '' && text != '') {
				return true
			} else {
				return {
					error: 'Нельзя оставлять поля пустыми. Заполните форму корректно!',
				}
			}
		},
		async sendFormInfo(e) {
			e.preventDefault()
			if (this.validateForm() == true) {
				this.sendForm()
			} else {
				let err = this.validateForm()
				alert(err.error)
			}
		},
	},
	mounted() {
		this.tempInfo = this.getValues()
	},
}
</script>

<style></style>
