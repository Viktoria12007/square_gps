import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("markers", ["selectedMarkerId"]),
  },
  methods: {
    ...mapMutations("preferences", ["setCenter"]),
    ...mapMutations("markers", ["selectMarker"]),
    handleSelectMarker(selectedMarkerId) {
      console.debug("handleSelectMarker");
      this.selectMarker(selectedMarkerId);
      // eslint-disable-next-line
      this.$router.push(`/map/${selectedMarkerId}`).catch((err) => {});
      const coords = [
        this.getSelectedMarker.position.lat,
        this.getSelectedMarker.position.lng,
      ];
      this.setCenter(coords);
    },
  },
};
