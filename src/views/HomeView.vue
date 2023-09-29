<template>
  <div class="v-main__wrap d-flex">
    <Header @open-burger-menu="openBurgerMenu" />
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
      <Notifications />
    </v-main>
    <v-navigation-drawer
      class="burger-menu"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ lan("aboutTackTitle") }}</v-list-item-title>
          </v-list-item>

          <v-list-item
            :to="selectedMarkerId ? `/map/${selectedMarkerId}` : `/map`"
          >
            <v-list-item-icon>
              <v-icon>mdi-map</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ lan("mapTitle") }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Notifications from "@/components/Notifications";
import languages from "@/mixins/languages";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    Header,
    Notifications,
  },
  mixins: [languages],
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    mobileView(n) {
      if (!n) {
        this.drawer = false;
      }
    },
  },
  computed: {
    ...mapState("markers", ["selectedMarkerId"]),
    ...mapState("view", ["mobileView"]),
  },
  methods: {
    openBurgerMenu(drawer) {
      this.drawer = drawer;
    },
  },
};
</script>

<style lang="stylus" scoped>
.burger-menu
  z-index: 1300
</style>
