import Vue from "vue";
import Vuex from "vuex";
import markers from "./modules/markers";
import notify from "./modules/notify";
import preferences from "./modules/preferences";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: { markers, notify, preferences },
  strict: debug,
});
