const mutations = {
  buyStock(state, order) {
    console.log('portfolio/buyStock', order);
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(item => item.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }

    state.funds -= stockPrice * quantity;
  },
  sellStock(state, order) {
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(item => item.id === stockId);
    
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record));
    }

    state.funds += stockPrice * quantity;
  },
  setPorfolio(state, data) {
    state.funds = data.funds;
    state.stocks = data.stockPortfolio ? data.stockPortfolio : [];
  }
}

export default mutations;