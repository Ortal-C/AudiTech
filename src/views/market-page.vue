<template>
	<div class="markets">
		<h1>This is Markets</h1>
    <market-list :markets="markets"/>
	</div>
</template>

<script>
import marketList from '@/components/market/market-list.vue'
	export default {
		name: 'markets-page',
    created () {
      this.$store.dispatch({type: 'loadMarkets'});
    },
    computed:{
      markets(){
        return this.$store.getters.markets;
      }
    },
    components: {
      marketList,
    },
	}
</script>

<style></style>
