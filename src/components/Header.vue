<template>
  <v-app-bar
    app
    color="#6A76AB"
    dark
    src="https://picsum.photos/1920/1080?random"
    style="z-index: 1100"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-title class="app-bar-title">
      {{ lan("appBarTitle") }}
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item-group :value="language" @change="setLanguage">
          <v-list-item value="ru">
            <v-list-item-title>
              {{ lan("ru") }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item value="en">
            <v-list-item-title>
              {{ lan("en") }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab to="/about">{{ lan("aboutTackTitle") }}</v-tab>
        <v-tab :to="selectedMarkerId ? `/map/${selectedMarkerId}` : `/map`">
          {{ lan("mapTitle") }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import languages from "@/mixins/languages";
import { mapMutations, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  mixins: [languages],
  data() {
    return {};
  },
  computed: {
    ...mapState("markers", ["selectedMarkerId"]),
    ...mapState("preferences", ["language"]),
  },
  methods: {
    ...mapMutations("preferences", ["setLanguage"]),
  },
};
</script>

<style lang="stylus">
.app-bar-title > .v-app-bar-title__content
  width: 300px
header
  & > .v-toolbar__content
    max-width: 1785px
    margin: 0 auto
  & > .v-toolbar__extension
    max-width: 1785px
    margin: 0 auto
</style>
