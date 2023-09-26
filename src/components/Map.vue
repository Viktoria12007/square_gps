<template>
  <l-map :zoom.sync="zoom" :center.sync="center" @click="handleMapClick">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :lat-lng="marker.position"
      @click="handleSelectMarker(marker.id)"
    />
    <l-control position="bottomright">
      <v-btn
        class="add-marker-button"
        color="primary"
        absolute
        fab
        large
        dark
        bottom
        right
        @click="handleResolveAddMarker"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </l-control>
  </l-map>
</template>

<script>
// eslint-disable-next-line
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";
import { mapActions, mapGetters, mapState } from "vuex";
import languages from "@/mixins/languages";
import handleSelectMarker from "@/mixins/handleSelectMarker";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Map",
  mixins: [languages, handleSelectMarker],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      resolveAddMarkers: false,
    };
  },
  // watch: {
  //   selectedMarkerId() {
  //     const coords = [
  //       this.getSelectedMarker.position.lat,
  //       this.getSelectedMarker.position.lng,
  //     ];
  //     this.center = coords;
  //   },
  // },
  computed: {
    ...mapState("markers", ["markers"]),
    ...mapState("preferences", ["center"]),
    ...mapGetters("markers", ["getSelectedMarker"]),
    center: {
      get() {
        return this.$store.state.preferences.center;
      },
      set(value) {
        this.$store.commit("preferences/setCenter", value);
      },
    },
    zoom: {
      get() {
        return this.$store.state.preferences.zoom;
      },
      set(value) {
        this.$store.commit("preferences/setZoom", value);
      },
    },
  },
  methods: {
    ...mapActions("markers", ["postMarkers", "getAddress"]),
    handleResolveAddMarker() {
      // console.debug("clickButton");
      this.resolveAddMarkers = true;
    },
    async handleMapClick(e) {
      if (this.resolveAddMarkers) {
        // console.debug(e);
        const { latlng } = e;
        const address = await this.getAddress(latlng);
        const newMarker = {
          position: { lat: e.latlng.lat, lng: e.latlng.lng },
          address,
        };
        await this.postMarkers(newMarker);
        this.resolveAddMarkers = false;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom.add-marker-button
  bottom: 20px
</style>
