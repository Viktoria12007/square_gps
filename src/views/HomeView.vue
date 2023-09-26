<template>
  <div class="v-main__wrap d-flex">
    <Header />
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
      <Notifications />
    </v-main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Notifications from "@/components/Notifications";
export default {
  name: "HomeView",
  components: {
    Header,
    Notifications,
  },
};
</script>

<style lang="stylus">
.main-container
  //align-items: flex-start
  max-width: 1785px
  padding: 0
</style>
