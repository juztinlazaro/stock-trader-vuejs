const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters['stocks/stocks'].find(element => element.id === stock.id);
      
      return {
        id: stock.id,
        quantity: quantity,
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