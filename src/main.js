import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import cookies from "./plugins/cookies";
import api from "./plugins/api";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  api,
  cookies,
  render: h => h(App)
}).$mount("#app");
