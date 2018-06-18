<template>
  <nav class="navbar navbar-default">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link class="nav-item" to="/" tag="li" active-class="active" exact>
          <a class="nav-link">Home</a>
        </router-link>

        <router-link class="nav-item" to="/portfolio" tag="li" active-class="active" exact>
          <a class="nav-link">Portfolio</a>
        </router-link>

        <router-link class="nav-item" to="/stocks" tag="li" active-class="active" exact>
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>

      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
      
      <ul class="nav navbar-nav navbar-right">
        <li><a class="nav-link" @click="endDay">End of the day</a></li>
        <li 
          class="dropdown"
          :class="{open: isDropDownOpen}"
          @click="handleDropDown"
          >
          <a class="dropdown-toggle nav-link" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">
            Save & load <span class="caret"></span>
          </a>

          <ul class="dropdown-menu">
            <li><a className="nav-link" @click="saveData">Save data</a></li>
            <li><a className="nav-link" @click="loadData">Load data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      isDropDownOpen: false,
    }
  },
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds']
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'stocks/randomizeStocks',
      fetchData: 'shared/loadData',
    }),
    endDay() {
      this.randomizeStocks();
    },
    handleDropDown() {
      return this.isDropDownOpen = !this.isDropDownOpen;
    },
    saveData() {
      const data = {
        funds: this.$store.getters['portfolio/funds'],
        stockPortfolio: this.$store.getters['portfolio/stockPortfolio'],
        stocks: this.$store.getters['stocks/stocks']
      };

      this.$http.put('data.json', data)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    },
    loadData() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  }
}
</script>
