<template>
  <button class="btn-top" @click="scrollToTop">
    <img src="../../assets/img/right-arrow.png" alt="Do Góry" />
  </button>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollBy(0, -1 * window.pageYOffset);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-top {
  @apply fixed bottom-4 right-4 w-14 h-12 rounded-xl md:hover:opacity-75 transition-opacity z-30 hidden bg-main justify-center content-center flex-wrap;
}
</style>
