import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入login的css
import "./assets/login.css"

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  // next()
  if (to.path === "/login") {
    // 如果访问的是登录页，直接放行，
    next()
    return
  }
  // 如果访问的不是登录页，判断有没有带token，带就放行，不带就去登录页
  if (to.path !== "/login") {
    if (localStorage.token) {
      next()
      return
    } else {
      this.router.push("/login")
    }
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
