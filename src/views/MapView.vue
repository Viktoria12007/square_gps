<template>
  <v-container class="fill-height main-container">
    <v-row no-gutters class="fill-height">
      <v-col cols="3">
        <v-navigation-drawer permanent width="100%" class="main-sidebar">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ lan("markersTitle") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list v-if="markers.length">
            <v-list-item-group :value="selectedMarkerId" mandatory>
              <v-virtual-scroll
                :bench="5"
                :items="markers"
                style="height: calc(100vh - 180px)"
                item-height="81"
              >
                <template v-slot:default="{ item }">
                  <v-list-item
                    :key="item.id"
                    :value="item.id"
                    link
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
            </v-list-item-group>
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
import { mapActions, mapGetters, mapState } from "vuex";
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
  async mounted() {
    await this.getMarkers();
  },
  // watch: {
  //   selectedMarkerId(n) {
  //     // eslint-disable-next-line
  //     this.$router.push(`/map/${n}`).catch((err) => {});
  //     const coords = [
  //       this.getSelectedMarker.position.lat,
  //       this.getSelectedMarker.position.lng,
  //     ];
  //     this.setCenter(coords);
  //   },
  // },
  computed: {
    ...mapState("markers", ["markers"]),
    ...mapGetters("markers", ["getSelectedMarker"]),
    // selectedMarkerId: {
    //   get() {
    //     return this.$store.state["markers/selectedMarkerId"];
    //   },
    //   set(value) {
    //     this.$store.commit("markers/selectMarker", value);
    //   },
    // },
  },
  methods: {
    ...mapActions("markers", ["getMarkers"]),
  },
};
</script>

<style lang="stylus" scoped>
//.main-sidebar > .v-navigation-drawer__content
//  owerflow: visible
</style>
