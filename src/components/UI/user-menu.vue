<template>
	<section class="user-menu">
		<backdrop @close="close" />
		<main >
			<h4>Hi, {{ user.username }}</h4>
			<button @click="updateData">Update List</button>
			<button @click="doLogout">Logout</button>
		</main>
	</section>
</template>

<script>
	import backdrop from '@/components/UI/modal/backdrop.vue'
	export default {
		name: 'user-menu',
		props: ['user'],
		methods: {
			close() {
				this.$emit('close')
			},
            async updateData(){
                try{
					this.close()
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
					this.close()
                    this.$router.back('/')
				} catch (err) {
					console.log('Failed to login', err)
				}
			},
		},
			components: {
				backdrop,
			},
	}
</script>

<style></style>
