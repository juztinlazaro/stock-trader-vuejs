const actions = {
  sellStocks({commit}, order) {
    commit('sellStock', order);
  }
};

export default actions;