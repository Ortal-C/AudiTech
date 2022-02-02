<template>
	<div v-if="isLoggedIn" class="market-page">
		<img class="market-img" src="@/assets/imgs/main.jpg" alt="image" />
		<main class="main-content">
			<h1>Markets Summary</h1>
			<select name="filterBy" @change="filterMarkets">
				<option
					v-for="option in filterOptions"
					:key="option.value"
					:value="option.value"
				>
					{{ option.name }}
				</option>
			</select>
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
		data() {
			return {
				filterByValue: '',
				filterOptions: [
					{
						value: 'all',
						name: 'All',
					},
					{
						value: 'positiveChange',
						name: 'Positive Change',
					},
					{
						value: 'negativeChange',
						name: 'Negative Change',
					},
				],
			}
		},
		created() {
			this.$store.dispatch({ type: 'loadMarkets' }),
			this.filterByValue = 'all'
		},
		methods: {
			filterMarkets(event) {
				this.filterByValue = event.target.value
				this.$store.commit({
					type: 'setFilterBy',
					filterBy: this.filterByValue,
				})
			},
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
				return this.$store.getters.filteredMarkets
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
