<template>
  <div class="opinion">
    <p>{{ text }}</p>
    <div>
      <SinusIcon />
      <span>{{ author }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SinusIcon from '../assets/sinus.svg'
export default Vue.extend({
  name: 'Opinion',
  components: {
    SinusIcon
  },
  props: {
    author: {
      type: String,
      default: 'John Doe',
      required: true
    },
    text: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus distinctio illo totam itaque perferendis quasi cupiditate maxime, inventore obcaecati? Soluta!',
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
  .opinion{
    width: 100%;
    margin-bottom: 24px;

    &>div{
      display: flex;
      align-items: center;
      justify-content: flex-end;

      svg{
        width: 80px;
        height: auto;
        margin-right: 12px;
      }
    }
  }
</style>
