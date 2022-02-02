<template>
	<header class="market-title">
		<div
			class="market-tag"
			:style="`background-color: ${bgc};`"
			:title="`Market symbol: ${market.symbol}`"
		>
			{{ market.exchange }}
		</div>
		<h3 :title="`Short name: ${market.shortName}`">
			{{ market.shortName || market.fullExchangeName }}
		</h3>
	</header>
</template>

<script>
	export default {
		name: 'market-title',
		props: ['market', 'bgc'],
	}
</script>