<template>
  <div>
    <HeroProduct
      slogan="BLENDED SMOOTHIES"
      title="Make the Most of Morning"
      description="The quickest, easiest way to get in your fruits and veggies"
    />
    <HomeProducts />
    <Collections />
    <RichText title="Modular has a simple mission, fresh, delicious, and healthy." text="Popular vegetables are cucumber, carrots, celery, spinach, beets, kale, and romaine. Great fruits for juicing are oranges, lemons, apples, and limes. You can also add-in fresh ginger, turmeric, andparsley." />
    <Opinions />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroProduct from '../components/Home/HeroProduct.vue'
import HomeProducts from '../components/Home/HomeProducts.vue'
import Collections from '../components/Home/Collections.vue'
import RichText from '../components/Home/RichText.vue'
import Opinions from '../components/Home/Opinions.vue'

export default Vue.extend({
  components: {
    HeroProduct,
    HomeProducts,
    Collections,
    RichText,
    Opinions
  }
})
</script>

<style lang="scss">

</style>
