import { HTTP } from "@/modules/http-common";

const state = () => ({
  markers: [],
  // eslint-disable-next-line
  language: localStorage.language ? JSON.parse(localStorage.language) : "ru",
});

const mutations = {
  setMarkers(state, markers) {
    localStorage.markers = JSON.stringify(markers);
    state.markers = markers;
  },
  setSelectedLanguage(state, language) {
    localStorage.language = JSON.stringify(language);
    state.language = language;
  },
};

const getters = {};

const actions = {
  async postMarkers({ dispatch }, newMarker) {
    await HTTP.post("", newMarker).catch((e) => console.error(e));
    await dispatch("getMarkers");
  },
  // async putMarkers({ commit, dispatch }, newMarker) {
  //   if (localStorage.markers) {
  //     await HTTP.post("", newMarker).catch((e) => console.error(e));
  //   }
  //   const result = await dispatch("getMarkers");
  //   commit("setMarkers", result);
  // },
  // async postMarkers({ commit, dispatch }, newMarker) {
  //   if (localStorage.markers) {
  //     await HTTP.post("", newMarker).catch((e) =>
  //       console.error(e)
  //     );
  //   }
  //   const result = dispatch("getMarkers");
  //   commit("setMarkers", result);
  // },
  getMarkers({ commit }) {
    return HTTP.get("")
      .then((markers) => {
        console.debug(markers);
        commit("setMarkers", markers.data);
        return markers.data;
      })
      .catch((e) => console.error(e));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
