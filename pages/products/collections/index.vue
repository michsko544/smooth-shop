<template>
  <section>
    <PageTitle title="Collections" />
    <div class="collections-container contentContainer">
      <div class="breadcrumbsElement">
        <Breadcrumbs :links="breadcrumbLinks" />
      </div>
      <Collections />
    </div>
    <Cta image="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Collections from '../../../components/Collections.vue'
import Breadcrumbs from '../../../components/Breadcrumbs.vue'
import PageTitle from '../../../components/PageTitle.vue'
import Cta from '../../../components/Cta.vue'
import routes from '../../../constants/routes'
export default Vue.extend({
  components: {
    Collections,
    Breadcrumbs,
    PageTitle,
    Cta
  },
  data () {
    return {
      routes,
      breadcrumbLinks: [
        { text: 'Home', url: routes.HOME_URL },
        { text: 'Collections', url: routes.COLLECTIONS_URL }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
  .collections-container{
    .breadcrumbsElement{
      margin: 12px auto 32px;
    }

    .collections-grid{
      padding: 0;
    }
  }

  @media(min-width: $mobile){
   .collections-container{
      margin: 64px auto 100px;
    }
  }
</style>
