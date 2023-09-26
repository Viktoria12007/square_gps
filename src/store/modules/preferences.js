const state = () => ({
  language: localStorage.language ? JSON.parse(localStorage.language) : "ru",
  center: localStorage.center
    ? JSON.parse(localStorage.center)
    : [51.505, -0.159],
  zoom: localStorage.zoom ? JSON.parse(localStorage.zoom) : 15,
});

const mutations = {
  setLanguage(state, language) {
    localStorage.language = JSON.stringify(language);
    state.language = language;
  },
  setCenter(state, center) {
    localStorage.center = JSON.stringify(center);
    state.center = center;
  },
  setZoom(state, zoom) {
    localStorage.zoom = JSON.stringify(zoom);
    state.zoom = zoom;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
