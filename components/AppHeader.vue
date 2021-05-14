<template>
  <header @click="dropdownOpen=false">
    <div :class="{banner: true, hide: scrollPosition !== 0}">
      Free shipping for all orders +20 EUR
    </div>
    <nav :class="{big: scrollPosition===0}">
      <div class="navInner contentContainer">
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
            <li @mouseenter="dropdownOpen=true">
              <NuxtLink :to="routes.SHOP_URL">
                Shop
              </NuxtLink>
              <ArrowIcon />
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
          <NuxtLink :to="routes.HOME_URL">
            <img :src="logo" alt="logotype">
          </NuxtLink>
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
    <div :class="{dropdown: true, open: dropdownOpen}" @mouseleave="dropdownOpen=false">
      <div class="dropdown-inner contentContainer">
        <div class="grid">
          <div class="image-wrapper">
            <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="dropdown">
          </div>
          <div>
            <h3>
              <NuxtLink :to="routes.SHOP_URL">
                Cakes
              </NuxtLink>
            </h3>
            <ul>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Birthday
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Wedding
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Vege
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <NuxtLink :to="routes.SHOP_URL">
                Mini cakes
              </NuxtLink>
            </h3>
            <ul>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Birthday
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Wedding
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Vege
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <NuxtLink :to="routes.SHOP_URL">
                Donuts
              </NuxtLink>
            </h3>
            <ul>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Glazed Donuts
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Sprinkled Donuts
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Jelly Donuts
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Sour Cream Donut
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Boston Cream Donut
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Cinnamon Twist Donuts
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Crullers
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Cronuts
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Long John
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Cronuts
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              <NuxtLink :to="routes.SHOP_URL">
                Muffins
              </NuxtLink>
            </h3>
            <ul>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Apple-Cinnamon Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Banana Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Berrylicious Blueberry Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Chocolate Chip Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Cornbread Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Honey Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Morning Glory Muffins
                </NuxtLink>
              </li>
              <li>
                <NuxtLink :to="routes.SHOP_URL">
                  Pumpkin and Cream Cheese Muffins with Pecan Streusel
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import CartIcon from '../assets/cart.svg'
import UserIcon from '../assets/user.svg'
import BurgerIcon from '../assets/burger.svg'
import ArrowIcon from '../assets/dropdown-arrow.svg'
import routes from '../constants/routes'
import Logo from '../assets/logo.png'
export default Vue.extend({
  name: 'AppHeader',
  components: {
    CartIcon,
    UserIcon,
    BurgerIcon,
    ArrowIcon
  },
  data () {
    return {
      routes,
      scrollPosition: 0,
      dropdownOpen: false,
      logo: Logo
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('ui/toggleMenu')
    },
    updateScroll () {
      if (Math.abs(window.scrollY - this.scrollPosition) > 200 || window.scrollY === 0) {
        this.scrollPosition = window.scrollY
      }
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

    .banner{
      width: 100%;
      background-color: $gray-light;
      font-size: 12px;
      color: $black;
      padding-top: 8px;
      padding-bottom: 8px;
      text-align: center;
      transition: 0.3s all ease-out;

      &.hide {
        height: 0;
        padding: 0;
        overflow: hidden;
      }
    }

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

    nav{
        width:100%;
        background: $white;
        height: calc( #{$header-height} - 30px );
        transition: 0.3s height ease-out;

        ul{
            display: flex;

            li{
              margin-right: 36px;
              display: flex;

              svg{
                transform: translateY(1px);
              }
            }
        }

        .logo{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%) ;
            height: 100%;

            img{
              height: 100%;
              object-fit: contain;
              transform: scale(1.5);
            }

            a::after{
              border:none;
            }
        }

        .buttons-wrapper{
          &>*{
            margin-left: 16px;
          }
        }

        &.big{
          height: $header-height;
        }
    }

    .navInner{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 100%;
      overflow-y: hidden;
    }

    .dropdown{
      position: fixed;
      width: 100vw;
      background:$white;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease-in;

      &.open{
        opacity: 1;
        pointer-events: all;
      }

      .dropdown-inner{
        padding-top: 24px;
        padding-bottom: 48px;
      }

      .grid{
        display:grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 32px;

        .image-wrapper{
          width: 100%;
          grid-column: 1/3;
          padding-bottom: 100%;
          display: block;
          position: relative;

          img{
            object-fit: cover;
            width: 100%;
            height: 100%;
            position:absolute;
          }
        }

        h3{
          margin-bottom: 20px;
        }
        ul{
          li{
            margin-bottom: 12px;
          }
        }
      }
    }
</style>
