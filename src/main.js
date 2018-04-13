// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './store/state';
import mutations from './store/mutations';
import actions from './store/actions';

console.log('router',router);

Vue.prototype.SelectObserve = (() => {
  let obj = [];
  const observe = (key,handler) => {
    obj = [];
    obj.push({
      key,
      handler
    })
  };
  const publish = (key, value) => {
    if(JSON.stringify(obj) != "{}") {
      obj.forEach((item) => {
        console.log(item);
        item.handler();
      });
    }
  };
  return {
    obj,
    observe,
    publish
  }
})();

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

console.log(state);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
