<template>
  <section>
    <PageTitle title="Shop" />
    <div class="main-content">
      <div class="top-of-grid">
        <Breadcrumbs :links="breadcrumbLinks" />
        <label for="sort">
          Sort by:
          <Select :options="sortOptions" :selected-value="filters.sort" :handle-change="({target})=>changeSort(target.value)" name="sort" />
        </label>
      </div>
      <Filters :filters="[{title: 'Fruits', options: ['raspberries', 'bananas', 'apples']}, {title: 'Collections', options: ['Mini cakes', 'Cakes', 'Muffins', 'Donuts']}, {title: 'Other', options: ['Vege', 'Spicy', 'Extremely Sweet']}]" />
      <ProductsGrid />
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import routes from '../../constants/routes'
import ProductsGrid from '../../components/Products/ProductsGrid.vue'
import Filters from '../../components/Products/Filters.vue'
import PageTitle from '../../components/PageTitle.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import Select from '../../components/Select.vue'
export default Vue.extend({
  components: {
    ProductsGrid,
    PageTitle,
    Breadcrumbs,
    Select,
    Filters
  },
  data () {
    return {
      routes,
      breadcrumbLinks: [
        { text: 'Home', url: routes.HOME_URL },
        { text: 'Collections', url: routes.COLLECTIONS_URL },
        { text: 'All', url: routes.SHOP_URL }
      ],
      sortOptions: [
        'Ascending',
        'Descending'
      ],
      filters: {
        sort: 'Ascending',
        collection: 'All'
      }
    }
  },
  methods: {
    changeSort (newValue: string) {
      this.filters = {
        ...this.filters,
        sort: newValue
      }
    }
  }
})
</script>
<style lang="scss" scoped>
  .main-content{
    margin: 12px auto;
  }

  .top-of-grid{
    padding: 24px;

    label {
      margin-top: 24px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      flex-wrap: wrap;
      justify-content: space-between;

      select {
        margin-top: 8px;
      }
    }
  }

  @media(min-width: $mobile){
    .main-content{
      margin: 24px auto 64px;
    }

    .top-of-grid{
      display:flex;
      justify-content: space-between;
      align-items: center;

      label{
        margin-top: 0;
        width: 320px;

        select {
          margin-top: 0px;
        }
      }
    }
  }
</style>
