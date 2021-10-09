<template>
  <div></div>
</template>

<script>
export default {
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    next();
  },
};
</script>

<style lang="scss" scoped></style>
