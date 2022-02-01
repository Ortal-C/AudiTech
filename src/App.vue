<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>


<script>
import appHeader from '@/components/layout/app-header.vue'
export default {
  components: {
    appHeader,
  },
  methods: {
    removeClass() {
      document.body.classList.remove('details-open')
      if (this.$route.params.cardId) this.$router.back()
    }
  }
}
</script>