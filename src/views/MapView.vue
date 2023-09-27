<template>
  <v-container class="fill-height map-container">
    <v-row no-gutters class="fill-height">
      <v-col cols="3">
        <v-navigation-drawer permanent width="100%" class="map-sidebar">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ lan("markersTitle") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list v-if="markers.length">
            <v-virtual-scroll
              :bench="0"
              :items="markers"
              style="height: calc(100vh - 180px)"
              item-height="81"
            >
              <template v-slot:default="{ item }">
                <v-list-item
                  :key="item.id"
                  :input-value="selectedMarkerId === item.id"
                  link
                  :to="`/map/${item.id}`"
                  @click="handleSelectMarker(item.id)"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ lan("markerName") + item.id }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.position | formatedPosition }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="text--primary">
                      {{ item.address }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="9">
        <Map />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import languages from "@/mixins/languages";
import Map from "@/components/Map";
import { mapState } from "vuex";
import handleSelectMarker from "@/mixins/handleSelectMarker";

export default {
  name: "MapView",
  mixins: [languages, handleSelectMarker],
  components: {
    Map,
  },
  data() {
    return {};
  },
  filters: {
    formatedPosition(position) {
      return `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`;
    },
  },
  beforeRouteEnter(to, from, next) {
    const getMarkersIds = localStorage.markers
      ? JSON.parse(localStorage.markers).map((marker) => marker.id)
      : [];
    if (to.params.id && !getMarkersIds.includes(++to.params.id))
      next({ name: "NotFound" });
    else next();
  },
  computed: {
    ...mapState("markers", ["markers"]),
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
//.map-sidebar > .v-navigation-drawer__content
//  owerflow: visible
.map-container
  //align-items: flex-start
  max-width: 1785px
  padding: 0
</style>
