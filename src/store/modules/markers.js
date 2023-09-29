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
  async addMarker({ commit, dispatch }, newMarker) {
    await HTTP.post("", newMarker)
      .then(async () => {
        // return true;
        // throw new Error("postMarkers");
        // eslint-disable-next-line
        await dispatch("getMarkers");
      })
      .catch((e) => {
        commit(
          "notify/addNotify",
          {
            message: ` ${e.name}: ${e.message} \n ${e.stack}`,
            visible: false,
            resolveDelete: false,
          },
          { root: true }
        );
        return false;
      });
    // console.debug(result);
  },
  getMarkers({ commit }, start = false) {
    return HTTP.get("")
      .then((markers) => {
        // throw new Error("Error");
        // eslint-disable-next-line
        // console.debug(markers);
        let markersFromStore = null;
        if (start) {
          markersFromStore = localStorage.markers
            ? JSON.parse(localStorage.markers)
            : markers.data;
        }
        commit("setMarkers", markersFromStore || markers.data);
        return markersFromStore || markers.data;
      })
      .catch((e) => {
        commit(
          "notify/addNotify",
          {
            message: ` ${e.name}: ${e.message} \n ${e.stack}`,
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
        // commit("setMarkers", result.display_name);
        // throw new Error("Error");
        // eslint-disable-next-line no-unreachable
        return result.data.display_name;
      })
      .catch((e) => {
        commit(
          "notify/addNotify",
          {
            message: ` ${e.name}: ${e.message} \n ${e.stack}`,
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
