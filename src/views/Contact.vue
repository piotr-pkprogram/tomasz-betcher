<template>
  <section class="contact">
    <div class="contact__columns">
      <img
        src="../assets/img/tomasz-betcher-w-salonie-w-swoim-domu.jpg"
        alt="Tomasz Betcher robiący sobie selfie w jego salonie. W tle znajdują się dwa granatowe krzesła wraz z drewnianym stolikiem oraz mała lampa stojąca i duża roślina w doniczce. Z okona w salonie przez firanki dochodzi jasne białe światło słońca."
        class="contact__img"
      />
    </div>
    <div class="contact__columns">
      <form action="" class="contact__form" @submit.prevent="validationForm">
        <span class="contact__cta">Wyślij wiadomość</span>
        <base-input
          placeholder="Imię*"
          type="text"
          name="name"
          :classes="nameInputClasses"
          @input="validateName"
        ></base-input>
        <span :class="chatBubbleNameClasses"> *To pole musi zostać wypełnione! </span>
        <base-input
          classes="contact__input contact__input--topic"
          placeholder="Temat"
          type="text"
          name="topic"
        ></base-input>
        <base-input
          placeholder="Adres email*"
          type="email"
          name="email"
          :classes="emailInputClasses"
          @input="validateEmail"
        ></base-input>
        <span :class="chatBubbleEmailClasses" ref="emailBubble">
          *To pole musi zostać wypełnione!
        </span>
        <base-input
          classes="contact__input contact__input--message"
          placeholder="Wiadomość"
          type="textarea"
          name="message"
        ></base-input>
        <div
          class="g-recaptcha"
          data-sitekey="6Lc7g7wcAAAAABABu9SWI4Ix_hjPNNAo_mx3-BsY"
        ></div>
        <base-button classes="contact__send dark-btn rounded-full" type="submit"
          >Wyślij
          <svg viewBox="25 25 50 50" class="contact__loader" ref="loader">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        </base-button>
        <span class="loader-message" ref="loaderMessage"
          >Wysyłanie wiadomość trwa dłużej niż zwykle. Sprawdź swoje połączenie z
          internetem.
        </span>
      </form>
    </div>
  </section>
</template>

<script>
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef*/
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      isNameValueCorrect: true,
      isEmailValueCorrect: true,
    };
  },
  computed: {
    nameInputClasses() {
      return {
        contact__input: true,
        "contact__input--name": true,
        "contact__input--error": !this.isNameValueCorrect,
      };
    },
    chatBubbleNameClasses() {
      return { "chat-bubble": true, block: !this.isNameValueCorrect };
    },
    emailInputClasses() {
      return {
        contact__input: true,
        "contact__input--email": true,
        "contact__input--error": !this.isEmailValueCorrect,
      };
    },
    chatBubbleEmailClasses() {
      return {
        "chat-bubble": true,
        "chat-bubble--email": true,
        block: !this.isEmailValueCorrect,
      };
    },
  },
  methods: {
    validateName() {
      const inputs = document.querySelectorAll(".contact__input");

      if (inputs[0].value.trim() === "") {
        this.isNameValueCorrect = false;
      } else {
        this.isNameValueCorrect = true;
      }
    },
    validateEmail() {
      const inputs = document.querySelectorAll(".contact__input");
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (inputs[2].value.trim() === "") {
        this.$refs.emailBubble.innerHTML = "*To pole musi być wypełnione";
        this.isEmailValueCorrect = false;
      } else if (emailRegex.test(inputs[2].value.trim()) === false) {
        this.$refs.emailBubble.innerHTML = "*Zawartość tego pola nie jest email-em";
        this.isEmailValueCorrect = false;
      } else {
        this.isEmailValueCorrect = true;
      }
    },
    validationForm(e) {
      this.validateName();
      this.validateEmail();

      if (this.isEmailValueCorrect === true && this.isNameValueCorrect === true)
        this.sendEmail(e.target);
    },
    sendEmail(form) {
      const loader = this.$refs.loader;
      const loaderMessage = this.$refs.loaderMessage;
      const submitBtn = document.querySelector(".contact__send");
      const inputs = form.querySelectorAll(".contact__input");

      submitBtn.setAttribute("disabled", "disabled");
      loaderMessage.classList.remove("block");
      loader.classList.add("block");

      const timeout = setTimeout(() => {
        loaderMessage.classList.add("block");
      }, 2500);

      emailjs
        .sendForm(
          "service_ee4ooft",
          "template_qn3es2e",
          form,
          "user_lMRCEmHpYEa191SzKn8aZ"
        )
        .then(
          (res) => {
            if (res.status === 200) {
              loaderMessage.innerHTML =
                "Twoja wiadomość zostałą wysłana pomyślnie. Dziękujemy za skontaktowanie się z nami :)";
              loaderMessage.classList.add("block");
              loaderMessage.classList.remove("text-red-500");
              inputs.forEach((input) => {
                localStorage.removeItem(input.getAttribute("name"));
                input.value = "";
              });
            }
            clearTimeout(timeout);
            submitBtn.removeAttribute("disabled");
            loader.classList.remove("block");
          },
          (err) => {
            let message =
              "Podczas wysyłania wiadomości wystąpił błąd. Prosimy spróbować ponownie.";

            if (!navigator.onLine) {
              message =
                "Brak połączenia z internetem. Prosimy połączyć się z internetem i wysłać wiadomość ponownie.";
            } else if (err.text === "The g-recaptcha-response parameter not found") {
              message =
                "Wiadmość nie została wysłana. Potwierdź, że nie jesteś robotem i spróbuj ponownie :).";
            }

            loaderMessage.innerHTML = message;
            loaderMessage.classList.add("text-red-500", "block");
            clearTimeout(timeout);
            submitBtn.removeAttribute("disabled");
            loader.classList.remove("block");
          }
        );
    },
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    next();
  },
  mounted() {
    const existRecaptchaJs = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );
    existRecaptchaJs?.remove();

    const recaptchaJs = document.createElement("script");
    recaptchaJs.setAttribute("src", "https://www.google.com/recaptcha/api.js");
    document.head.appendChild(recaptchaJs);
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply grid lg:grid-flow-col lg:grid-cols-2 bg-no-repeat bg-cover p-2 md:p-4 gap-2 lg:gap-3 h-full;
  background-image: url(../assets/img/łąka-w-górach-a-w-tle-wschód-słońca.jpg);
  background-position: 50%;
  min-height: 800px;

  &__columns {
    @apply flex flex-wrap items-center justify-center p-2;
  }

  &__img {
    @apply rounded-3xl lg:w-auto lg:h-auto w-full;
    @media (min-width: 475px) {
      height: 427.5px;
      width: 427.5px;
    }
  }

  &__form {
    @apply rounded-3xl w-full grid gap-x-4 gap-6 p-2 md:p-4 justify-items-center justify-center;
    @media (min-width: 475px) {
      @apply bg-white;
      max-width: 512px;
      min-height: 574px;
      box-shadow: 0 0 100px 5px rgba(97, 3, 2, 0.4);
    }
  }

  &__cta {
    @apply h-min w-full col-1/2 text-center font-medium text-2xl self-center;
  }

  &__input {
    @apply h-min;
    &--name {
      @apply w-full mr-0 row-2;
      max-width: 171px;
      @media (min-width: 475px) {
        @apply mr-8;
      }
    }
    &--topic {
      @apply w-full row-2;
      max-width: 171px;
    }
    &--email {
      @apply col-1/2;
      max-width: 393px;
    }
    &--message {
      @apply col-1/2;
      max-width: 393px;
      min-height: 200px;
      @media (min-width: 475px) {
        min-height: 265px;
      }
    }

    &--error {
      @apply border-red-600 text-red-600;
      &::placeholder {
        @apply text-red-600;
      }
    }
  }

  &__send {
    @apply justify-self-start relative;
    min-width: 113px !important;
  }

  &__loader {
    @apply hidden bg-cover z-10 absolute top-1 left-30 border-transparent border-3 border-solid;
    width: 2em;
    transform-origin: center;
    animation: rotate 2s linear infinite;

    & circle {
      fill: none;
      stroke: #610302;
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }
}

.chat-bubble {
  @apply text-red-600 hidden col-1/2 text-base font-bold bg-white w-full rounded-lg justify-self-start;
}

.g-recaptcha {
  @apply justify-self-start col-1/2;
}

.loader-message {
  @apply text-black col-1/2 p-2 bg-f6 border-2 rounded-lg hidden;
  max-width: 393px;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
