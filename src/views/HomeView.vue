<template>
  <v-container class="fill-height main-container" fluid>
    <keep-alive>
      <router-view />
    </keep-alive>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="stylus" scoped>
.container.main-container {
  align-items: flex-start;
  padding: 0;
}
</style>
