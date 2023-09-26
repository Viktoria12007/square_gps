<template>
  <v-container class="fill-height about-task about-task__container">
    <section class="about-task__section">
      <h1 class="about-task__h1">{{ lan("aboutPageH1") }}</h1>
      <h2 class="about-task__h2">{{ lan("aboutPageH2") }}</h2>
      <p>
        {{ lan("aboutPageP1BeforeStrong1") }}
        <strong>{{ lan("aboutPageP1Strong1") }}</strong>
        {{ lan("aboutPageP1AfterStrong1") }}
        <strong>{{ lan("aboutPageP1Strong2") }}</strong>
        {{ lan("and") }} <strong>{{ lan("aboutPageP1Strong3") }}</strong>
        {{ lan("aboutPageP1AfterStrong3") }}
      </p>

      <h3 class="about-task__h3">{{ lan("aboutPageH3") }}</h3>
      <p>{{ lan("aboutPageP2") }}</p>

      <h3 class="about-task__h3">{{ lan("aboutPageH4") }}</h3>
      <span>{{ lan("aboutPageP3BeforeList") }}</span>
      <ol class="about-task__list">
        <li>
          <p>{{ lan("aboutPageP3Item1P1") }}</p>
          <p>
            {{ lan("aboutPageP3Item1P2") }}
            <a target="_blank" href="https://geocode.maps.co/">
              https://geocode.maps.co/
            </a>
          </p>
          <p>{{ lan("aboutPageP3Item1P3") }}</p>
        </li>
        <li>{{ lan("aboutPageP3Item2") }}</li>
        <li>{{ lan("aboutPageP3Item3") }}</li>
        <li>{{ lan("aboutPageP3Item4") }}</li>
        <li>{{ lan("aboutPageP3Item5") }}</li>
      </ol>
      <p>{{ lan("aboutPageP4") }}</p>
      <strong>{{ lan("aboutPageP5") }}</strong>
      <ol class="about-task__list">
        <li>{{ lan("aboutPageP5Item1") }}</li>
        <li>{{ lan("aboutPageP5Item2") }}</li>
        <li>
          {{ lan("aboutPageP5Item3BeforeStrong") }}
          <strong>{{ lan("aboutPageP5Item3Strong") }}</strong>
          {{ lan("aboutPageP5Item3AfterStrong") }}
        </li>
      </ol>
      <p>
        <strong>{{ lan("aboutPageP6Strong") }}</strong>
        {{ lan("aboutPageP6") }}
      </p>
      <p>{{ lan("aboutPageP7") }}</p>
      <img
        src="../assets/img/example.png"
        alt="example"
        class="about-task__img"
      />
    </section>
  </v-container>
</template>

<script>
import languages from "@/mixins/languages";

export default {
  name: "AboutView",
  mixins: [languages],
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
//.about-task__container
//  //align-items: flex-start
//  max-width: 1785px
.about-task
  &__h1
    font-weight 500
    margin-bottom: 30px
  &__h2
    font-weight 500
    margin-bottom: 20px
  &__h3
    font-weight 500
    margin-bottom: 10px
  &__list
    margin-bottom: 30px
  &__img
    width: 750px
    height: 628px
</style>
