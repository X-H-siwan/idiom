import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'


Vue.prototype.axios = axios;

import * as filter from '@/util/js/filters';

Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')