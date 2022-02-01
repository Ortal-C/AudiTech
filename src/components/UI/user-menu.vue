<template>
	<section class="user-menu" @click="closeMenu">
		<div class="menu">
			<h4>Hi, {{ user.username }}</h4>
			<button @click="updateData">Update List</button>
			<button @click="doLogout">Logout</button>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'user-menu',
		props: ['user'],
		methods: {
			closeMenu() {
				this.$emit('closeMenu')
			},
            async updateData(){
                try{
                    await this.$store.dispatch({
                            type: 'resetMarkets',
                        })  
                    await this.$store.dispatch({
                            type: 'loadMarkets',
                        })  
                }catch (err) {
					console.log('Failed to reload markets', err)
				}
            },
			async doLogout() {
				try {
					await this.$store.dispatch({
						type: 'logout',
					})
                    this.$router.push('/')
				} catch (err) {
					console.log('Failed to login', err)
				}
			},
		},
	}
</script>

<style></style>
