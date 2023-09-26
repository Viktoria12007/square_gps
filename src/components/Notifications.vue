<template>
  <div>
    <v-snackbar
      v-for="notify in notifications"
      :key="notify.id"
      :timeout="4000"
      :value="notify.visible"
      @input="(e) => updateNotify(e)"
      max-width="500"
      multi-line
      centered
      right
      tile
      color="red accent-2"
    >
      {{ notify.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="updateNotify(false)">
          {{ lan("close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import languages from "@/mixins/languages";

export default {
  // eslint-disable-next-line
  name: "Notifications",
  mixins: [languages],
  components: {},
  data() {
    return {};
  },
  watch: {
    "firstNotify.resolveDelete"(n) {
      if (n) {
        this.deleteNotify();
      }
    },
    "firstNotify.id"(n) {
      console.debug(n);
      if (n !== null || n !== undefined) {
        this.updateNotify(true);
      }
    },
  },
  methods: {
    ...mapMutations("notify", ["deleteNotify", "updateNotify"]),
  },
  computed: {
    ...mapGetters("notify", ["firstNotify"]),
    ...mapState("notify", ["notifications"]),
  },
};
</script>

<style lang="stylus"></style>
