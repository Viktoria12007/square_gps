<template>
  <v-container class="fill-height map__container">
    <v-row no-gutters class="fill-height">
      <v-toolbar class="map__toolbar" dense absolute>
        <v-combobox
          ref="searchInputMarkers"
          clearable
          full-width
          hide-no-data
          :no-data-text="lan('noMarkersData')"
          :label="lan('labelSearchMarkersInput')"
          :items="markers"
          :filter="filterMarkers"
          :value="displaySelectMarker"
        >
          <template v-slot:item="{ item }">
            <v-list-item
              :key="item.id"
              :input-value="selectedMarkerId === item.id"
              :to="`/map/${item.id}`"
              @click="handleSelectMarker(item.id)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ `${lan("markerName")} ${item.id}` }}
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
        </v-combobox>
      </v-toolbar>
      <v-col cols="3" class="map__sidebar-col">
        <v-navigation-drawer
          :value="!mobileView"
          width="100%"
          class="map__sidebar"
        >
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
                  :to="`/map/${item.id}`"
                  @click="handleSelectMarker(item.id)"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ `${lan("markerName")} ${item.id}` }}
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
      <v-col>
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
  // beforeRouteEnter(to, from, next) {
  //   const getMarkersIds = localStorage.markers
  //     ? JSON.parse(localStorage.markers).map((marker) => marker.id)
  //     : [];
  //   if (to.params.id && !getMarkersIds.includes(++to.params.id))
  //     next({ name: "NotFound" });
  //   else next();
  // },
  watch: {
    mobileView(n) {
      if (!n) {
        this.$refs.searchInputMarkers.blur();
      }
    },
  },
  computed: {
    ...mapState("markers", ["markers"]),
    ...mapState("view", ["mobileView"]),
    displaySelectMarker() {
      return this.selectedMarkerId
        ? `${this.lan("markerName")} ${this.selectedMarkerId}`
        : "";
    },
  },
  methods: {
    filterMarkers(item, queryText) {
      const text = `${this.lan("markerName")} ${item.id} ${item.position.lat} ${
        item.position.lng
      } ${item.address}`;
      return (
        text.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.map
  &__container
    max-width: 1785px
    padding: 0
  &__toolbar
    display: none
    z-index: 1100
    left: 100px
    top: 20px
    margin-right: 10px
@media (max-width: 1024px)
  .map
    &__toolbar
      display: block
  .map
    &__sidebar-col
      display: none
</style>
