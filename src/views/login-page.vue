<template>
	<main class="login">
		<section class="container">
			<h3>Login</h3>
			<form class="login-form" @submit.prevent="doLogin">
				<input
					id="username"
					type="text"
					v-model="loginCred.username"
					placeholder="Enter username..."
					required
				/>
				<input
					id="password"
					type="password"
					v-model="loginCred.password"
					placeholder="Enter password..."
					required
				/>
				<button class="btn-login">Login</button>
			</form>
			<h5>{{ msg }}</h5>
		</section>
	</main>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
	export default {
		name: 'login-page',
		data() {
			return {
				loginCred: {
					username: '',
					password: '',
				},
				msg: '',
			}
		},
		methods: {
			async doLogin() {
				try {
					const encryptedPass = utilService.encrypt(
						this.loginCred.password
					)
					await this.$store.dispatch({
						type: 'login',
						userCred: {
							...this.loginCred,
							password: encryptedPass,
						},
					})
					if (this.isLoginSucceed)
						this.$router.push('/Markets')
					else
						this.msg =
							'Incorrect username or password.'
				} catch (err) {
					console.log('Failed to login', err)
				}
			},
		},
		computed: {
			isLoginSucceed() {
				return this.$store.getters.isLoggedin
			},
		},
	}
</script>
