import Vue from "vue";
import VueRouter from "vue-router";
import MapView from "../views/MapView.vue";
import AboutView from "../views/AboutView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),

    children: [
      { path: "/about", component: AboutView },

      { path: "/map", component: MapView },

      { path: "/map/:id", component: MapView, props: true },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
