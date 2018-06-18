import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-cbcb5.firebaseio.com/'

class Resource {
}

export default Resource;