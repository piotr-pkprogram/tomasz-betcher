<template>
  <error-box v-if="error_visable.online">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      version="1.1"
      width="64"
      height="64"
      x="0"
      y="0"
      viewBox="0 0 64 64"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class=""
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg" id="Layer_64" data-name="Layer 64">
          <path
            d="m54.00043 35.87836a26.52117 26.52117 0 1 0 -13.924 18.44122 12.236 12.236 0 1 0 13.924-18.44122zm-3.75043-.5932a12.17186 12.17186 0 0 0 -7.59674 2.66c.22174-2.1936.35608-4.31567.39172-6.20984h9.43708a24.62784 24.62784 0 0 1 -.43152 3.69739 12.22312 12.22312 0 0 0 -1.80054-.14755zm-21.23975 19.91845v-9.56653a41.00153 41.00153 0 0 1 9.03528 1.181c-.01355.23511-.03576.4679-.03576.70636a12.19684 12.19684 0 0 0 .3283 2.77094 16.25278 16.25278 0 0 1 -1.32953 3.23022 24.57436 24.57436 0 0 1 -7.99829 1.67801zm-10.07806-1.71911a24.27642 24.27642 0 0 1 -2.17719-6.34357 39.86318 39.86318 0 0 1 10.25525-1.50763v9.5767a24.33042 24.33042 0 0 1 -8.07806-1.7255zm-2.80019-1.33118a24.6075 24.6075 0 0 1 -4.29834-3.04047 24.2557 24.2557 0 0 1 3.01746-1.341 36.34322 36.34322 0 0 0 1.28088 4.38147zm-12.59642-22.41797a24.40706 24.40706 0 0 1 6.78333-15.92254 25.83163 25.83163 0 0 0 4.09942 1.85864 87.34281 87.34281 0 0 0 -1.53985 14.0639zm23.47467-23.47467v9.58649a39.8674 39.8674 0 0 1 -10.26745-1.51068 24.81643 24.81643 0 0 1 2.15-6.33472 24.33034 24.33034 0 0 1 8.11745-1.74109zm9.98981 1.69061a24.60573 24.60573 0 0 1 2.18359 6.41071 39.91913 39.91913 0 0 1 -10.1734 1.48511v-9.58643a24.33054 24.33054 0 0 1 7.98981 1.69061zm2.78668 1.3075a24.60984 24.60984 0 0 1 4.40753 3.10547 24.35558 24.35558 0 0 1 -3.10583 1.37286 36.64 36.64 0 0 0 -1.3017-4.47833zm-10.77649 8.58783a42.05455 42.05455 0 0 0 10.587-1.5304 82.74334 82.74334 0 0 1 1.44452 13.41913h-12.03152zm-14.17083-4.14172a24.22089 24.22089 0 0 1 -3.01294-1.3409 24.61688 24.61688 0 0 1 4.28058-3.03228 36.84477 36.84477 0 0 0 -1.26764 4.37318zm1.48864 2.58489a42.009 42.009 0 0 0 10.68219 1.55689v11.88867h-12.13159a82.741 82.741 0 0 1 1.4494-13.44556zm10.68219 15.44556v11.8985a42.00744 42.00744 0 0 0 -10.67352 1.5545 82.24182 82.24182 0 0 1 -1.45813-13.453zm11.30829 13.09387a43.13837 43.13837 0 0 0 -9.30829-1.192v-11.90187h12.03461a80.88182 80.88182 0 0 1 -.68115 8.60217 12.17052 12.17052 0 0 0 -2.04517 4.4917zm14.16638-15.09387h-9.443a87.35782 87.35782 0 0 0 -1.53314-14.03064 25.9222 25.9222 0 0 0 4.19226-1.89245 24.40718 24.40718 0 0 1 6.78388 15.92309zm-48.94934 2h9.34284a86.81121 86.81121 0 0 0 1.54925 14.07044 25.85567 25.85567 0 0 0 -4.10247 1.85864 24.4074 24.4074 0 0 1 -6.78962-15.92908zm46.71442 26.0293a10.23975 10.23975 0 1 1 10.23975-10.24024 10.25183 10.25183 0 0 1 -10.23975 10.24024zm7.2168-14.23047a.99934.99934 0 0 0 -1.584-.22656l-9.8501 9.85058a.99978.99978 0 0 0 .22706 1.584 8.2515 8.2515 0 0 0 12.23-7.21778 8.32748 8.32748 0 0 0 -1.02296-3.99024zm-7.2168 10.23047a6.24016 6.24016 0 0 1 -1.74951-.2461l7.74072-7.74121a6.24328 6.24328 0 0 1 -5.99121 7.98731zm4.5-12.709a1.00047 1.00047 0 0 0 -.50391-.73535 8.12633 8.12633 0 0 0 -3.99609-1.03514 8.237 8.237 0 0 0 -7.20361 12.2373 1.00055 1.00055 0 0 0 .73584.50293.93216.93216 0 0 0 .13769.00977 1.00112 1.00112 0 0 0 .707-.293l9.83985-9.84082a1.0006 1.0006 0 0 0 .28323-.84568zm-10.48828 8.22365a6.2468 6.2468 0 0 1 7.74365-7.74512z"
            fill="#610302"
            data-original="#000000"
            style=""
            class=""
          />
        </g>
      </g>
    </svg>
    <span>Nie można wczytać książek</span>
    <span>Brak połączenia z internetem</span>
  </error-box>
  <error-box v-else-if="error_visable.server">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      version="1.1"
      width="64"
      height="64"
      x="0"
      y="0"
      viewBox="0 0 510 510"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class=""
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="m0 0v334.154c0 30.793 25.053 55.846 55.846 55.846h154.154v30h-23.226c-28.548 0-51.774 23.226-51.774 51.774v38.226h240v-38.226c0-28.548-23.226-51.774-51.774-51.774h-23.226v-30h154.154c30.793 0 55.846-25.053 55.846-55.846v-334.154zm480 30v270h-450v-270zm-135 441.774v8.226h-180v-8.226c0-12.007 9.768-21.774 21.774-21.774h136.451c12.007 0 21.775 9.768 21.775 21.774zm-75-51.774h-30v-30h30zm184.154-60h-398.308c-14.251 0-25.846-11.595-25.846-25.846v-4.154h450v4.154c0 14.251-11.595 25.846-25.846 25.846z"
            fill="#610302"
            data-original="#000000"
            style=""
            class=""
          />
          <path
            d="m131.967 154.246 21.213-21.213 21.214 21.213 21.212-21.213-21.213-21.213 21.213-21.214-21.212-21.212-21.214 21.213-21.213-21.213-21.213 21.212 21.213 21.214-21.213 21.213z"
            fill="#610302"
            data-original="#000000"
            style=""
            class=""
          />
          <path
            d="m340.606 154.246 21.214-21.213 21.213 21.213 21.213-21.213-21.213-21.213 21.213-21.214-21.213-21.212-21.213 21.213-21.214-21.213-21.212 21.212 21.213 21.214-21.213 21.213z"
            fill="#610302"
            data-original="#000000"
            style=""
            class=""
          />
          <path
            d="m157.952 240.151c58.046-40.033 136.047-40.036 194.097.001l39.436 27.196 17.031-24.697-39.435-27.195c-33.698-23.241-73.146-35.524-114.081-35.524s-80.383 12.283-114.08 35.523l-39.436 27.196 17.031 24.697z"
            fill="#610302"
            data-original="#000000"
            style=""
            class=""
          />
        </g>
      </g>
    </svg>
    <span>Wystąpił błąd {{ error_status }}</span>
    <span>Nie można wczytać książek</span>
  </error-box>
  <vueper-slides
    :infinite="false"
    :visible-slides="3"
    slide-multiple
    :gap="12"
    :slide-ratio="1 / 4"
    :breakpoints="breakpoints"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.src"
      class="rounded-3xl"
    >
      <template #content>
        <div
          class="absolute bottom-0 w-full h-full bg-gray-500 bg-opacity-50 rounded-3xl"
        ></div>
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
import "vueperslides/dist/vueperslides.css";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
  },
  data() {
    return {
      slides: [],
      error_visable: {
        online: false,
        server: false,
      },
      error_status: 0,
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
  methods: {
    async getSlides() {
      // await fetch("/getBooks.php")
      await fetch("http://localhost/tomasz-betcher.pl/getBooks.php")
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Wystąpił błąd");
        })
        .then((json) => {
          const booksArr = json.results.map((book) => book.properties).reverse();

          const slides = booksArr.map((book) => {
            try {
              book.id = uuidv4();
              book.genre = book.Gatunek.multi_select
                .map((genre) => genre.name)
                .join(", ");
              delete book.Gatunek;
              book.link = book.Link.url;
              delete book.Link;
              book.src = book.Zdjęcie_książki.files[0].file.url;
              delete book.Zdjęcie_książki;
              delete book.Ocena;
              book.bg_img = book.Zdjęcie_w_tle.files[0].file.url;
              delete book.Zdjęcie_w_tle;
              book.alt = book.Tekst_alternatywny.rich_text[0].plain_text;
              delete book.Tekst_alternatywny;
              book.like_read = book.Link_do_lubimyczytać.url;
              delete book.Link_do_lubimyczytać;
              book.desc = book.Opis.rich_text[0].plain_text;
              delete book.Opis;

              return book;
              // eslint-disable-next-line no-empty
            } catch {}
          });
          this.slides = slides.filter((book) => book !== undefined);
          setTimeout(() => {
            this.$store.commit("appearHiddenLoader", false);
          }, 500);
        })
        .catch((err) => {
          setTimeout(() => {
            this.$store.commit("appearHiddenLoader", false);
          }, 500);

          if (!window.navigator.onLine) this.error_visable.online = true;
          else {
            this.error_visable.server = true;
            this.error_status = err.status;
          }
        });
    },
  },
  mounted() {
    this.getSlides();
  },
};
</script>

<style lang="scss">
.vueperslide {
  @apply text-f6 p-2 w-full h-full flex flex-wrap justify-center items-end relative;
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
