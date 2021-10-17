<template>
  <li :class="classes">
    <a rel="noopnener noreferrer" :href="href" target="_blank">
      <img
        :class="type === 'phone' ? 'h-5' : ''"
        :src="
          require(`../../../assets/img/${
            type === 'phone' ? 'white-' + iconSrc : iconSrc
          }`)
        "
        :alt="alt"
      />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: String,
    iconSrc: String,
    alt: String,
    type: {
      type: String,
      required: false,
    },
    classes: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  &:hover {
    @apply opacity-75 transition-opacity;
  }
}
</style>
