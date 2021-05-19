<template>
  <div class="container">
    <NuxtLink :to="link">
      <img :src="image" :alt="imageAlt">
      <div class="card-inner">
        <h3>{{ title }}</h3>
        <p v-if="text">
          {{ text }}
        </p>
        <button class="btn white-btn">
          Shop now
        </button>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CollectionCard',
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: true
    },
    text: {
      type: String,
      default: 'Lorem ipsum',
      required: false
    },
    link: {
      type: String,
      default: '#',
      required: true
    },
    imageAlt: {
      type: String,
      default: 'cake',
      required: false
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
      required: false
    }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover img {
      transform: scale(1.1);
    }

    img{
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      transition: 5s transform linear;
      z-index: -1;
      filter: brightness(80%);
    }

    .card-inner{
      width: 100%;
      height: 100%;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &>:is(h3,p){
        color: $white;
      }

      h3{
        font-size: 24px;
        text-align: center;
      }

      p{
        display:none;
      }

      button{
        display: none;
      }
    }
  }

  @media(min-width: $mobile){
    .container{
      .card-inner{
        justify-content: flex-end;

        &>:is(h3,p){
          color: $white;
        }

        h3{
          margin-bottom: 12px;
          text-align: left;
        }

        p{
          margin-bottom: 24px;
          display:block;
        }

        button{
          max-width: 250px;
          display:block;
        }
      }
    }
  }
</style>
