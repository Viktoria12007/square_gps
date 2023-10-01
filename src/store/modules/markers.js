import { HTTP } from "../../backend/backend";
import axios from "axios";

const state = () => ({
  markers: [],
  selectedMarkerId: null,
});

const mutations = {
  setMarkers(state, markers) {
    state.markers = markers;
  },
  selectMarker(state, selectedMarkerId) {
    state.selectedMarkerId = selectedMarkerId;
  },
};

const getters = {
  getSelectedMarker: (state) =>
    state.markers.find((marker) => marker.id === state.selectedMarkerId),
};

const actions = {
  addMarker({ commit, dispatch }, newMarker) {
    HTTP.post(newMarker)
      .then(() => {
        dispatch("getMarkers");
      })
      .catch(() => {
        commit(
          "notify/addNotify",
          {
            message: "errorAddMarker",
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
        return false;
      });
  },
  getMarkers({ commit }) {
    return HTTP.get()
      .then((markers) => {
        commit("setMarkers", markers);
        return markers;
      })
      .catch(() => {
        commit(
          "notify/addNotify",
          {
            message: "errorGetMarkers",
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
        return false;
      });
  },
  getAddress({ commit }, coords) {
    // eslint-disable-next-line
    return axios.get(`https://geocode.maps.co/reverse?lat=${coords.lat}&lon=${coords.lng}`)
      .then((result) => {
        return result.data.display_name;
      })
      .catch(() => {
        commit(
          "notify/addNotify",
          {
            message: "errorGetAddress",
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
        return false;
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
