<template>
  <section>
    <Breadcrumbs :links="breadcrumbLinks" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import routes from '../../constants/routes'
export default Vue.extend({
  components: {
    Breadcrumbs
  },
  data () {
    return {
      routes,
      productId: this.$route.params.id,
      breadcrumbLinks: [
        { text: 'Home', url: routes.HOME_URL },
        { text: 'Collections', url: routes.COLLECTIONS_URL },
        { text: 'All', url: routes.SHOP_URL },
        { text: `Product ${this.$route.params.id}`, url: routes.SHOP_URL + `/${this.$route.params.id}` }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>

</style>
