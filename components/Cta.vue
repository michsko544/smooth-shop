<template>
  <div class="cta" :style="{backgroundImage: `url(${image})`}">
    <h2>Give yourself a sweet treat.</h2>
    <button class="btn white-btn">
      <NuxtLink :to="SHOP_URL">
        Shop Now
      </NuxtLink>
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { SHOP_URL } from '../constants/routes'
export default Vue.extend({
  name: 'Cta',
  props: {
    image: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      SHOP_URL
    }
  }
})
</script>
<style lang="scss" scoped>
  .cta{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 12px 24px;
    background-size: cover;
    background-position: center;
    height: 250px;
    margin: 64px 0;

    h2{
      margin-bottom: 48px;
      text-align: center;
    }

    button {
      max-width: 150px;
    }
  }

  @media(min-width: $mobile){
    .cta{
      height: 350px;

      button {
        max-width: unset;
      }
    }
  }
</style>
