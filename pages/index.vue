<template>
  <HeroProduct 
    slogan="BLENDED SMOOTHIES"
    title="Make the Most of Morning"
    description="The quickest, easiest way to get in your fruits and veggies"
    button1Text="Learn More"
    button2Text="Shop Now"
    :image="image" />
</template>

<script lang="ts">
import HeroProduct from "../components/Home/HeroProduct"
import image from "../assets/heroproduct.jpg";
import Vue from 'vue'

export default Vue.extend({
  components: {
    HeroProduct
  },
  data() {
    return {
      image
    }
  }
})
</script>

<style lang="scss">

</style>
