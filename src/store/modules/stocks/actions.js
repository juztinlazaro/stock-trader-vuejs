import StocksData from '../../data/stocks'

// action manipulate state
const actions = {
  buyStocks: ({commit}, order) => {
    console.log('stocks/buyStocks', order)
    commit('portfolio/buyStock', order, { root: true });
  },
  initStocks: ({commit}) => {
    commit('setStocks', StocksData);
  },
  randomizeStocks: ({commit}) => {
    commit('randomStocks');
  }
};

export default actions;