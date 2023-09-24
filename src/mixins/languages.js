import en from "../locales/en";
import ru from "../locales/ru";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("markers", ["language"]),
  },
  // watch: {
  //   selectedLanguage(n) {
  //     this
  //   },
  // },
  methods: {
    lan(key) {
      // eslint-disable-next-line
      // const selectedLan = localStorage.language ? JSON.parse(localStorage.language) : "ru";
      const selectedObj = this.language === "ru" ? ru : en;
      if (key in selectedObj) {
        console.debug(selectedObj[key]);
        return selectedObj[key];
      }
    },
  },
};
