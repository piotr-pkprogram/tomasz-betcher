<template>
  <section class="catch-all">
    <div class="catch-all___container">
      <strong class="catch-all__error">404</strong>
      <br />
      <strong class="catch-all__error-message">Strona nie została odnaleziona</strong>
      <p class="catch-all__paragraph">
        Strona o adresie {{ location.pathname }} nie została znaleziona, wróc na stronę
        główną i szukaj dalej! :)
      </p>
      <base-button classes="dark-btn" type="router-link" to="/">
        Strona Główna
      </base-button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      location: location,
    };
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    next();
  },
  mounted() {
    this.$store.commit("appearHiddenLoader", false);
  },
};
</script>

<style lang="scss" scoped>
.catch-all {
  @apply flex flex-wrap justify-center items-center p-4 w-full h-screen;
  &___container {
    @apply grid justify-items-center gap-2 text-lg;
  }
  &__paragraph {
    @apply text-center;
  }
  &__error {
    @apply text-6xl;
    &-message {
      @apply text-4xl text-center;
    }
  }
}
</style>
