<template>
  <header class="navbar has-shadow is-spaced h-padding-tb-5 h-padding-tb-lg-10" role="navigation" aria-label="main navigation">
    <div class="container h-align-center h-justify-between" :class="$style.container">
      <div class="navbar-brand h-margin-l-0">
        <nuxt-link :class="$style.logoWrapper" class="navbar-item h-padding-0" to="/">
          <span :class="$style.logo" class="navbar-item has-text-primary h-margin-l-10 h-margin-l-lg-0 h-padding-10">
            <span :class="$style.icon" class="h-display-inline-flex">
              <v-icon icon="Logo"/>
            </span>
          </span>
          <span class="h-margin-l-10" :class="$style.logoText">
            <span class="is-uppercase h-display-block h-font-bold">kripto</span>
            <span class="is-uppercase h-display-block h-font-bold">mobile</span>
          </span>
        </nuxt-link>
      </div>
        <Menu/>
    </div>
  </header>
</template>

<script>
  import Burger from './Burger'
  import Menu from './Menu'

  export default {
    components: {
      Burger,
      Menu
    }
  }
</script>

<style module lang="sass">
  .container
    display: flex !important
    flex-wrap: wrap
  .logo
    border: 3px solid $primary
    border-radius: 50% !important
    display: inline-flex !important
    font-size: 20px
    line-height: 20px
    +desktop
      font-size: 30px
    .icon
      position: relative
      left: -1px
  .logoText
    span
      line-height: 18px
      font-size: 15px
      +desktop
        line-height: 20px
        font-size: 16px
  .logoWrapper
    order: 1
    &:hover
      color: hsl(0, 0%, 29%) !important
</style>
