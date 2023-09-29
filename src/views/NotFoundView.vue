<template>
  <v-container class="fill-height not-found__container">
    <v-alert min-width="296" prominent type="error" class="not-found__alert">
      <v-row align="center">
        <v-col class="grow">{{ lan("errorPageText") }}</v-col>
        <v-col class="not-found__action-col">
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

<style lang="stylus" scoped>
.not-found__container
  justify-content: center
</style>

<style lang="stylus">
@media (max-width: 1024px)
  .not-found__alert > .v-alert__wrapper
      flex-direction: column
    & > .v-alert__icon
      margin-right: 0
      margin-bottom: 16px
  .not-found__action-col
    & > .v-btn:not(.v-btn--round).v-size--default
      height: 100%
      min-height: 56px
      white-space: normal
      text-align: center
    & > .v-btn > .v-btn__content
      flex: 1 1 0
</style>
