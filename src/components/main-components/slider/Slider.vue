<template>
  <vueper-slides
    :infinite="false"
    :visible-slides="3"
    slide-multiple
    :gap="12"
    :slide-ratio="1 / 4"
    lazy
    lazy-load-on-drag
    :breakpoints="breakpoints"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.src"
      class="rounded-3xl"
    >
      <template #content>
        <base-button
          type="router-link"
          classes="h-min transform translate-y-3 rounded-full dark-btn"
          :to="slide.link"
          >Zobacz Książkę</base-button
        >
        <span class="text-center">{{ slide.genre }}</span>
      </template>
    </vueper-slide>

    <template #arrow-left>
      <img src="../../../assets/img/next-left.png" alt="prev" class="slider__images" />
    </template>

    <template #arrow-right>
      <img src="../../../assets/img/next-right.png" alt="next" class="slider__images" />
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import books from "./slides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
  },
  data() {
    return {
      slides: books,
      breakpoints: {
        1300: {
          visibleSlides: 2,
        },
        663: {
          visibleSlides: 1,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.vueperslide {
  @apply text-f6 p-2 w-full h-full flex flex-wrap justify-center items-end;
  height: 386px;
  @media (min-width: 300px) {
    width: 272px !important;
  }

  &__content-wrapper {
    @apply w-full;
    align-items: normal !important;
    justify-content: end !important;
  }
}

.vueperslides {
  &__track-inner {
    @apply items-center;
  }

  &__arrow {
    @apply hidden;
    @media (min-width: 815px) {
      @apply block;
    }
  }

  &__arrow--next {
    right: -5.5em !important;
  }

  &__arrow--prev {
    left: -6.5em !important;
  }

  &__parallax-wrapper {
    @apply w-full;
    min-height: 386px;
    max-width: 272px;
    @media (min-width: 300px) {
      @apply max-w-none;
      width: 272px;
    }
    @media (min-width: 663px) {
      width: 621px;
    }
    @media (min-width: 1300px) {
      width: 1106px;
    }
    &:before {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
    }

    &:after {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
    }
  }

  &__inner {
    @apply grid justify-items-center;
  }

  &__bullets {
    @apply static;
    @media (min-width: 1115px) {
      @apply hidden;
    }
  }

  &__bullet {
    & .default {
      @apply border-black;
    }
    &--active .default {
      @apply bg-black border-black;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  @apply text-f6;
}

.swiper-pagination-bullet-active {
  @apply bg-f6;
}
</style>
