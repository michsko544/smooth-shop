<template>
  <section>
    <PageTitle title="Shop" />
    <div class="main-content">
      <div class="position-wrapper">
        <div class="top-of-grid">
          <Breadcrumbs :links="breadcrumbLinks" />
          <label for="sort">
            Sort by:
            <Select :options="sortOptions" :selected-value="filters.sort" :handle-change="({target})=>changeSort(target.value)" name="sort" />
          </label>
        </div>
        <Filters :filters="[{title: 'Fruits', options: ['Raspberries', 'Bananas', 'Apples']}, {title: 'Collections', options: ['Mini cakes', 'Cakes', 'Muffins', 'Donuts']}, {title: 'Other', options: ['Vege', 'Spicy', 'Extremely Sweet']}]" />
        <ProductsGrid />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import routes from '../../../constants/routes'
import ProductsGrid from '../../../components/Products/ProductsGrid.vue'
import Filters from '../../../components/Products/Filters.vue'
import PageTitle from '../../../components/PageTitle.vue'
import Breadcrumbs from '../../../components/Breadcrumbs.vue'
import Select from '../../../components/Select.vue'
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
        { text: this.$route.params.collection, url: routes.SHOP_URL + this.$route.params.collection }
      ],
      sortOptions: [
        'Ascending',
        'Descending'
      ],
      filters: {
        sort: 'Ascending',
        collection: this.$route.params.collection
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
    padding-bottom: 16px;

    label {
      margin-top: 48px;
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

    .position-wrapper{
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 93px auto;

      &>*:nth-child(1){
        grid-column: 2/-1;
      }

      &>*:nth-child(2){
        grid-column: 1/2;
        grid-row: 1/-1;
      }

      &>*:nth-child(3){
        grid-column: 2/-1;
      }
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
