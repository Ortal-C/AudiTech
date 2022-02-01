<template>
	<div v-if="isLoggedIn" class="market-page">
		<img class="market-img" src="@/assets/imgs/main.jpg" alt="image" />
		<main class="main-content">
			<h1>Markets state summary</h1>
			<market-list
				:markets="markets"
				@showMarketDetails="showMarketDetails"
			/>
		</main>
		<router-view></router-view>
	</div>
	<div v-else>
		<not-autorized />
	</div>
</template>

<script>
	import notAutorized from '@/components/UI/not-authorize.vue'
	import marketList from '@/components/market/market-list.vue'
	export default {
		name: 'markets-page',
		created() {
			this.$store.dispatch({ type: 'loadMarkets' })
		},
		methods: {
			showMarketDetails(market) {
				this.$store.commit({
					type: 'setCurrMarket',
					currMarket: market,
				})
				this.$router.push(`Markets/${market.symbol}`)
			},
		},
		computed: {
			markets() {
				return this.$store.getters.markets
			},
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			},
		},
		components: {
			marketList,
			notAutorized,
		},
	}
</script>

<style></style>
