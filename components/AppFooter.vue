<template>
  <footer>
    <Newsletter />
    <div class="links-container contentContainer">
      <div>Logo</div>
      <div>
        <h3>Helpful Links</h3>
        <ul>
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
      <div>
        <h3>Collections</h3>
        <ul>
          <li>
            <NuxtLink to="#">
              Cakes
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              Donuts
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              Mini Cakes
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              Muffins
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3>About us</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>Quibusdam fugit quo praesentium numquam exercitationem nulla illo dolor! Minima facilis nisi libero quisquam, natus veniam qui!</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="contentContainer footer-bottom-inner">
        <div>
          <small>&copy; 2021</small>
          <small>Site by Majk</small>
        </div>
        <div>
          Social Icons
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'
import routes from '../constants/routes'
import Newsletter from './Newsletter.vue'
export default Vue.extend({
  name: 'AppFooter',
  components: {
    Newsletter
  },
  data () {
    return {
      routes
    }
  }
})
</script>
<style lang="scss" scoped>
  footer{
    h3{
      margin-bottom: 16px;
    }

    ul{
      li{
        margin-bottom: 6px;
      }
    }
  }

  .links-container{
    &>div{
      margin: 32px auto;
    }
  }

  .footer-bottom{
    background: #fafcff;

    .footer-bottom-inner{
      padding-top: 24px;
      padding-bottom: 24px;

      small{
        display: block;
        opacity: 0.8;
        margin-bottom: 4px;
      }
    }
  }

  @media(min-width: $mobile){
    .links-container{
      display:flex;

      &>div{
        flex-basis: 25%;
        margin: 64px auto 48px;
      }
    }

    .footer-bottom{
      .footer-bottom-inner{
        display: flex;
        justify-content: space-between;
        padding-top: 48px;
        padding-bottom: 48px;
      }
    }
  }
</style>
