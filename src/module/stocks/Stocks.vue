<template>
  <div class="row">
    <h1>The Stocks Component</h1>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>


<script>
import Stock from './Stock.vue';

export default {
  components: {
    Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters['stocks/stocks'];
    }
  }
}
</script>
