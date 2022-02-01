<template>
	<main>
		<header class="app-header">
			<div class="logo">Market</div>
			<div v-if="isLoggedIn">
				<user-icon @userOptions="toggleMenu" />
			</div>
		</header>
		<user-menu
			v-if="isMenuOpen"
			:user="user"
			@closeMenu="isMenuOpen = false"
		/>
	</main>
</template>

<script>
	import userIcon from '@/components/UI/user-icon.vue'
	import userMenu from '@/components/UI/user-menu.vue'
	export default {
		name: 'app-header',
		data() {
			return {
				isMenuOpen: false,
			}
		},
		created() {
			this.user = this.$store.getters.user
		},
		methods: {
			toggleMenu() {
				this.isMenuOpen = !this.isMenuOpen
			},
		},
		computed: {
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			},
			user() {
				return this.$store.getters.user
			},
		},
		components: {
			userIcon,
			userMenu,
		},
	}
</script>
