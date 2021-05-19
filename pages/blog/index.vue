<template>
  <section>
    <BlogPostGrid />
    <Cta image="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Cta from '../../components/Cta.vue'
import BlogPostGrid from '../../components/Blog/BlogPostGrid.vue'
export default Vue.extend({
  components: {
    BlogPostGrid,
    Cta
  }
})
</script>
<style lang="scss" scoped>

</style>
