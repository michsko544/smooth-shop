<template>
  <div class="container contentContainer">
    <h2>
      Testimonials
    </h2>
    <div class="grid">
      <Opinion />
      <Opinion text="Great family business producing wonderful, creative cakes." author="Patrick Daniels" />
      <Opinion text="Just been part of a small class of friends to create some Christmas cupcakes. Really enjoyed it, can't wait to try them!!" author="Becca Wait" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Opinion from '../Opinion.vue'
export default Vue.extend({
  name: 'Opinions',
  components: {
    Opinion
  }
})
</script>
<style lang="scss" scoped>
  .container{
    width: 100%;
    margin: 24px auto;

    h2{
      margin-bottom: 32px;
    }
  }

  @media(min-width: $mobile){
    .grid{
      display: flex;
      flex-basis: 33%;
      justify-content: space-between;
      gap: 72px;
    }
  }
</style>
