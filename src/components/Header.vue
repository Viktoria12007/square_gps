<template>
  <v-app-bar app color="#6A76AB" dark style="z-index: 1100">
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon
      class="burger-button"
      @click="openBurgerMenu"
    ></v-app-bar-nav-icon>

    <v-spacer class="header__mobile-spacer"></v-spacer>

    <v-app-bar-title class="app-bar-title header__title">
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

    <template v-if="!mobileView" v-slot:extension>
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
    ...mapState("view", ["mobileView"]),
  },
  methods: {
    ...mapMutations("preferences", ["setLanguage"]),
    openBurgerMenu() {
      this.$emit("open-burger-menu", true);
    },
  },
};
</script>

<style lang="stylus">
.app-bar-title
  width: 300px
  & > .v-app-bar-title__content
    width: 300px
    text-align: center
header
  & > .v-toolbar__content
    max-width: 1785px
    margin: 0 auto
  & > .v-toolbar__extension
    max-width: 1785px
    margin: 0 auto
</style>

<style lang="stylus" scoped>
.header__mobile-spacer
  display: none
.burger-button
  display: none
@media (max-width: 1024px)
  .header
    &__mobile-spacer
      display: block
    &__title
      font-size: 16px
  .burger-button
    display: block
</style>
