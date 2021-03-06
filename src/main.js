import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSimpleAlert from "vue-simple-alert";

import ApiService from "./common/api.service";
// import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
// Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
Vue.use(VueSimpleAlert);

ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
