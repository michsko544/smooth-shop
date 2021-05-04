<template>
  <div>
    <HeroProduct
      slogan="BLENDED SMOOTHIES"
      title="Make the Most of Morning"
      description="The quickest, easiest way to get in your fruits and veggies"
    />
    <HomeProducts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import image from '../assets/heroproduct.jpg'
import HeroProduct from '../components/Home/HeroProduct.vue'
import HomeProducts from '../components/Home/HomeProducts.vue'

export default Vue.extend({
  components: {
    HeroProduct,
    HomeProducts
  },
  data () {
    return {
      image
    }
  }
})
</script>

<style lang="scss">

</style>
