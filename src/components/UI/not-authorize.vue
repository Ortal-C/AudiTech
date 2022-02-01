<template>
	<main class="container">
		<h3>Not Autorized</h3>
		<h4>Please Login</h4>
		<button class="btn-login" @click="navigateToLoginPage">
			Login
		</button>
	</main>
</template>

<script>
	export default {
		methods: {
			navigateToLoginPage() {
				this.$router.push('/')
			},
		},
	}
</script>

<style></style>
