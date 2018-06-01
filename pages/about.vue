<template>
  <main>
    <Hero/>
    <div class="row">
      <h1>ABOUT</h1>
    </div>
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
