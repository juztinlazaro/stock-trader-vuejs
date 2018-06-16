import Home from '@/module/Home.vue';
import Portfolio from '@/module/portfolio/Portfolio.vue';
import Stocks from '@/module/stocks/Stocks.vue';

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    components: {
      default: Portfolio,
    },
  },
  {
    path: '/stocks',
    name: 'Stocks',
    components: {
      default: Stocks,
    },
  },
  // {
  //   path: '*',
  //   redirect: '/',
  // },
]