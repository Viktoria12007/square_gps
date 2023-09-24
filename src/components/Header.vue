<template>
  <v-app-bar
    app
    color="#6A76AB"
    dark
    src="https://picsum.photos/1920/1080?random"
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

    <v-menu offset-y z-index="1000">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-list-item-group v-model="modelSelectedLanguage" color="primary">
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
        <v-tab to="/map">{{ lan("mapTitle") }}</v-tab>
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
    return {
      // eslint-disable-next-line
      modelSelectedLanguage: localStorage.language ? JSON.parse(localStorage.language) : "ru",
    };
  },
  watch: {
    modelSelectedLanguage(n) {
      this.setSelectedLanguage(n);
    },
  },
  computed: {
    ...mapState("markers", ["language"]),
  },
  methods: {
    ...mapMutations("markers", ["setSelectedLanguage"]),
    // changeLanguage(lan) {
    //   console.debug("changeLanguage");
    //   localStorage.languages = JSON.stringify(lan);
    // },
  },
};
</script>

<style lang="stylus">
.app-bar-title > .v-app-bar-title__content {
  width: 300px;
}
</style>
