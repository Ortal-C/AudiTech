<template>
	<main v-if="isLoggedIn" class="market-details">
		<backdrop @close="showMarketPage" />
		<main class="main-content">
			<h1>{{ market ? market.shortName : '' }}</h1>
			<!-- <pre>{{ market }}</pre> -->
		</main>
	</main>
	<div v-else>
		<not-autorized />
	</div>
</template>

<script>
	import backdrop from '@/components/UI/modal/backdrop.vue'
	import notAutorized from '@/components/UI/not-authorize.vue'
	export default {
		name: 'market-details',
		methods: {
			showMarketPage() {
				this.$router.back()
			},
		},
		computed: {
			market() {
				return this.$store.getters.currMarket
			},
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			},
		},
		components: {
			notAutorized,
			backdrop,
		},
	}
</script>

<style></style>
