<template>
  <div class="container">
      <Header></Header>
      <div class="row">
        <div class="col-lg-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('stocks/initStocks');
    console.log(this.$store)
  }
}
</script>


