<template>
	<main class="login">
		<form @submit.prevent="doLogin">
			<template>
				<label for="username">Username</label>
				<input
					id="username"
					type="text"
					v-model="loginCred.username"
					placeholder="Enter username..."
					required
				/>
			</template>
			<template>
				<label for="password">Password</label>
				<input
					id="password"
					type="password"
					v-model="loginCred.password"
					placeholder="Enter password..."
					required
				/>
			</template>
			<button>Login</button>
		</form>
		<p>{{msg}}</p>
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
				msg: ''
			}
		},
		methods: {
			async doLogin() {
				try {
					const encryptedPass = utilService.encrypt(this.loginCred.password)
					await this.$store.dispatch({
						type: 'login',
						userCred: {
							...this.loginCred,
							password: encryptedPass,
						},
					})
					if (this.isLoginSucceed) this.$router.push('/Markets')
					else this.msg = 'Username or Password is incorrect'
				} catch (err) {
					console.log('Failed to login', err)
				}
			},
		},
		computed: {
			isLoginSucceed() {
				return this.$store.getters.isLoggedin 
			}
		},
	}
</script>
