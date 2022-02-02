<template>
	<main class="market-list">
		<ul>
			<li v-for="market in markets" :key="market.symbol">
				<market-preview :market="market" @showMarketDetails="showMarketDetails"/>
			</li>
		</ul>
	</main>
</template>

<script>
	import marketPreview from '@/components/market/market-preview.vue'
	export default {
		name: 'market-list',
		props: ['markets'],
		methods: {
			showMarketDetails(market) {
				this.$emit('showMarketDetails', market)
			}
		},
		components: {
			marketPreview,
		},
	}
</script>