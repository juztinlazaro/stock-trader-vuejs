<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price | currency}}) | (Quantity: {{stock.quantity}})</small>
        </h3>

        <div class="panel-body">
          <div class="pull-left">
            <input
              type="number" 
              class="form-control"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{danger: insuffiencientQuantity}"
            />
          </div>

          <div class="pull-right">
            <button
              class="btn btn-success"
              @click="sellStock"
              :disabled="insuffiencientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
              {{insuffiencientQuantity ? 'Not Stocks' : 'Sell'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    stock: {
      type: Object,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insuffiencientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'portfolio/sellStocks',
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
};
</script>

