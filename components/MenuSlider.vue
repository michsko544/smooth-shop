<template>
  <div :class="{container: true, active: $store.state.ui.isMenuOpen}">
    <div class="menu-slider-inner">
      <button class="icon" @click="toggleMenu">
        <XIcon />
      </button>
      <nav>
        <ul>
          <li @click="toggleMenu">
            <NuxtLink :to="routes.HOME_URL">
              Home
            </NuxtLink>
          </li>
          <li @click="toggleMenu">
            <NuxtLink :to="routes.SHOP_URL">
              Shop
            </NuxtLink>
          </li>
          <li @click="toggleMenu">
            <NuxtLink :to="routes.ABOUT_URL">
              About
            </NuxtLink>
          </li>
          <li @click="toggleMenu">
            <NuxtLink :to="routes.BLOG_URL">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import XIcon from '../assets/x.svg'
import routes from '../constants/routes'

export default Vue.extend({
  name: 'MenuSlider',
  components: {
    XIcon
  },
  data () {
    return {
      routes,
      isOpen: this.$store.state.ui.isMenuOpen
    }
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('ui/toggleMenu')
    }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    width: 0%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $white;
    overflow: hidden;
    transition: width 0.5s ease-in-out;
    z-index: 50;

    &.active {
      width: 100%;
    }
  }

  .menu-slider-inner{
    padding: 32px 24px;

    ul{
      margin: 24px 0;
      li{
          font-size: 24px;
          margin-bottom: 16px;
      }
    }
  }

  @media(min-width: $mobile){
    .container{
      display: none;
    }
  }
</style>
