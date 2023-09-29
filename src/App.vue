<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {},
  data: () => ({}),

  async mounted() {
    this.reorganizationApp();
    window.addEventListener("resize", () => {
      this.reorganizationApp();
    });
  },
  methods: {
    ...mapMutations("view", ["setView"]),
    reorganizationApp() {
      if (window.innerWidth > 1024) {
        this.setView(false);
      } else {
        this.setView(true);
      }
    },
  },
};
</script>
