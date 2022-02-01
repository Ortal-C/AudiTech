<template>
	<main class="market-list">
		<h3>markets list</h3>
		<ul>
			<li v-for="market in markets" :key="market.symbol">
				<market-preview :market="market" />
			</li>
		</ul>
	</main>
</template>

<script>
	import marketPreview from '@/components/market/market-preview.vue'
	export default {
		name: 'market-list',
		props: ['markets'],
		components: {
			marketPreview,
		},
	}
</script>
