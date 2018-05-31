<script>
  export default {
    name: 'DesktopMenu',
    functional: true,
    render(h, ctx) {
      const {$style} = ctx;
      return [
        <nav class={['h-display-flex h-align-center h-justify-center h-justify-lg-end', $style.nav]}>
          <div class="h-display-flex h-align-center h-justify-end">
            <nuxt-link class={['navbar-item is-capitalized', $style.medium]} to="/about">about</nuxt-link>
            <nuxt-link class={['navbar-item is-capitalized', $style.medium]} to="/feed">feed</nuxt-link>
            <nuxt-link class={['navbar-item is-capitalized', $style.medium]} to="/contact">contact</nuxt-link>
          </div>
        </nav>,
        <div class={['h-display-flex h-align-center', $style.emailWrapper]}>
          <span class={[$style.email, 'h-margin-l-10 h-display-flex h-align-center h-padding-lr-20']}>
            <span class={[$style.icon, 'h-display-inline-flex']}>
              <v-icon icon="Envelope"/>
            </span>
            <a class={['h-padding-l-10 h-padding-l-lg-0 h-margin-l-10', $style.link]}>
              <span class="h-display-none h-display-lg-inline">kteam@kriptomobile.com</span>
              <span class={['h-display-lg-none h-padding-l-5', $style.iconTwitter]}>
                <v-icon icon="Twitter"/>
              </span>
            </a>
          </span>
        </div>
      ]
    }
  }
</script>

<style module lang="sass">
  .nav
    order: 3
    flex-basis: 100%
    +desktop
      justify-self: flex-end
      order: 2
      flex: 1
    .medium
      font-weight: 600
  .emailWrapper
    order: 2
    +desktop
      order: 3
  .email
    font-size: 18px
    +desktop
      border-left: 1px solid #dddddd
  .icon
    position: relative
    top: 2px
  .iconTwitter
    position: relative
    top: 1px
  .link
    border-left: 1px solid #dddddd
    color: hsl(0, 0%, 29%) !important
    text-decoration: none
    font-weight: 600
    font-size: 16px
    +desktop
      border-left: none
</style>
