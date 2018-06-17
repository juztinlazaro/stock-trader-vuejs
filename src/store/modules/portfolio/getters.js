const getters = {
  stockPortfolio(state, getters, rootState, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters['stocks/stocks'].find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default getters;