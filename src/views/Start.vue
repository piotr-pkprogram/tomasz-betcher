<template>
  <div class="grid">
    <section class="hello">
      <div class="hello__containers row-2 lg:row-auto">
        <div class="hello__desc-container">
          <h1 class="hello__full-name">Tomasz Betcher</h1>
          <p class="hello__desc">
            Jestem autorem powieści obyczajowych, w których poruszam ważne wątki
            społeczne.
          </p>
        </div>
      </div>
      <div class="row-start-1 hello__containers lg:row-auto">
        <img
          src="../assets/img/tomasz-betcher.jpg"
          alt="Tomasz Betcher"
          class="hello__img-person"
        />
      </div>
    </section>
    <section class="my-books">
      <h2 class="my-books__title">Moje Książki</h2>
      <div class="my-books__slider-container">
        <base-slider></base-slider>
      </div>
    </section>
    <div class="about-me">
      <h2 class="about-me__title">O Mnie</h2>
      <img
        src="../assets/img/tomasz-betcher-about.jpg"
        alt="Tomasz Betcher"
        class="about-me__img"
      />
      <div class="about-me__desc-container">
        <p class="about-me__desc">
          Urodziłem się w Grudziądzu i tam spędziłem całe swoje dzieciństwo. Ukończyłem
          technikum ogrodnicze i podjąłem naukę na Uniwersytecie Kazimierza Wielkiego w
          Bydgoszczy, na kierunku pedagogika resocjalizacyjna.
        </p>
        <p class="about-me__desc">
          Moja kariera pisarska rozpoczęła się w 2019 roku. Pasję do tworzenia historii
          połączyłem z doświadczeniem zawodowym. Zadebiutowałem powieścią "Tam gdzie
          jesteś" (2019),kolejno ukazały się "Szczęście z piernika" (2019), "Szeptun"
          (2021) oraz "Żołnierskie serce" (2021). W zbiorze "Wigilijne opowieści"
          <text-links
            classes="about-me__more text-gray-400"
            href="/kim-jestem"
            :IsRouterLink="true"
            >Czytaj Więcej</text-links
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlider from "../components/main-components/slider/Slider.vue";

export default {
  components: {
    BaseSlider,
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    this.$store.commit("appearHiddenLoader", true);
    next();
  },
};
</script>

<style lang="scss" scoped>
.hello {
  @apply bg-no-repeat w-full grid p-1 sm:p-3 h-full gap-3 lg:gap-0 lg:grid-flow-col lg:grid-cols-1/2 lg:grid-rows-none;
  background-image: url(../assets/img/las-Szeptun.jpg);
  background-size: auto 100%;
  background-position: center;

  @media (min-width: 1024px) {
    height: 662px;
  }

  @media (min-width: 1435px) {
    background-size: 100%;
    background-position: bottom;
  }

  &__containers {
    @apply grid justify-items-center items-center;
  }

  &__full-name {
    @apply font-medium text-main text-5xl;
  }

  &__desc {
    @apply text-3A text-lg ml-2;

    &-container {
      @apply max-w-96 grid gap-2;
    }
  }

  &__img-person {
    @apply rounded-3xl max-w-96 w-full;
  }
}

.my-books {
  @apply bg-f6 grid justify-items-center items-center gap-3 p-0 pb-9;
  @media (min-width: 373px) {
    @apply p-3;
  }
  @media (min-width: 1115px) {
    @apply pb-12;
  }

  &__title {
    @apply text-4xl p-5 pl-2 pr-2;
    @media (min-width: 373px) {
      @apply p-5 text-5xl;
    }
  }

  &__slider-container {
    @apply w-full grid relative;
    @media (min-width: 815px) {
      @apply w-auto;
    }
  }
}

.about-me {
  @apply grid justify-items-center items-center gap-3 md:grid-flow-col md:grid-cols-4/6 pb-12 gap-x-5 p-3;

  &__title {
    @apply text-4xl p-5 pl-2 pr-2 md:col-1/2;
    @media (min-width: 373px) {
      @apply p-5 text-5xl;
    }
  }

  &__img {
    @apply md:row-2 md:col-1 md:justify-self-end;
  }

  &__desc-container {
    @apply md:row-2 md:col-2 w-full self-start flex flex-wrap gap-4;
    max-width: 538px;
    @media (min-width: 768px) {
      max-width: 420px;
    }
    @media (min-width: 850px) {
      max-width: 468px;
    }
    @media (min-width: 900px) {
      max-width: 498px;
    }
    @media (min-width: 962px) {
      max-width: 538px;
    }

    @media (min-width: 1180px) {
      max-width: 659px;
    }

    @media (min-width: 1240px) {
      max-width: 689px;
    }
  }
}
</style>
