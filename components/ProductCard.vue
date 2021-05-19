<template>
  <NuxtLink :to="routes.PRODUCT_URL + '/' + id ">
    <div
      :style="{
        backgroundImage: `url(${image})`,
      }"
      class="container"
    >
      <div class="statusIcons">
        <SaleIcon v-if="salePrice" class="productStatus" />
        <SoldIcon v-if="quantity===0" class="productStatus" />
      </div>
      <div class="text">
        <h3>{{ title }}</h3>
        <div class="price">
          <span :class="{sale: salePrice}">
            {{ price }} EUR
          </span>
          <span v-if="salePrice">{{ salePrice }} EUR</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang="ts">
import Vue from 'vue'
import * as routes from '../constants/routes'
import SaleIcon from '../assets/sale.svg'
import SoldIcon from '../assets/sold-out.svg'
export default Vue.extend({
  name: 'ProductCard',
  components: {
    SaleIcon,
    SoldIcon
  },
  props: {
    title: {
      type: String,
      default: 'Default title',
      required: true
    },
    price: {
      type: String,
      default: '10',
      required: true
    },
    quantity: {
      type: Number,
      default: 1,
      required: true
    },
    id: {
      type: String,
      default: '1',
      required: true
    },
    salePrice: {
      type: String,
      default: '',
      required: false
    },
    image: {
      type: String,
      default: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      required: false
    }
  },
  data () {
    return {
      routes
    }
  }
})
</script>
<style lang="scss" scoped>
  .container{
    height: 100%;
    min-height: 480px;
    display: flex;
    margin: 4px;
    position:relative;

    background-size: cover;
    background-position: center;

    &:hover{
      opacity: 0.6;
    }

    .statusIcons{
      position: absolute;
      .productStatus{
        width: 52px;
        height: 52px;
        color: $black;
      }
    }

    .text{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      align-self: flex-end;
      margin: 24px auto;

      h3{
        font-weight: 300;
        margin-bottom: 12px;
      }

      .price{
        &>*{
          margin: 0 4px;
        }
        .sale{
          text-decoration: line-through;
        }
      }
    }
  }
</style>
