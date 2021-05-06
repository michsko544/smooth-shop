<template>
  <section>
    <div>
      <img :src="image1" alt="main">
    </div>
    <div>
      <p class="slogan">
        {{ slogan }}
      </p>
      <h2>{{ title }}</h2>
      <p class="description">
        {{ description }}
      </p>
      <button class="btn white-btn" @click="redirectToShop">
        Shop Now
      </button>
    </div>
    <div>
      <img :src="image2" alt="small">
    </div>
    <div>
      <img :src="image3" alt="small">
    </div>
    <div>
      <img :src="image4" alt="small">
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { SHOP_URL } from '../../constants/routes'
export default Vue.extend({
  name: 'HomeContent',
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: true
    },
    slogan: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image1: {
      type: String,
      default: 'https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80'
    },
    image2: {
      type: String,
      default: 'https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80'
    },
    image3: {
      type: String,
      default: 'https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80'
    },
    image4: {
      type: String,
      default: 'https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80'
    }
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
  section{
    margin: 64px auto;
    padding: 0 8px;
    display: grid;
    grid-template-columns: 1fr;
    gap:8px;

    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    &>div:nth-child(2){
      padding: 24px;

      p{
        margin-bottom: 12px;
      }
      .description{
        margin-bottom: 32px;
      }
      button {
        border: 2px solid $black;
        max-width: 250px;
      }
    }

    &>div:nth-child(3){
      display: none;
    }

    &>div:nth-child(4){
      display: none;
    }

    &>div:nth-child(5){
      display: none;
    }
  }

  @media(min-width:$mobile) {
    section {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 400px 263px;
      grid-template-areas:
        "text text text mainimg mainimg mainimg"
        "img2 img3 img4 mainimg mainimg mainimg";

      img {
        height: 100%;
      }

      &>div:nth-child(1){
        grid-area: mainimg;
      }

      &>div:nth-child(2){
        grid-area: text;
        height: 400px;
        padding: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &>*{
          text-align: center;
        }
      }

      &>div:nth-child(3){
        grid-area: img2;
        display: block;
      }

      &>div:nth-child(4){
        grid-area: img3;
        display: block;
      }

      &>div:nth-child(5){
        grid-area: img4;
        display: block;
      }
    }
  }
</style>
