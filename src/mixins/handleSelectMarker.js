import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("markers", ["selectedMarkerId"]),
    ...mapGetters("markers", ["getSelectedMarker"]),
  },
  methods: {
    ...mapMutations("preferences", ["setCenter"]),
    ...mapMutations("markers", ["selectMarker"]),
    handleSelectMarker(selectedMarkerId) {
      this.selectMarker(selectedMarkerId);
      const coords = [
        this.getSelectedMarker.position.lat,
        this.getSelectedMarker.position.lng,
      ];
      this.setCenter(coords);
    },
  },
};
