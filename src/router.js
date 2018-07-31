import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Authorization from "./views/Authorization.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/authorization",
      name: "authorization",
      component: Authorization
    }
  ]
});
