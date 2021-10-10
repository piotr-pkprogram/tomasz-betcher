<template>
  <section class="books">
    <div
      class="books__book"
      v-for="book in books"
      :key="book.id"
      :style="`background-image: url(${book.bg_img})`"
    >
      <img :src="book.src" :alt="book.alt" class="books__img" />
      <div class="books__desc-container">
        <h2 class="books__title-book">{{ book.title }}</h2>
        <span class="books__genre">{{ book.genre }}</span>
        <span class="books__review">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M7.16228 30.7279C6.81168 30.7279 6.46353 30.6185 6.1664 30.4037C5.61292 30.0025 5.35437 29.3131 5.50501 28.6478L7.56366 19.5794L0.582033 13.4567C0.0688362 13.0087 -0.127214 12.2992 0.0834851 11.65C0.294184 11.0021 0.867441 10.5433 1.54617 10.4806L10.7837 9.64192L14.4359 1.09507C14.7052 0.467128 15.3185 0.0615997 15.9999 0.0615997C16.6813 0.0615997 17.2946 0.467128 17.5639 1.09361L21.2161 9.64192L30.4522 10.4806C31.1324 10.5418 31.7056 11.0021 31.9163 11.65C32.127 12.298 31.9322 13.0087 31.419 13.4567L24.4374 19.5782L26.496 28.6463C26.6469 29.3131 26.3881 30.0025 25.8349 30.4025C25.2829 30.8024 24.5468 30.8331 23.9654 30.4838L15.9999 25.7236L8.03437 30.4864C7.76508 30.6464 7.46502 30.7279 7.16228 30.7279ZM15.9999 23.673C16.3027 23.673 16.6025 23.7543 16.872 23.9143L24.3895 28.4105L22.4466 19.8514C22.3079 19.2423 22.5147 18.6063 22.9854 18.1941L29.5776 12.4127L20.856 11.6207C20.228 11.5634 19.688 11.1686 19.4426 10.5899L15.9999 2.52431L12.553 10.5912C12.3104 11.1659 11.7703 11.5607 11.1438 11.618L2.42095 12.4101L9.01291 18.1915C9.48509 18.6048 9.69164 19.2396 9.55175 19.8502L7.61029 28.409L15.1278 23.9143C15.3971 23.7543 15.6972 23.673 15.9999 23.673ZM10.7132 9.80721C10.7132 9.80721 10.7132 9.80867 10.7117 9.80989L10.7132 9.80721ZM21.284 9.8033L21.2854 9.80599C21.2854 9.80452 21.2854 9.80452 21.284 9.8033Z"
                fill="#610302"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {{ book.review }}
        </span>
      </div>
      <base-button
        classes="books__view dark-btn rounded-full"
        type="router-link"
        :to="book.link"
        >Zobacz Książkę</base-button
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      books: this.$store.getters.books,
    };
  },
};
</script>

<style lang="scss" scoped>
.books {
  @apply grid gap-20;

  &__book {
    @apply bg-no-repeat grid justify-items-center p-5 pb-7 bg-cover gap-y-3;
    background-position: bottom;
    @media (min-width: 320px) {
      justify-items: normal;
    }
    @media (min-width: 950px) {
      height: 419px;
      @apply grid-flow-col justify-items-center;
    }
  }

  &__img {
    @apply rounded-3xl self-end row-start-2;
    @media (min-width: 950px) {
      @apply h-auto row-start-1;
    }
  }

  &__desc-container {
    @apply w-full h-full p-3 justify-self-start self-center grid content-start gap-2 row-start-1;
    max-height: 351px;
    @media (min-width: 1210px) {
      @apply transform -translate-x-10;
    }
  }

  &__title-book {
    @apply font-medium text-3xl;
    @media (min-width: 320px) {
      @apply text-5xl;
    }
  }

  &__genre {
    @apply font-medium text-lg;
    color: #9c9a9a;
    @media (min-width: 320px) {
      @apply text-2xl;
    }
  }

  &__review {
    @apply font-medium text-lg text-black flex flex-wrap gap-3;
    @media (min-width: 320px) {
      @apply text-2xl;
    }
  }

  &__view {
    @apply self-end;
    @media (min-width: 500px) {
      @apply row-start-2 justify-self-end;
    }

    @media (min-width: 950px) {
      @apply row-start-1;
    }
  }
}
</style>
