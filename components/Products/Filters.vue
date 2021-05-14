<template>
  <div class="container">
    <div v-if="activeFilters.length" class="activeFilters">
      <div v-for="filter in activeFilters" :key="filter" @click="removeFilter(filter)">
        {{ filter }}
        <XIcon />
      </div>
    </div>
    <div class="filter-inner">
      <div v-for="filter in filters" :key="filter.title" class="active">
        <button>{{ filter.title }}</button>
        <ul>
          <li v-for="option in filter.options" :key="option">
            <label class="filter-input">
              <input type="checkbox" :checked="isActiveFilter(option)" @change="({target})=>changeFilter(target.checked, option)">
              <span class="checkmark" />
              {{ option }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState } from 'vuex'
import { ProductFilter } from '../../models/ProductFilter'
import XIcon from '../../assets/x.svg'
export default Vue.extend({
  name: 'Filters',
  components: {
    XIcon
  },
  props: {
    filters: {
      type: Array as PropType<ProductFilter[]>,
      default: () => ([]),
      required: true
    }
  },
  computed: {
    ...mapState('filters', ['activeFilters'])
  },
  methods: {
    addFilter (filter: string) {
      this.$store.dispatch('filters/addFilter', filter)
    },
    removeFilter (filter: string) {
      this.$store.dispatch('filters/removeFilter', filter)
    },
    changeFilter (checked:boolean, option: string) {
      if (checked) {
        this.addFilter(option)
      } else {
        this.removeFilter(option)
      }
    },
    isActiveFilter (option: string) {
      const isActive = this.activeFilters.find((filter: string) => filter === option)
      return isActive
    }
  }
})
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    height: fit-content;
    padding: 0;
    border-bottom: 1px solid $gray-light;
  }

  .activeFilters{
    padding: 0px 0px 12px 24px;
    overflow-x: auto;
    white-space: nowrap;

    div{
      display:inline-block;
      border: 2px solid $black;
      margin-right: 24px;
      padding: 10px 30px 10px 12px;
      position:relative;
      line-height: 21px;
      cursor: pointer;

      svg{
        width: 16px;
        height: 16px;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
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
        padding: 24px 24px 12px;
        border-bottom: 1px solid $gray-light;
        z-index: 1;

        li{
          padding: 4px 0;
        }
      }
    }
  }

  .filter-input{
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: fit-content;

    &:hover input ~ .checkmark {
      background-color: $gray-light;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: $black;

        &::after{
          display: block;
        }
      }
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 19px;
      width: 19px;
      background-color: $white;
      border: 2px solid $black;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  @media(min-width: $mobile){
    .container {
      padding: 8px;
      border: none;
    }

    .activeFilters{
      padding: 16px;
      overflow-x: unset;
      white-space: unset;

      div{
        margin-right: 12px;
        margin-bottom: 12px;
        padding: 8px 30px 8px 12px;
      }
    }

    .filter-inner {
      display: flex;
      flex-direction: column;
      padding: 16px;

      &>div{
        margin-right: 0px;
        height: fit-content;

        &:hover button + ul {
          opacity: 1;
          height: auto;
          pointer-events: all;
          padding: 24px 0;
        }

        &.active button + ul {
          opacity: 1;
          height: auto;
          pointer-events: all;
          padding: 24px 0;
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
          position:static;
          width: 100%;
          height: 0;
          opacity: 0;
          pointer-events: none;
          transition: height 0.4s ease-in;
          background: $white;
          padding: 0;
          border-bottom: none;
          z-index: 1;

          li{
            padding: 4px 0;
          }
        }
      }
    }
  }
</style>
