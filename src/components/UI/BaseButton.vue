<template>
  <router-link :class="classes" :to="to" v-if="type === 'router-link'">
    <slot></slot>
  </router-link>
  <a
    v-else-if="type === 'external-link'"
    :class="classes"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
  <button v-else :type="type" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
    to: {
      type: String,
      required: false,
    },
    classes: String,
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  @apply md:hover:opacity-80 transition-opacity w-max p-3 text-xl h-min;
}

.dark-btn {
  @apply rounded-lg text-white min-w-20 block bg-main;
}

.light-btn {
  @apply rounded-lg min-w-20 text-main bg-white block border-2 border-main border-solid;
}
</style>
