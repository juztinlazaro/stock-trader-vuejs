import Vue from 'vue';
import Vuex from 'vuex'

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import shared from './modules/shared';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio,
    shared,
  }
});

export default store;