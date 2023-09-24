import Vue from "vue";
import Vuex from "vuex";
import markers from "./modules/markers";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: { markers },
  strict: debug,
});
