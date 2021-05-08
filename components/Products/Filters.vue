<template>
  <div class="container">
    <div class="filter-inner">
      <div v-for="filter in filters" :key="filter.title">
        <button>{{ filter.title }}</button>
        <ul>
          <li v-for="option in filter.options" :key="option">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { ProductFilter } from '../../models/ProductFilter'
export default Vue.extend({
  name: 'Filters',
  props: {
    filters: {
      type: Array as PropType<ProductFilter[]>,
      default: () => ([]),
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: fit-content;
    padding: 0;
    border-bottom: 2px solid $black;
  }

  .filter-inner {
    display: flex;
    padding: 12px 24px;

    &>div{
      height: 100%;
      margin-right: 48px;

      &:hover button + ul {
        opacity: 1;
        pointer-events: all;
      }

      button {
        height: 100%;
        font-size: 16px;
        border: none;
        outline: none;
        background: none;
        color: $black;
        font-family: "Work Sans";
        cursor: pointer;
      }

      ul{
        position: absolute;
        width: 100vw;
        left: 0;
        opacity: 0;
        pointer-events: none;
        transition: all 0.4s ease-in;
        background: $white;
        padding: 12px 24px;
        border-bottom: 2px solid $black;
        z-index: 1;

        li{
          padding: 4px 0;
        }
      }
    }
  }
</style>
