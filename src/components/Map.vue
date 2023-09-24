<template>
  <l-map ref="map" :zoom="zoom" :center="center" @click="handleMapClick">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker
      v-for="marker in markers"
      :key="marker.id"
      :visible="marker.visible"
      :draggable="marker.draggable"
      :lat-lng="marker.position"
      @click="alert(marker)"
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
import { mapActions, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Map",
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
      zoom: 15,
      center: [51.505, -0.159],
      resolveAddMarkers: false,
    };
  },
  computed: {
    ...mapState("markers", ["markers"]),
  },
  methods: {
    ...mapActions("markers", ["postMarkers"]),
    handleResolveAddMarker() {
      console.debug("clickButton");
      this.resolveAddMarkers = true;
    },
    handleMapClick(e) {
      if (this.resolveAddMarkers) {
        console.debug(e);
        const newMarker = {
          position: { lat: e.latlng.lat, lng: e.latlng.lng },
        };
        this.postMarkers(newMarker);
        this.resolveAddMarkers = false;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-btn--fab.v-size--large.v-btn--absolute.v-btn--bottom.add-marker-button {
  bottom: 20px;
}
</style>
