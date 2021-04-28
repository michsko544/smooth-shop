<template>
  <div>
    <AppHeader />
    <div class="header-padding">
      <Nuxt />
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="scss">
  $font-color: #222;

  body{
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
    background: $white;
    color: $font-color;
  }

  .header-padding{
    padding-top: $header-height;
  }
</style>
