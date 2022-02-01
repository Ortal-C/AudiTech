<template>
	<div v-if="isLoggedIn" class="market-page">
		<img class="market-img" src="@/assets/imgs/main.jpg" alt="image" />
		<main class="main-content">
			<h1>Markets state summary</h1>
			<market-list :markets="markets" />
		</main>
	</div>
	<div v-else>Not Authorized.</div>
</template>

<script>
	import marketList from '@/components/market/market-list.vue'
	export default {
		name: 'markets-page',
		created() {
			this.$store.dispatch({ type: 'loadMarkets' })
		},
		computed: {
			markets() {
				return this.$store.getters.markets
			},
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			}
		},
		components: {
			marketList,
		},
	}
</script>

<style></style>
