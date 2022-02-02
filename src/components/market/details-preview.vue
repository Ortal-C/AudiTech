<template>
	<div class="details-preview">
		<span class="key">{{ key }}:</span>
		{{ value }}
	</div>
</template>

<script>
	import { utilService } from '@/services/util.service.js'
	export default {
		name: 'market-title',
		props: ['name', 'value'],
		computed: {
			key() {
				return utilService.camelCaseToWord(this.name)
			},
		},
	}
</script>
