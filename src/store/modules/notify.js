import Vue from "vue";

const state = () => ({
  notifications: [],
  idForNotify: 0,
});

const mutations = {
  deleteNotify(state) {
    state.notifications.shift();
  },
  addNotify(state, _item) {
    const id = state.idForNotify;
    const { message, visible, resolveDelete } = _item;
    const item = {
      id,
      message,
      visible,
      resolveDelete,
    };
    state.notifications.push(item);
    state.idForNotify += 1;
  },
  updateNotify(state, flag) {
    if (state.notifications[0]) {
      Vue.set(state.notifications, 0, {
        ...state.notifications[0],
        visible: flag,
      });
      if (!flag) {
        Vue.set(state.notifications, 0, {
          ...state.notifications[0],
          resolveDelete: true,
        });
      }
    }
  },
};

const getters = {
  firstNotify: (state) => state.notifications[0] || {},
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
