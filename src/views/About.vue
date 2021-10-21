<template>
  <section class="how-i-am">
    <section
      class="how-i-am__about-container"
      v-for="(section, i) in aboutSections"
      :key="i"
    >
      <img
        :src="section.src"
        :alt="section.alt"
        :class="i === 1 ? 'how-i-am__img how-i-am__img--second' : 'how-i-am__img'"
      />
      <p :class="'how-i-am__desc'">
        {{ section.text }}
      </p>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutSections: [
        {
          src: require("../assets/img/about/tomasz-betcher-w-parku-w-garniturze.jpg"),
          alt: "Tomasz Betcher w parku w garniturze opierający o metalową strukturę",
          text:
            "Jestem pisarzem i ojcem dwójki dzieci. Moja kariera pisarska zaczęła się w 2019 roku, kiedy odkryłem w sobie pasję do tworzenia historii.",
        },
        {
          src: require("../assets/img/about/książki-tam-gdzie-jesteś-i-szczęście-z-piernika-na-kocu.jpg"),
          alt:
            'książki "Tam gdzie jesteś" i "Szczęście z piernika" leżące na kocu, a w okół nich są różne ozdoby świąteczne',
          text:
            'Zadebiutowałem powieścią "Tam gdzie jesteś" (2019, kolejno ukazały się "Szczęście z piernika" (2019), "Szeptun" (2021) oraz "Żołnierskie serce" (2021). W zbiorze "Wigilijne opowieści" (2020) znalazło się moje opowiadanie świąteczne. W przygotowaniu są kolejne powieści i opowiadania.',
        },
        {
          src: require("../assets/img/about/tomasz-betcher-na-hamaku-z-książką.jpg"),
          alt:
            "Tomasz Betcher leżący na hamaku, czytający książkę pod drzewem w ogrodzie przy drewnianym domku",
          text:
            "W czasie, gdy nie pisze, swój czas wolny spędzam z rodziną, oddaję się nocnym obserwacjom nieba, eksperymentuję w kuchni i czytam. Szczególną miłością darzę historię lotnictwa, głównie II wojny światowej. Lubię małe i duże podróże.",
        },
      ],
    };
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  created() {
    setTimeout(() => {
      this.$store.commit("appearHiddenLoader", false);
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.how-i-am {
  @apply grid gap-5 items-center p-2 md:p-4;
  @media (min-width: 630px) {
    @apply gap-20;
  }

  &__about-container {
    @apply grid items-center justify-items-center p-4 gap-4;
    @media (min-width: 630px) {
      @apply grid-flow-col grid-cols-2;
    }
  }

  &__img {
    &--second {
      @media (min-width: 630px) {
        @apply col-start-2;
      }
    }
  }

  &__desc {
    @apply font-medium text-base;
    max-width: 698px;
    @media (min-width: 800px) {
      @apply text-xl;
    }
  }
}
</style>
