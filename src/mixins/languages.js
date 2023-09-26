import en from "../locales/en";
import ru from "../locales/ru";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("preferences", ["language"]),
  },
  methods: {
    lan(key) {
      const selectedObj = this.language === "ru" ? ru : en;
      if (key in selectedObj) {
        return selectedObj[key];
      }
    },
  },
};
