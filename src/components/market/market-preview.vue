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
				<span>Last Update:</span>
				{{ marketTime }}
			</p>
		</header>
		<div class="previous-close" title="Previous Close">
			{{ market.regularMarketPreviousClose.fmt }}
		</div>
		<div :class="`precent state ${marketStateClass}`" title="Change Percent">
			{{market.regularMarketChangePercent.fmt }}
		</div>
		<div
			:class="`change state ${marketStateClass}`"
			title="Today's Market Change"
		>
			{{ market.regularMarketChange.fmt }}
		</div>
		<div class="price" title="Market Price">
			{{ market.regularMarketPrice.fmt }}
		</div>
		<button class="btn-details" title="Click for more details" @click="showMarketDetails">→</button>
	</main>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
	export default {
		name: 'market-preview',
		props: ['market'],
		data(){
			return{
				isPositive: this.market.regularMarketChangePercent.raw > 0,
				tagBgc: this.market.tagBackgroundColor || null,
			}
		},
		methods: {
			showMarketDetails() {
				this.$emit('showMarketDetails', {...this.market, tagBackgroundColor: this.tagBgc})
			},
		},
		computed: {
			marketTime() {
				return new Date(
					this.market.regularMarketTime.raw * 1000
				).toLocaleString()
			},
			marketStateClass() {
				return this.isPositive ? 'market-rise' : 'market-decline'
			},
			tagBackgroundColor(){ 
				return this.tagBgc ? this.market.tagBackgroundColor : utilService.getRandomColor();
			},
		},
	}
</script>
