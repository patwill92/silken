<template>
  <main>
    <Hero/>
  </main>
</template>

<script>
  import Hero from '@/components/home/Hero'

  export default {
    mounted() {
      console.log(this.$style);
    },
    components: {
      Hero
    }
  }
</script>
