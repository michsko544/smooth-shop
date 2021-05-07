<template>
  <div class="products-grid">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ProductCard from '../ProductCard.vue'
export default Vue.extend({
  name: 'ProductGrid',
  components: {
    ProductCard
  }
})
</script>
<style lang="scss" scoped>
  .products-grid{
    display:grid;
    padding: 4px;
    grid-template-columns: 1fr;
    row-gap: 8px;
  }

  @media(min-width: $mobile){
    .products-grid{
      grid-template-columns: repeat(4,1fr);
    }
  }
</style>
