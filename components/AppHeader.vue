<template>
  <header>
    <nav>
      <div class="contentContainer nav-inner">
        <div>
          <button class="only-mobile icon" @click="toggleMenu">
            <BurgerIcon />
          </button>
          <ul class="only-desktop">
            <li>
              <NuxtLink :to="routes.HOME_URL">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="routes.SHOP_URL">
                Shop
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="routes.ABOUT_URL">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="routes.BLOG_URL">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="logo">
          Logo
        </div>
        <div class="buttons-wrapper">
          <button class="icon">
            <UserIcon />
          </button>
          <button class="icon">
            <CartIcon />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import CartIcon from '../assets/cart.svg'
import UserIcon from '../assets/user.svg'
import BurgerIcon from '../assets/burger.svg'
import routes from '../constants/routes'
export default Vue.extend({
  name: 'AppHeader',
  components: {
    CartIcon,
    UserIcon,
    BurgerIcon
  },
  data () {
    return {
      routes
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
    header{
        position: sticky;
        top:0;
        left: 0;
        width: 100%;
        z-index: 40;
    }

    nav{
        width:100%;
        background: $white;
        height: $header-height;

        ul{
            display: flex;

            li{
              margin-right: 32px;

              a{
                position: relative;
              }

              a::after{
                content: "";
                display: block;
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                border-bottom: 2px solid $black;
                transform-origin: 100% 50%;
                transform: scaleX(0);
                transition: transform .2s ease-in-out;
              }

              a:hover::after{
                border-bottom: 2px solid $black;
                transform: scaleX(1);
                transform-origin: 0 50%;
              }
            }
        }

        .logo{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }

        .buttons-wrapper{
          &>*{
            margin-left: 16px;
          }
        }
    }

    .nav-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 100%;
    }

</style>
