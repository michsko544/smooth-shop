<template>
  <div class="contentContainer container">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <div class="code">
      <SinusIcon />
      <h2>{{ error.statusCode }}</h2>
    </div>
    <p>Back to homepage</p>
    <NuxtLink :to="HOME_URL">
      <button class="btn black-btn">
        Home page
      </button>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SinusIcon from '../assets/sinus.svg'
import { HOME_URL } from '../constants/routes'
export default Vue.extend({
  components: {
    SinusIcon
  },
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  data () {
    return {
      HOME_URL
    }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    margin: 120px auto;

    .code{
      display: flex;
      align-items: center;

      svg{
        width: 80px;
        height: auto;
        margin-right: 12px;
      }

      h2{
        margin: 0;
      }
    }

    p{
      margin-bottom: 24px;
      margin-top: 32px;
    }

    a{
      width: fit-content;
    }
  }
</style>
