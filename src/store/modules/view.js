const state = () => ({
  mobileView: false,
});

const mutations = {
  setView(state, value) {
    state.mobileView = value;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
