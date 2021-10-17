<template>
  <div class="error-box">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error-box {
  @apply absolute w-full h-full z-30 bg-white grid justify-items-center content-center gap-1 text-main;
}
</style>
