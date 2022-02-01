<template>
	<main class="market-preview">
		<hr />
		<header class="title">
			<div class="badge" :title="`Market symbol: ${market.symbol}`">
				{{ market.exchange }}
			</div>
			<h3 :title="`Short name: ${market.shortName}`">
				{{ market.fullExchangeName }}
			</h3>
		</header>
		<p :title="`Regular Market Time: ${market.regularMarketTime.fmt}`">
			Last Updated: {{ marketTime }}
		</p>
		<p>Market Price: {{ market.regularMarketPrice.fmt }}</p>
		<p :class="marketStateClass">
			Market Change Percent:
			{{ market.regularMarketChangePercent.fmt }}
		</p>
		<p :class="marketStateClass">Market Change: {{ market.regularMarketChange.fmt }} Today</p>
		<p>Previous Close: {{ market.regularMarketPreviousClose.fmt }}</p>
	</main>
</template>

<script>
	export default {
		name: 'market-preview',
		props: ['market'],
		methods: {
			name() {
				Intl.locale()
			},
		},
		computed: {
			marketTime() {
				return new Date(
					this.market.regularMarketTime.raw * 1000
				).toLocaleString()
			},
			marketStateClass(){
				const isPositive = this.market.regularMarketPrice.raw > 0
				return {'market-rise': isPositive, 'market-decline': !isPositive}
			}
		},
	}
</script>
