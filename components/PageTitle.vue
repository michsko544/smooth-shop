<template>
  <div class="container">
    <img :src="image" alt="cover">
    <h1 class="contentContainer">
      {{ title }}
    </h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageTitle',
  props: {
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1603532583196-b102aba7ebab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
    },
    title: {
      type: String,
      default: 'Default title'
    }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    width: 100%;
    position: relative;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: -1;
      filter:brightness(80%);
    }

    h1{
      padding-top: 64px;
      padding-bottom: 64px;
      color: $white;
    }
  }

  @media(min-width: $mobile){
    .container{

      h1{
        padding-top: 350px;
      }
    }
  }
</style>
