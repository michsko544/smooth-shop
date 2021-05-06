<template>
  <div class="container">
    <NuxtLink :to="linkUrl">
      Shop
    </NuxtLink>
    <div class="dropdown">
      hello
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HeaderDropdown',
  props: {
    dropdownText: {
      type: String,
      default: 'text'
    },
    linkUrl: {
      type: String,
      default: '#'
    }
  }
})
</script>
<style lang="scss" scoped>
  .container {
    height: 100%;

    &:hover a + .dropdown {
        opacity: 1;
        pointer-events: all;
    }

    a{
      height: 100%;
    }

    .dropdown{
      position: absolute;
      width: 100vw;
      height: 200px;
      left: 0;
      opacity: 0;
      pointer-events: none;
      transition: all 0.4s ease-in;
      border: 1px red solid;
    }
  }
</style>
