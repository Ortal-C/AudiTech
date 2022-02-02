<template>
	<main v-if="market && isLoggedIn" class="market-details">
		<backdrop @close="showMarketPage" />
		<main class="main-content">
			<header>
				<market-title
					:market="market"
					:bgc="market.tagBackgroundColor"
				/>
				<button @click="closeMarketDetails" title="Back to list">X</button>
			</header>
			<ul>
				<li v-for="(value, name) in market" :key="name">
					<details-preview
						v-if="name !== 'tagBackgroundColor'"
						:name="name"
						:value="value"
					/>
				</li>
			</ul>
		</main>
	</main>
	<main v-else>
		<not-autorized />
	</main>
</template>

<script>
	import marketTitle from '@/components/market/market-title.vue'
	import detailsPreview from '@/components/market/details-preview.vue'
	import backdrop from '@/components/UI/modal/backdrop.vue'
	import notAutorized from '@/components/UI/not-authorize.vue'
	export default {
		name: 'market-details',
		methods: {
			showMarketPage() {
				this.$router.back()
			},
			closeMarketDetails(){
				this.$store.commit({type: 'setCurrMarket', currMarket: null})
				this.$router.back();
			},
		},
		computed: {
			market() {
				return this.$store.getters.currMarket
			},
			isLoggedIn() {
				return this.$store.getters.isLoggedin
			},
		},
		components: {
			marketTitle,
			detailsPreview,
			notAutorized,
			backdrop,
		},
	}
</script>

<style></style>
