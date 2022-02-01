<template>
	<main v-if="isLoggedIn" class="market-details">
		<backdrop @close="showMarketPage" />
		<main class="main-content">
			<h1>{{ market ? market.shortName : '' }}</h1>
			<ul>
				<li v-for="(value, name) in market" :key="name">
					<span class="key">
						{{
							name.charAt(0).toUpperCase() +
							name
								.slice(1)
								.replace(/([A-Z])/g, ' $1')
								.toLowerCase()
						}}:
					</span>
					{{ value }}
				</li>
			</ul>
		</main>
	</main>
	<div v-else>
		<not-autorized />
	</div>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
	import backdrop from '@/components/UI/modal/backdrop.vue'
	import notAutorized from '@/components/UI/not-authorize.vue'
	export default {
		name: 'market-details',
		data() {
			return { currName: '', currValue: '' }
		},
		methods: {
			showMarketPage() {
				this.$router.back()
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
			notAutorized,
			backdrop,
		},
	}
</script>

<style></style>
