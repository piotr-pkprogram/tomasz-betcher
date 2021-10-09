<template>
  <footer class="footer">
    <p class="footer__paragraph">
      <text-links classes="footer__link" href="mailto:mojaksiążka@autograf.pl"
        >mojaksiążka@autograf.pl</text-links
      >,
      <span class="inline-block">
        <text-links
          classes="footer__link"
          href="/polityka-prywatności"
          :IsRouterLink="true"
        >
          &nbsp;Polityka Prywatności</text-links
        >,
        <text-links classes="footer__link" href="/kontakt" :IsRouterLink="true"
          >Kontakt</text-links
        >,
      </span>
      <span class="inline-block">
        &nbsp;Wykonanie:
        <text-links
          classes="footer__link"
          href="https://pk-program.pl"
          :IsExternalLink="true"
        >
          PK Program</text-links
        >,&nbsp;</span
      ><span class="inline-block">© 2021</span>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply bg-main text-white p-5 text-center text-base xs:text-xl;

  &__link {
    @apply text-white no-underline;
  }
}
</style>
