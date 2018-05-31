<template>
  <div :class="$style.root">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/global/Footer'
  import Header from '@/components/global/Header'

  export default {
    components: {
      Footer,
      Header
    }
  }
</script>

<style module lang="sass">
  .root
    min-height: inherit
    width: inherit
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: auto 1fr auto
</style>
