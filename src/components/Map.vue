<template>
  <l-map
    :zoom.sync="zoom"
    :center.sync="center"
    :style="{ cursor: resolveAddMarkers ? 'pointer' : 'grab' }"
    @ready="getMarkers"
    @click="handleMapClick"
  >
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :lat-lng="marker.position"
      @click="handleMarkerClick(marker.id)"
    >
      <l-popup>
        <div>{{ `ID: ${marker.id}` }}</div>
        <div>{{ `Lat: ${marker.position.lat}` }}</div>
        <div>{{ `Lng: ${marker.position.lng}` }}</div>
      </l-popup>
    </l-marker>
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
import { LMap, LTileLayer, LMarker, LPopup, LControl } from "vue2-leaflet";
import { mapActions, mapState } from "vuex";
import handleSelectMarker from "@/mixins/handleSelectMarker";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Map",
  mixins: [handleSelectMarker],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
  computed: {
    ...mapState("markers", ["markers"]),
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
    ...mapActions("markers", ["getMarkers", "addMarker", "getAddress"]),
    handleResolveAddMarker() {
      this.resolveAddMarkers = true;
    },
    async handleMapClick(e) {
      if (this.resolveAddMarkers) {
        this.resolveAddMarkers = false;
        const { latlng } = e;
        const address = await this.getAddress(latlng);
        if (address) {
          const newMarker = {
            position: { lat: latlng.lat, lng: latlng.lng },
            address,
          };
          await this.addMarker(newMarker);
        }
      }
    },
    handleMarkerClick(selectedMarkerId) {
      this.handleSelectMarker(selectedMarkerId);
      this.$router.push(`/map/${selectedMarkerId}`).catch(() => {});
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom.add-marker-button
  bottom: 20px
.marker-adding-mode
  cursor: pointer
</style>
