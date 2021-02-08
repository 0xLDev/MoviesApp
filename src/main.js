import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import store from "./store";
import "./plugins/bootstrap";

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: App
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
