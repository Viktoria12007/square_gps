import { HTTP } from "@/modules/http-common";
import axios from "axios";

const state = () => ({
  markers: [],
  selectedMarkerId: null,
});

const mutations = {
  setMarkers(state, markers) {
    localStorage.markers = JSON.stringify(markers);
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
  async postMarkers({ commit, dispatch }, newMarker) {
    await HTTP.post("", newMarker).catch((e) => {
      commit(
        "notify/addNotify",
        {
          message: `Ошибка ${e.name}: ${e.message} \n ${e.stack}`,
          visible: false,
          resolveDelete: false,
        },
        { root: true }
      );
    });
    await dispatch("getMarkers");
  },
  getMarkers({ commit }) {
    return HTTP.get("")
      .then((markers) => {
        // throw new Error("Error");
        // eslint-disable-next-line
        // console.debug(markers);
        commit("setMarkers", markers.data);
        return markers.data;
      })
      .catch((e) => {
        commit(
          "notify/addNotify",
          {
            message: `Ошибка ${e.name}: ${e.message} \n ${e.stack}`,
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
      });
  },
  // eslint-disable-next-line no-unused-vars
  getAddress({ commit }, coords) {
    // eslint-disable-next-line
    return axios.get(`https://geocode.maps.co/reverse?lat=${coords.lat}&lon=${coords.lng}`)
      .then((result) => {
        // commit("setMarkers", result.display_name);
        // throw new Error("Error");
        // eslint-disable-next-line no-unreachable
        return result.data.display_name;
      })
      .catch((e) => {
        commit(
          "notify/addNotify",
          {
            message: `Ошибка ${e.name}: ${e.message} \n ${e.stack}`,
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
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
