import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeExplore")
        }
      ]
    },
    {
      name: "support",
      path: "/support",
      component: () => import("@/views/Support")
    }
  ]
});