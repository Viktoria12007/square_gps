<template>
  <v-row no-gutters class="fill-height">
    <v-col cols="2">
      <v-navigation-drawer permanent width="100%">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ lan("markersTitle") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list v-if="markers.length">
          <v-list-item v-for="marker in markers" :key="marker.id" link>
            <v-list-item-content>
              <v-list-item-title>
                {{ lan("markerName") + marker.id }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ marker.position | formatedPosition }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-col>
    <v-col cols="10">
      <Map />
    </v-col>
  </v-row>
</template>

<script>
import languages from "@/mixins/languages";
import Map from "@/components/Map";
import { mapState } from "vuex";

export default {
  name: "MapView",
  mixins: [languages],
  components: {
    Map,
  },
  data() {
    return {};
  },
  filters: {
    formatedPosition(position) {
      return position.lat.toFixed(6) + ", " + position.lng.toFixed(6);
    },
  },
  computed: {
    ...mapState("markers", ["markers", "language"]),
  },
  methods: {},
};
</script>
