import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import MapView from "../views/MapView.vue";
import AboutView from "../views/AboutView";
import NotFoundView from "@/views/NotFoundView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,

    children: [
      { path: "", component: AboutView },

      { path: "/about", component: AboutView },

      { path: "/map", component: MapView },

      { path: "/map/:id", component: MapView },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundView,
    name: "NotFound",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
