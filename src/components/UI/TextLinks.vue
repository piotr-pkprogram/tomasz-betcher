<template>
  <a
    v-if="IsExternalLink"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="classes"
  >
    <slot></slot>
  </a>
  <a v-else-if="!IsRouterLink" :href="href" :class="classes">
    <slot></slot>
  </a>
  <router-link v-else :to="href" :class="classes">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    href: String,
    classes: {
      type: String,
      required: false,
    },
    IsExternalLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    IsRouterLink: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  @apply md:hover:opacity-75 transition-opacity text-gray-300 underline;
}
</style>
