<template>
  <div class="agree-widget" ref="agreeWidget">
    <span class="agree-widget__message">
      Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz
      się na ich użycie oraz akceptujesz politykę prywatności i politykę cookies.
    </span>
    <text-links
      classes="agree-widget__privacy-policy"
      :IsRouterLink="true"
      to="/subpages/privacy-policy.html"
    >
      Polityka Prywatności
    </text-links>
    <base-button classes="agree-widget__agree-btn light-btn rounded-full" @click="agree">
      Zgoda
    </base-button>
    <img
      class="agree-widget__close-btn"
      src="../../assets/img/cross.svg"
      alt="Zamknij"
      @click="closeWidget"
    />
  </div>
</template>

<script>
export default {
  methods: {
    closeWidget() {
      this.$refs.agreeWidget.classList.add("animate-hidden");
      setTimeout(() => {
        this.$refs.agreeWidget.classList.add("hidden");
      }, 300);
    },
    agree() {
      if (document.cookie.includes("agreePrivacyPolicy")) {
        const cookies = document.cookie
          .split(";")
          .filter((cookie) => cookie.includes("agreePrivacyPolicy") === false);

        console.log(cookies);

        document.cookie = cookies.join(";");
      }
      document.cookie +=
        "agreePrivacyPolicy=true; expires=Tue, 19 Jan 2038 03:14:07 GMT;";
      this.closeWidget();
    },
  },
};
</script>

<style lang="scss" scoped>
.agree-widget {
  @apply w-full grid md:grid-flow-col gap-3 md:gap-0 justify-center items-center p-4 fixed bg-white border-t-2 border-main text-main z-20 bottom-0 text-center;

  @media (min-width: 1920px) {
    max-width: 1920px;
    @apply justify-self-center;
  }

  @media (max-width: 416px) {
    @apply pr-0 pl-0 p-1 gap-1;
  }
  @media (max-width: 302px) {
    @apply text-sm;
  }

  &__close-btn {
    @apply absolute right-1 transition-opacity md:hover:opacity-75 cursor-pointer;
    height: 35px;
  }
  &__agree-btn {
    @apply text-base mr-2 p-2 col-start-2 row-start-2 md:row-auto md:col-auto;

    @media (max-width: 302px) {
      @apply text-sm;
    }
  }
  &__privacy-policy {
    @apply ml-2 mr-2 rounded-full bg-f6 text-black p-2 col-start-1 row-start-2 w-max justify-self-end md:row-auto md:col-auto md:justify-self-auto no-underline;
  }
  &__message {
    @apply col-1/2;
  }
}
</style>
