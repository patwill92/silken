<template>
  <component :class="$style.icon" :is="renderIcon"/>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      icon: {
        type: String
      }
    },
    computed: {
      renderIcon() {
        return () => import(`./${this.icon}`)
      }
    }
  }
</script>


<style module lang="sass">
  .icon
    display: inline-block
    font-size: inherit
    height: 1em
    overflow: visible
    vertical-align: -.125em
    width: 1em
</style>
