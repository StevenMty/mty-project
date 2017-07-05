import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import add from './add/index';

export default new Vuex.Store ({
    modules: {
        add
    }
})