<template>
  <div>
    <HeroProduct
      slogan="delicious mini cakes"
      title="Make the Most of Morning"
      description="The quickest, easiest way to get in your fruits and veggies"
      image="https://images.unsplash.com/photo-1601409751311-cbecfe223af4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    <HomeProducts />
    <Collections />
    <RichText title="Modular has a simple mission, fresh, delicious, and healthy." text="Popular vegetables are cucumber, carrots, celery, spinach, beets, kale, and romaine. Great fruits for juicing are oranges, lemons, apples, and limes. You can also add-in fresh ginger, turmeric, andparsley." />
    <HomeContent
      title="You've Always Dreamed Of"
      description="With just enough ginger to let you know you’re alive"
      slogan="THE SWEET, FRESH MORNING CAKE"
      image2="https://images.unsplash.com/photo-1615484477676-c6f3c18e8462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      image3="https://images.unsplash.com/photo-1591754550580-890a9016b687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      image4="https://www.lesaffre.pl/_cache/news/950-0/fit/melasa_1.jpg"
    />
    <Opinions />
    <Cta image="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroProduct from '../components/Home/HeroProduct.vue'
import HomeProducts from '../components/Home/HomeProducts.vue'
import Collections from '../components/Home/Collections.vue'
import RichText from '../components/Home/RichText.vue'
import Opinions from '../components/Home/Opinions.vue'
import HomeContent from '../components/Home/HomeContent.vue'

export default Vue.extend({
  components: {
    HeroProduct,
    HomeProducts,
    Collections,
    RichText,
    Opinions,
    HomeContent
  }
})
</script>

<style lang="scss">

</style>
