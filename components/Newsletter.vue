<template>
  <div class="container contentContainer">
    <h2>Newsletter</h2>
    <p>Let's keep in touch</p>
    <div>
      <input type="email" placeholder="Email">
      <button>
        <ArrowIcon />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ArrowIcon from '../assets/arrow.svg'
export default Vue.extend({
  name: 'Newsletter',
  components: {
    ArrowIcon
  }
})
</script>
<style lang="scss" scoped>
  .container{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin: 24px auto;

    div{
      display: flex;
      max-width: 400px;
      width: 100%;
      margin-top: 32px;

      input{
        width: 100%;
        height: 45px;
        border: 2px solid $black;
        outline: none;
        padding: 10px 14px;
        font-size: 14px;
        font-family: "Work Sans"
      }

      button {
        cursor:pointer;
        width: 45px;
        height: 45px;
        border: 2px solid $black;
        background: $white;
        border-left: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s all ease-in-out;

        &:hover{
          background: #eee;
        }
      }
    }
  }

  @media(min-width: $mobile){
    .container {
      align-items: center;
    }
  }
</style>
