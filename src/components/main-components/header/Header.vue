<template>
  <header v-if="type === 'normal'" class="header">
    <router-link to="/" class="header__start-link">
      <img class="header__logo" src="../../../assets/img/logo.png" alt="Tomasz Betcher" />
    </router-link>
    <ul class="header__menu-list">
      <menu-element
        v-for="element in menuElements"
        :key="element.id"
        :href="element.href"
        :text-value="element.textValue"
        :IsExternalLink="element.IsExternalLink"
        classes="header__menu-element"
      ></menu-element>
    </ul>
    <ul class="header__links-list">
      <links-element
        v-for="element in liksElements"
        :key="element.id"
        :href="element.href"
        :iconSrc="element.iconSrc"
        :alt="element.alt"
        classes="header__links-element"
      ></links-element>
    </ul>
  </header>
  <header v-else class="phone-header">
    <router-link to="/" class="phone-header__start-link">
      <img
        class="phone-header__logo"
        src="../../../assets/img/logo.png"
        alt="Tomasz Betcher"
      />
    </router-link>
    <button class="phone-header__btn" @click="openClosePhoneMenu">
      <div class="phone-header__btn-element"></div>
      <div class="phone-header__btn-element"></div>
      <div class="phone-header__btn-element"></div>
    </button>
    <ul v-if="type === 'phone'" class="phone-menu">
      <menu-element
        v-for="element in menuElements"
        :key="element.id"
        :href="element.href"
        :text-value="element.textValue"
        :IsExternalLink="element.IsExternalLink ? element.IsExternalLink : null"
        classes="phone-menu__element"
      ></menu-element>
      <li class="phone-menu__links">
        <ul class="phone-menu__links-list">
          <links-element
            v-for="element in liksElements"
            :key="element.id"
            :href="element.href"
            :iconSrc="element.iconSrc"
            :alt="element.alt"
            classes="phone-header__links-element"
            type="phone"
          ></links-element>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
/* eslint-disable for-direction */
/* eslint-disable prettier/prettier */
import MenuElement from "./MenuElement.vue";
import LinksElement from "./LinksElement.vue";

export default {
  components: {
    MenuElement,
    LinksElement,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "normal",
    },
  },
  data() {
    return {
      menuElements: this.$store.getters.menuElements,
      liksElements: this.$store.getters.socialMedia,
      isShowSocialList: false,
      isShowPhoneSocialList: false,
    };
  },

  methods: {
    openClosePhoneMenu() {
      this.$store.commit("openClosePhoneMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply h-28 hidden grid-flow-col items-center md:grid bg-white w-full relative z-30;

  @media (min-width: 1921px) {
    max-width: 1920px;
  }

  &__start-link {
    @apply w-max justify-self-center;
  }

  &__logo {
    @apply h-28;
  }

  &__menu-list {
    @apply flex h-min justify-end mr-4;
  }

  &__menu-element {
    @apply pt-0 pb-0 pl-3 pr-3 flex content-center hover:text-main transition-colors;
  }

  &__links-list {
    @apply justify-self-center flex gap-5 w-max;
  }

  &__links-element {
    @apply hover:opacity-70 transition-colors;
  }
}

.phone-header {
  @apply grid grid-flow-col grid-cols-4/6 fixed top-0 z-20 w-full md:hidden bg-white max-h-36 min-h-58.5 border-solid filter drop-shadow-sm justify-items-center;

  &__start-link {
    @apply w-max;
  }

  &__logo {
    @apply w-44 max-w-full;
  }

  &__btn {
    @apply grid content-center h-full pb-2 justify-self-end min-w-32 z-20;

    &-element {
      @apply mt-2 border-solid rounded-full border-black border-1.5 justify-self-center w-1/2 bg-black transition-colors;
    }
  }
}

.phone-menu {
  @apply absolute right-0 h-screen pt-20 filter drop-shadow-md transform translate-x-full hidden w-96;
  max-width: 90%;
  background-color: #3a3a3aef;

  &__element {
    @apply p-2 pl-4 text-left text-2xl font-bold text-f6 transition-colors;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  &__links {
    @apply mt-8;

    &-list {
      @apply ml-3 flex gap-3;
    }
  }
}
</style>
