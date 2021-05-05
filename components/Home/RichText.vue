<template>
  <div class="container contentContainer">
    <h2>{{ title }}</h2>
    <SinusIcon class="vertical" />
    <p>{{ text }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import SinusIcon from '../../assets/sinus.svg'
export default Vue.extend({
  name: 'RichText',
  components: {
    SinusIcon
  },
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: true
    },
    text: {
      type: String,
      default: 'Lorem ipsum',
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>

  .container{
    width: 100%;

    h2{
      font-size: 28px;
      margin-bottom: 0;
    }
  }
  .vertical{
    width: 120px;
    height: auto;
  }

@media(min-width: $mobile){
  .container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 64px auto;

    h2, p{
      width: 100%;
      max-width: 45%;
    }

  }
  .vertical{
    transform:rotate(90deg);
    width: 120px;
    height: auto;
  }
}
</style>
