<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
  async mounted() {
    // this.postMarkers(null, true);
    // await this.getMarkers();
  },
  methods: {
    // ...mapActions("markers", ["getMarkers", "postMarkers"]),
  },
};
</script>
