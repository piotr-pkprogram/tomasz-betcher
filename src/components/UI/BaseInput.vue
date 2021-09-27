<template>
  <textarea
    v-if="type === 'textarea'"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    v-model="input"
    @focusout="savedEmailMessageElement"
  />
  <input
    v-else
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :type="type"
    v-model="input"
    @focusout="savedEmailMessageElement"
  />
</template>

<script>
export default {
  props: {
    placeholder: String,
    type: String,
    name: String,
    classes: {
      required: false,
    },
  },
  data() {
    return {
      input: null,
    };
  },
  methods: {
    savedEmailMessageElement() {
      this.$store.dispatch("setLocalStorage", {
        name: this.name,
        value: this.input,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
textarea,
input {
  @apply md:focus:bg-white border-black border-solid border-4 rounded-2xl resize-y p-2 w-full block min-h-12 transition-colors;

  &:focus-visible {
    @apply outline-none;
  }
}
</style>
