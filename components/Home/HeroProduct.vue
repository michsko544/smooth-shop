<template>
  <div class="container">
    <img :src="image" alt="smoothie">
    <div class="text contentContainer">
      <p>{{ slogan }}</p>
      <h1>{{ title }}</h1>
      <p class="description">
        {{ description }}
      </p>
      <div class="buttons">
        <button class="btn white-btn" @click="button1Handler">
          {{ button1Text }}
        </button>
        <button class="btn black-btn" @click="button2Handler">
          {{ button2Text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroProduct',
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
    button1Text: {
      type: String,
      default: 'Learn More'
    },
    button2Text: {
      type: String,
      default: 'Shop Now'
    },
    button1Handler: {
      type: Function,
      default: () => {}
    },
    button2Handler: {
      type: Function,
      default: () => {}
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1342&q=80'
    }
  }

})
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        position: relative;
    }

    img{
        width:100%;
        height: calc(100vh - #{$header-height} - 64px);
        object-fit: cover;
        object-position: center;
        filter: brightness(75%);
    }

    .text{
      position: absolute;
      bottom: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, 50%);

      p{
        margin-bottom: 4px;
      }

      &>*{
        color: $white;
      }

      .buttons{
        display: flex;
        margin: 24px 0;
        gap: 24px;

        &>*{
          margin-bottom: 12px;
        }
      }
    }

    @media(min-width: $mobile){
      img{
        height: calc(100vh - #{$header-height} - 100px);
      }

      .text{
        bottom: 80px;
        transform: translate(-50%, 0);

        .buttons{
          display: flex;
          width: fit-content;
          flex-direction: row;

          &>*{
            margin-right: 12px;
            margin-bottom: 0;
          }
        }
      }
    }
</style>
