import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
// import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Map from "@/components/Map.vue";
import preferences from "@/store/modules/preferences";
import markers from "@/store/modules/markers";
import notify from "@/store/modules/notify";
import handleSelectMarker from "@/mixins/handleSelectMarker";

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex, handleSelectMarker);
// const router = new VueRouter();
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve("value")),
}));

describe("Map.vue", () => {
  let vuetify;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      modules: {
        preferences,
        markers,
        notify,
      },
    });
  });

  it("Нажатие кнопки должно изменить свойство resolveAddMarkers", async () => {
    const wrapper = mount(Map, { localVue, store, vuetify });
    expect(wrapper.vm.resolveAddMarkers).toBe(false);
    await wrapper.vm.$nextTick();
    wrapper
      .find(
        ".vue2leaflet-map .leaflet-control-container .leaflet-bottom > .leaflet-control > .add-marker-button"
      )
      .trigger("click");
    expect(wrapper.vm.resolveAddMarkers).toBe(true);
  });

  it("Клик по карте должен вызвать handleMapClick", async () => {
    const wrapper = mount(Map, {
      localVue,
      store,
      vuetify,
    });
    wrapper.vm.handleMapClick = jest.fn();
    await wrapper.setData({ resolveAddMarkers: true });
    const map = wrapper.find(".vue2leaflet-map");
    await map.trigger("click");
    expect(wrapper.vm.handleMapClick).toHaveBeenCalled();
  });
});

// todo дописать ещё тестов
