<template>
	<main class="market-preview">
		<header class="title">
			<main>
				<div
					class="tag" :style="`background-color: ${tagBackgroundColor}`"
					:title="`Market symbol: ${market.symbol}`"
				>
					{{ market.exchange }}
				</div>
				<h3 :title="`Short name: ${market.shortName}`">
					{{ market.shortName }}
				</h3>
			</main>
			<p
				:title="`Regular Market Time: ${market.regularMarketTime.fmt}`"
			>
				<span>Last Updated:</span>
				{{ marketTime }}
			</p>
		</header>
		<div class="previous-close" title="Previous Close">
			{{ market.regularMarketPreviousClose.fmt }}
		</div>
		<div :class="`precent ${marketStateClass}`" title="Change Percent">
			{{ market.regularMarketChangePercent.fmt }}
		</div>
		<div
			:class="`change ${marketStateClass}`"
			title="Today's Market Change"
		>
			{{ market.regularMarketChange.fmt }}
		</div>
		<div class="price" title="Market Price">
			{{ market.regularMarketPrice.fmt }}
		</div>
	</main>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
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
			marketStateClass() {
				const isPositive =
					this.market.regularMarketChangePercent.raw > 0
				return isPositive ? 'market-rise' : 'market-decline'
			},
			tagBackgroundColor(){
				return utilService.getRandomColor();
			},
		},
	}
</script>
