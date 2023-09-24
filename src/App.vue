<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header,
  },

  data: () => ({
    //
  }),
  async mounted() {
    // this.postMarkers(null, true);
    await this.getMarkers();
  },
  methods: {
    ...mapActions("markers", ["getMarkers", "postMarkers"]),
  },
};
</script>
