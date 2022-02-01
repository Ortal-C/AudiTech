<template>
	<div class="backdrop" @click="closeModal"></div>
</template>

<script>
	export default {
		name: 'backdrop',
		methods: {
			closeModal() {
				this.$emit('close')
			},
		},
	}
</script>

<style></style>
