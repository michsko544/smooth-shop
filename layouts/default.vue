<template>
  <div>
    <MenuSlider />
    <AppHeader />
    <Nuxt />
    <AppFooter />
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

  button.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    border:none;
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
    font-size: 15px;
  }

  button.btn:hover{
    opacity: 0.7;
  }

  h1{
    font-size: 48px;
    margin-bottom: 16px;
  }

  h2{
    font-size: 28px;
    margin-bottom: 12px;
  }

  .slogan{
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
  }

  .icon{
    width: 22px;
    background: none;
    border: none;
    color: $gray;
    cursor: pointer;
  }

  .black-btn{
    color: $white;
    background: $black;
  }

  .white-btn{
    color: $black;
    background: $white;
  }

  @media(min-width: $mobile){
    button.btn{
      width: 160px;
    }

    h1{
      font-family: 'Rubik', sans-serif;
      font-size: 48px;
      font-weight: normal;
    }

    p{
      font-size: 16px;
    }
  }
</style>
