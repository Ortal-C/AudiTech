<template>
	<header class="app-header">
		<div class="logo">Market</div>
    <div v-if="isLoggedIn" >
      <user-icon />
    </div>
	</header>
</template>

<script>
import userIcon from '@/components/UI/user-icon.vue'
	export default {
		name: 'app-header',
    data(){
      return{
        user:null,
      }
    },
    computed: {
      isLoggedIn(){
        return this.$store.getters.isLoggedin;
      }
    },
    components: {
      userIcon,
    },

	}
</script>
