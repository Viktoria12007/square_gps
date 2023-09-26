<template>
  <v-container class="fill-height main-container">
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">{{ lan("errorPageText") }}</v-col>
        <v-col class="shrink">
          <v-btn to="/">{{ lan("errorPageButton") }}</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-container>
</template>

<script>
import languages from "@/mixins/languages";

export default {
  name: "NotFoundView",
  components: {},
  mixins: [languages],
  data: () => ({}),
};
</script>

<style lang="stylus">
.main-container
  justify-content: center
  max-width: 1785px
</style>
