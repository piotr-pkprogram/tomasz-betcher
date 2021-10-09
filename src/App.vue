<template>
  <the-header></the-header>
  <the-header type="phone"></the-header>
  <main>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <the-footer></the-footer>
  <teleport to="body">
    <button-top></button-top>
    <transition name="agree" mode="out-in">
      <agree-widget></agree-widget>
    </transition>
  </teleport>
</template>

<script>
/*eslint-disable no-empty*/
/*eslint-disable prettier/prettier*/
import AgreeWidget from "./components/main-components/agreeWidget.vue";
import ButtonTop from "./components/main-components/ButtonTop.vue";
import TheHeader from "./components/main-components/header/Header.vue";
import TheFooter from "./components/main-components/Footer.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ButtonTop,
    AgreeWidget,
  },
  methods: {
    menuAnimation() {
      const main = document.querySelector("main");
      const header = document.querySelector(".header");

      if (window.pageYOffset >= 115 && document.body.offsetWidth >= 768) {
        main.style.marginTop = "112px";
        header.classList.add("fixed", "top-0", "animate-menuAnimation");
      } else if (document.body.offsetWidth > 768) {
        main.style.marginTop = "0";
        header.classList.remove("fixed", "top-0", "animate-menuAnimation");
      }
    },
    buttonTopAppear() {
      const buttonTop = document.querySelector(".btn-top");

      if (window.pageYOffset >= 370) {
        buttonTop.classList.remove("animate-hidden");
        buttonTop.classList.add("flex", "animate-appear");
      } else {
        buttonTop.classList.add("animate-hidden");
        buttonTop.classList.remove("flex", "animate-appear");
      }
    },
    delayOfIframe() {
      if (window.pageYOffset >= 780) {
        const fIframes = document.querySelectorAll("fiframe");

        fIframes.forEach((fiframe) => {
          try {
            const fiframeParent = fiframe.parentNode;

            const iframe = document.createElement("iframe");
            iframe.setAttribute("class", fiframe.getAttribute("class"));
            iframe.setAttribute("src", fiframe.getAttribute("src"));
            iframe.setAttribute("title", fiframe.getAttribute("title"));
            iframe.setAttribute("frameborder", fiframe.getAttribute("frameborder"));
            iframe.setAttribute("allow", fiframe.getAttribute("allow"));
            iframe.setAttribute("allowfullscreen", "");

            fiframe.remove();
            fiframeParent.appendChild(iframe);
          } catch (e) {}
        });

        this.$store.state.IsFiframeTransform = true;
      } else return;
    },
  },
  created() {
    window.addEventListener("scroll", this.menuAnimation);
    window.addEventListener("scroll", this.buttonTopAppear);
    window.addEventListener("scroll", this.delayOfIframe);
  },
  mounted() {
    const agreeWidget = document.querySelector(".agree-widget");

    if (document.cookie.includes("agreePrivacyPolicy=true")) {
      agreeWidget.remove();
    }
  },
};
</script>

<style lang="scss">
html {
  font-size: 16px;
  scroll-behavior: smooth;
}

* {
  @apply z-0;
}

body {
  font-family: "Inter", Helvetica, Arial, sans-serif !important;
  @apply relative grid;

  @media (min-width: 1921px) {
    @apply justify-center;
  }
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
button,
span,
input,
textarea,
div,
li,
strong,
b,
br,
i,
label,
article,
address,
sub,
sup {
  &::selection {
    @apply text-main bg-gray-300;
  }
}

img,
svg {
  &::selection {
    @apply bg-df bg-opacity-75;
  }
}

button {
  &:focus {
    outline: 0px solid transparent !important;
  }
}

main {
  @apply mt-18 md:mt-0;
}

#app {
  @media (min-width: 1921px) {
    width: 1920px;
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.route-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.agree-enter-from {
  opacity: 0;
}

.agree-leave-to {
  opacity: 0;
}

.agree-enter-active {
  transition: opacity 0.3s ease-out;
}

.agree-leave-active {
  transition: opacity 0.3s ease-in;
}

.agree-enter-to,
.agree-leave-from {
  opacity: 1;
}
</style>
