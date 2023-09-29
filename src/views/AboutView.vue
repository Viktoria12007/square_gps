<template>
  <v-container class="fill-height about-task">
    <section class="about-task__section">
      <h1 class="about-task__h1">{{ lan("aboutPageH1") }}</h1>
      <h2 class="about-task__h2">{{ lan("aboutPageH2") }}</h2>
      <p class="about-task__text">
        {{ lan("aboutPageP1BeforeStrong1") }}
        <strong>{{ lan("aboutPageP1Strong1") }}</strong>
        {{ lan("aboutPageP1AfterStrong1") }}
        <strong>{{ lan("aboutPageP1Strong2") }}</strong>
        {{ lan("and") }} <strong>{{ lan("aboutPageP1Strong3") }}</strong>
        {{ lan("aboutPageP1AfterStrong3") }}
      </p>
      <h3 class="about-task__h3">{{ lan("aboutPageH3") }}</h3>
      <p class="about-task__text">{{ lan("aboutPageP2") }}</p>
      <h3 class="about-task__h3">{{ lan("aboutPageH4") }}</h3>
      <span class="about-task__text">{{ lan("aboutPageP3BeforeList") }}</span>
      <ol class="about-task__list">
        <li class="about-task__item">
          <p class="about-task__text">{{ lan("aboutPageP3Item1P1") }}</p>
          <p class="about-task__text">
            {{ lan("aboutPageP3Item1P2") }}
            <a target="_blank" href="https://geocode.maps.co/">
              https://geocode.maps.co/
            </a>
          </p>
          <p class="about-task__text">{{ lan("aboutPageP3Item1P3") }}</p>
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP3Item2") }}
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP3Item3") }}
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP3Item4") }}
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP3Item5") }}
        </li>
      </ol>
      <p class="about-task__text">{{ lan("aboutPageP4") }}</p>
      <strong class="about-task__text">{{ lan("aboutPageP5") }}</strong>
      <ol class="about-task__list">
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP5Item1") }}
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP5Item2") }}
        </li>
        <li class="about-task__item about-task__text">
          {{ lan("aboutPageP5Item3BeforeStrong") }}
          <strong>{{ lan("aboutPageP5Item3Strong") }}</strong>
          {{ lan("aboutPageP5Item3AfterStrong") }}
        </li>
      </ol>
      <p class="about-task__text">
        <strong>{{ lan("aboutPageP6Strong") }}</strong>
        {{ lan("aboutPageP6") }}
      </p>
      <p class="about-task__text">{{ lan("aboutPageP7") }}</p>
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
@media (max-width: 1024px)
  .about-task
    &__h1
      font-size: 20px
    &__h2
      font-size: 20px
    &__h3
      font-size: 16px
    &__text
      font-size: 14px
    &__img
      max-width: 100%
      height: auto
</style>
