<template>
	<main v-if="isLoggedIn" class="market-details">
		<div class="backdrop"></div>
		<main class="main-content">
			<h1>{{ market ? market.shortName : '' }}</h1>
			<pre>{{ market }}</pre>
		</main>
	</main>
	<div v-else>
		<not-autorized />
	</div>
</template>

<script>
	import notAutorized from '@/components/UI/not-authorize.vue'
	export default {
		name: 'market-details',
		computed: {
			market() {
				return this.$store.getters.currMarket
			},
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			},
		},
		components: {
			notAutorized,
		},
	}
</script>

<style></style>
