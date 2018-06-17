<template>
  <div>
    <Stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock';

export default {
  components: {
    Stock,
  },
  computed: {
    ...mapGetters({
      stockPortfolio: 'portfolio/stockPortfolio'
    })
  }
}
</script>

