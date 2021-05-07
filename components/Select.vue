<template>
  <select :value="selectedValue" :name="name" @change="handleChange">
    <option v-for="option in options" :key="option">
      {{ option }}
    </option>
  </select>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'Select',
  props: {
    selectedValue: {
      type: String,
      default: '',
      required: true
    },
    options: {
      type: Array as PropType<string[]>,
      default: () => ([]),
      required: true
    },
    handleChange: {
      type: Function,
      default: () => {},
      required: true
    },
    name: {
      type: String,
      default: ''
    }
  }
})
</script>
<style lang="scss" scoped>
  select {
    width: 100%;
    max-width: 250px;
    height: 45px;
    border: 2px solid $black;
    outline: none;
    padding: 10px 14px;
    font-size: 14px;
    font-family: "Work Sans"
  }
</style>
