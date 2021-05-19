<template>
  <div class="collections-grid">
    <CollectionCard title="Donuts" image="https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" :link="routes.COLLECTIONS_URL + '/donuts'" />
    <CollectionCard title="Cakes" :link="routes.COLLECTIONS_URL + '/cakes'" />
    <CollectionCard title="Mini cakes" image="https://images.unsplash.com/photo-1514056052883-d017fddd0426?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80" :link="routes.COLLECTIONS_URL + '/mini-cakes'" />
    <CollectionCard title="Muffins" image="https://images.unsplash.com/photo-1596726648434-e6d14dd3f21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" :link="routes.COLLECTIONS_URL + '/muffins'" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import * as routes from '../constants/routes'
import CollectionCard from './CollectionCard.vue'
export default Vue.extend({
  name: 'Collections',
  components: {
    CollectionCard
  },
  data () {
    return {
      routes
    }
  }
})
</script>
<style lang="scss" scoped>
  .collections-grid{
    display:grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 0 8px;

    &>*{
      width: 100%;
      height: 200px;
    }
  }

  @media(min-width: $mobile){
    .collections-grid{

      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "collection1 collection1 collection2 collection2"
        "collection3 collection4 collection2 collection2";

      &>*{
        width: 100%;
        height: 320px;
      }

      &>div:nth-child(1){
        grid-area: collection1;
      }

      &>div:nth-child(2){
        grid-area: collection2;
        height: 648px;
      }

      &>div:nth-child(3){
        grid-area: collection3;
      }

      &>div:nth-child(4){
        grid-area: collection4;
      }
    }
  }
</style>
