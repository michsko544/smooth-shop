<template>
  <div class="container">
    <div class="products-container">
      <ProductCard title="Raspberry Brownie" :quantity="0" :sale-price="5" image="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?cs=srgb&dl=pexels-vojtech-okenka-1055272.jpg&fm=jpg" />
      <ProductCard title="Fruit Happiness" :sale-price="8" image="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      <ProductCard :quantity="0" />
      <ProductCard />
    </div>
    <button class="btn white-btn" @click="redirectToShop">
      Shop Now
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { SHOP_URL } from '../../constants/routes'
import ProductCard from '../ProductCard.vue'
export default Vue.extend({
  name: 'HomeProducts',
  components: {
    ProductCard
  },
  data () {
    return {
      SHOP_URL
    }
  },
  methods: {
    redirectToShop () {
      this.$router.push(SHOP_URL)
    }
  }
})
</script>
<style lang="scss" scoped>
  .container {

    button{
      border: 2px solid $black;
      max-width: 250px;
      margin: 24px auto;
    }
  }

  .products-container{
    overflow-x: scroll;
    overflow-y: hidden;
    display:flex;
    padding: 0 4px;

    &>* {
      width: 25vw;
      min-width: 300px;
      height: 480px;
      flex-shrink: 0;
    }
  }

  @media(min-width: $mobile){
    .products-container{
      overflow: hidden;

      &>* {
        width: 25%;
      }
    }
  }
</style>
