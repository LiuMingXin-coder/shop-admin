import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: login
    }, {
      path: "/home",
      component: home
    }
  ]
});
