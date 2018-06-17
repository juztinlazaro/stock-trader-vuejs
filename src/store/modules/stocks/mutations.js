// set data in state
const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  randomStocks(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    })
  }
};

export default mutations;