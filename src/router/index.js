//官方元件
import Vue from "vue";
import VueRouter from "vue-router";
//自定義元件
import HomeView from "../views/HomeView.vue";
import exampleView from "../views/exampleView.vue";

Vue.use(VueRouter);
//這裡寫title
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "首頁",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "關於我們",
    },
  },
  {
    path: "/example",
    name: "example",
    component: exampleView,
    meta: {
      title: "範例",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
