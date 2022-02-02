<template>
	<main
		class="market-preview"
		@click="showMarketDetails"
		title="Click on row for more details"
	>
		<market-title :market="market" :bgc="tagBackgroundColor" />
		<main
			v-for="section in sections"
			:key="section.key"
			:class="`${section.class} ${className} `"
			:title="section.title"
		>
			{{ section.entry }}
		</main>
	</main>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
	import marketTitle from '@/components/market/market-title.vue'
	export default {
		name: 'market-preview',
		props: ['market'],

		data() {
			return {
				className: '',
				tagBgc: null,
				sections: [
					{
						key: `regularMarketPreviousClose`,
						entry: this.market
							.regularMarketPreviousClose.fmt,
						class: `previous-close`,
						title: `Previous Close`,
					},
					{
						key: `regularMarketChangePercent`,
						entry: this.market
							.regularMarketChangePercent.fmt,
						class: `precent state`,
						title: `Previous Close`,
					},
					{
						key: `regularMarketChange`,
						entry: this.market.regularMarketChange.fmt,
						class: `change state`,
						title: `Today's Market Change`,
					},
					{
						key: `regularMarketPrice`,
						entry: this.market.regularMarketPrice.fmt,
						class: 'price',
						title: 'Market Price',
					},
				],
			}
		},
		created() {
			this.className = String(
				this.market.regularMarketChange.raw < 0
					? 'market-decline'
					: 'market-rise'
			)
			this.tagBgc = this.market.tagBackgroundColor || null
		},
		methods: {
			showMarketDetails() {
				const attr = {}
				this.sections.forEach(
					(section) => (attr[section.key] = section.entry)
				)
				this.$emit('showMarketDetails', {
					...this.market,
					...attr,
					regularMarketTime:
						this.market.regularMarketTime.fmt,
					tagBackgroundColor: this.tagBgc,
				})
			},
		},
		computed: {
			marketTime() {
				return new Date(
					this.market.regularMarketTime.raw * 1000
				).toLocaleString()
			},
			marketStateClass() {
				return this.isPositive
					? 'market-rise'
					: 'market-decline'
			},
			tagBackgroundColor() {
				if (!this.tagBgc) {
					this.tagBgc = utilService.getRandomColor()
				}
				return this.tagBgc
			},
		},
		components: {
			marketTitle,
		},
	}
</script>
