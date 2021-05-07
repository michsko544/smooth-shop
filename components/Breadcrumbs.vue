<template>
  <nav v-if="links.length>0">
    <div v-for="(link, index) in links" :key="link.url" class="element">
      <NuxtLink v-if="index !== links.length - 1" :to="link.url">
        {{ link.text }}
      </NuxtLink>
      <span v-else>{{ link.text }}</span>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { Breadcrumb } from '../models/Breadcrumb'
export default Vue.extend({
  name: 'Breadcrumbs',
  props: {
    links: {
      type: Array as PropType<Breadcrumb[]>,
      default: () => ([{ text: '', url: '' }]),
      required: true
    }
  }
})
</script>
<style lang="scss" scoped>
  nav{
    display: flex;

    .element{
      margin-right: 6px;

      a{
        opacity: 0.6;
        transition: 0.1s opacity ease-in;

        &:hover{
          opacity: 1;
        }
      }

      &::after{
        content: "/";
      }

      &:last-child {

        &::after{
          content: "";
        }
      }
    }
  }
</style>
