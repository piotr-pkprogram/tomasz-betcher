<template>
  <div class="book" :style="`background-image: url(${book.bg_img})`">
    <error-box v-if="error_visable.online">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        width="64"
        height="64"
        x="0"
        y="0"
        viewBox="0 0 64 64"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg" id="Layer_64" data-name="Layer 64">
            <path
              d="m54.00043 35.87836a26.52117 26.52117 0 1 0 -13.924 18.44122 12.236 12.236 0 1 0 13.924-18.44122zm-3.75043-.5932a12.17186 12.17186 0 0 0 -7.59674 2.66c.22174-2.1936.35608-4.31567.39172-6.20984h9.43708a24.62784 24.62784 0 0 1 -.43152 3.69739 12.22312 12.22312 0 0 0 -1.80054-.14755zm-21.23975 19.91845v-9.56653a41.00153 41.00153 0 0 1 9.03528 1.181c-.01355.23511-.03576.4679-.03576.70636a12.19684 12.19684 0 0 0 .3283 2.77094 16.25278 16.25278 0 0 1 -1.32953 3.23022 24.57436 24.57436 0 0 1 -7.99829 1.67801zm-10.07806-1.71911a24.27642 24.27642 0 0 1 -2.17719-6.34357 39.86318 39.86318 0 0 1 10.25525-1.50763v9.5767a24.33042 24.33042 0 0 1 -8.07806-1.7255zm-2.80019-1.33118a24.6075 24.6075 0 0 1 -4.29834-3.04047 24.2557 24.2557 0 0 1 3.01746-1.341 36.34322 36.34322 0 0 0 1.28088 4.38147zm-12.59642-22.41797a24.40706 24.40706 0 0 1 6.78333-15.92254 25.83163 25.83163 0 0 0 4.09942 1.85864 87.34281 87.34281 0 0 0 -1.53985 14.0639zm23.47467-23.47467v9.58649a39.8674 39.8674 0 0 1 -10.26745-1.51068 24.81643 24.81643 0 0 1 2.15-6.33472 24.33034 24.33034 0 0 1 8.11745-1.74109zm9.98981 1.69061a24.60573 24.60573 0 0 1 2.18359 6.41071 39.91913 39.91913 0 0 1 -10.1734 1.48511v-9.58643a24.33054 24.33054 0 0 1 7.98981 1.69061zm2.78668 1.3075a24.60984 24.60984 0 0 1 4.40753 3.10547 24.35558 24.35558 0 0 1 -3.10583 1.37286 36.64 36.64 0 0 0 -1.3017-4.47833zm-10.77649 8.58783a42.05455 42.05455 0 0 0 10.587-1.5304 82.74334 82.74334 0 0 1 1.44452 13.41913h-12.03152zm-14.17083-4.14172a24.22089 24.22089 0 0 1 -3.01294-1.3409 24.61688 24.61688 0 0 1 4.28058-3.03228 36.84477 36.84477 0 0 0 -1.26764 4.37318zm1.48864 2.58489a42.009 42.009 0 0 0 10.68219 1.55689v11.88867h-12.13159a82.741 82.741 0 0 1 1.4494-13.44556zm10.68219 15.44556v11.8985a42.00744 42.00744 0 0 0 -10.67352 1.5545 82.24182 82.24182 0 0 1 -1.45813-13.453zm11.30829 13.09387a43.13837 43.13837 0 0 0 -9.30829-1.192v-11.90187h12.03461a80.88182 80.88182 0 0 1 -.68115 8.60217 12.17052 12.17052 0 0 0 -2.04517 4.4917zm14.16638-15.09387h-9.443a87.35782 87.35782 0 0 0 -1.53314-14.03064 25.9222 25.9222 0 0 0 4.19226-1.89245 24.40718 24.40718 0 0 1 6.78388 15.92309zm-48.94934 2h9.34284a86.81121 86.81121 0 0 0 1.54925 14.07044 25.85567 25.85567 0 0 0 -4.10247 1.85864 24.4074 24.4074 0 0 1 -6.78962-15.92908zm46.71442 26.0293a10.23975 10.23975 0 1 1 10.23975-10.24024 10.25183 10.25183 0 0 1 -10.23975 10.24024zm7.2168-14.23047a.99934.99934 0 0 0 -1.584-.22656l-9.8501 9.85058a.99978.99978 0 0 0 .22706 1.584 8.2515 8.2515 0 0 0 12.23-7.21778 8.32748 8.32748 0 0 0 -1.02296-3.99024zm-7.2168 10.23047a6.24016 6.24016 0 0 1 -1.74951-.2461l7.74072-7.74121a6.24328 6.24328 0 0 1 -5.99121 7.98731zm4.5-12.709a1.00047 1.00047 0 0 0 -.50391-.73535 8.12633 8.12633 0 0 0 -3.99609-1.03514 8.237 8.237 0 0 0 -7.20361 12.2373 1.00055 1.00055 0 0 0 .73584.50293.93216.93216 0 0 0 .13769.00977 1.00112 1.00112 0 0 0 .707-.293l9.83985-9.84082a1.0006 1.0006 0 0 0 .28323-.84568zm-10.48828 8.22365a6.2468 6.2468 0 0 1 7.74365-7.74512z"
              fill="#610302"
              data-original="#000000"
              style=""
              class=""
            />
          </g>
        </g>
      </svg>
      <span>Nie można wczytać książek</span>
      <span>Brak połączenia z internetem</span>
    </error-box>
    <error-box v-else-if="error_visable.server">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        version="1.1"
        width="64"
        height="64"
        x="0"
        y="0"
        viewBox="0 0 510 510"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
        class=""
      >
        <g>
          <g xmlns="http://www.w3.org/2000/svg">
            <path
              d="m0 0v334.154c0 30.793 25.053 55.846 55.846 55.846h154.154v30h-23.226c-28.548 0-51.774 23.226-51.774 51.774v38.226h240v-38.226c0-28.548-23.226-51.774-51.774-51.774h-23.226v-30h154.154c30.793 0 55.846-25.053 55.846-55.846v-334.154zm480 30v270h-450v-270zm-135 441.774v8.226h-180v-8.226c0-12.007 9.768-21.774 21.774-21.774h136.451c12.007 0 21.775 9.768 21.775 21.774zm-75-51.774h-30v-30h30zm184.154-60h-398.308c-14.251 0-25.846-11.595-25.846-25.846v-4.154h450v4.154c0 14.251-11.595 25.846-25.846 25.846z"
              fill="#610302"
              data-original="#000000"
              style=""
              class=""
            />
            <path
              d="m131.967 154.246 21.213-21.213 21.214 21.213 21.212-21.213-21.213-21.213 21.213-21.214-21.212-21.212-21.214 21.213-21.213-21.213-21.213 21.212 21.213 21.214-21.213 21.213z"
              fill="#610302"
              data-original="#000000"
              style=""
              class=""
            />
            <path
              d="m340.606 154.246 21.214-21.213 21.213 21.213 21.213-21.213-21.213-21.213 21.213-21.214-21.213-21.212-21.213 21.213-21.214-21.213-21.212 21.212 21.213 21.214-21.213 21.213z"
              fill="#610302"
              data-original="#000000"
              style=""
              class=""
            />
            <path
              d="m157.952 240.151c58.046-40.033 136.047-40.036 194.097.001l39.436 27.196 17.031-24.697-39.435-27.195c-33.698-23.241-73.146-35.524-114.081-35.524s-80.383 12.283-114.08 35.523l-39.436 27.196 17.031 24.697z"
              fill="#610302"
              data-original="#000000"
              style=""
              class=""
            />
          </g>
        </g>
      </svg>
      <span>Wystąpił błąd {{ error_status }}</span>
      <span>Nie można wczytać książek</span>
    </error-box>
    <div class="book__cta">
      <img :src="book.src" :alt="book.alt" class="book__img" />
      <div class="book__desc-container">
        <h2 class="book__title-book">{{ book.title }}</h2>
        <span class="book__genre">{{ book.genre }}</span>
        <span class="book__review">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M7.16228 30.7279C6.81168 30.7279 6.46353 30.6185 6.1664 30.4037C5.61292 30.0025 5.35437 29.3131 5.50501 28.6478L7.56366 19.5794L0.582033 13.4567C0.0688362 13.0087 -0.127214 12.2992 0.0834851 11.65C0.294184 11.0021 0.867441 10.5433 1.54617 10.4806L10.7837 9.64192L14.4359 1.09507C14.7052 0.467128 15.3185 0.0615997 15.9999 0.0615997C16.6813 0.0615997 17.2946 0.467128 17.5639 1.09361L21.2161 9.64192L30.4522 10.4806C31.1324 10.5418 31.7056 11.0021 31.9163 11.65C32.127 12.298 31.9322 13.0087 31.419 13.4567L24.4374 19.5782L26.496 28.6463C26.6469 29.3131 26.3881 30.0025 25.8349 30.4025C25.2829 30.8024 24.5468 30.8331 23.9654 30.4838L15.9999 25.7236L8.03437 30.4864C7.76508 30.6464 7.46502 30.7279 7.16228 30.7279ZM15.9999 23.673C16.3027 23.673 16.6025 23.7543 16.872 23.9143L24.3895 28.4105L22.4466 19.8514C22.3079 19.2423 22.5147 18.6063 22.9854 18.1941L29.5776 12.4127L20.856 11.6207C20.228 11.5634 19.688 11.1686 19.4426 10.5899L15.9999 2.52431L12.553 10.5912C12.3104 11.1659 11.7703 11.5607 11.1438 11.618L2.42095 12.4101L9.01291 18.1915C9.48509 18.6048 9.69164 19.2396 9.55175 19.8502L7.61029 28.409L15.1278 23.9143C15.3971 23.7543 15.6972 23.673 15.9999 23.673ZM10.7132 9.80721C10.7132 9.80721 10.7132 9.80867 10.7117 9.80989L10.7132 9.80721ZM21.284 9.8033L21.2854 9.80599C21.2854 9.80452 21.2854 9.80452 21.284 9.8033Z"
                fill="#610302"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {{ book.review }}
        </span>
      </div>
      <base-button
        classes="book__buy dark-btn rounded-full relative"
        type="external-link"
        :to="book.like_read"
        >Zakup Książkę
        <span class="book__btn-desc">na stronie lubimyczytać.pl</span>
      </base-button>
    </div>
    <p class="book__desc">{{ book.desc }}</p>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import addMetaTags from "./metaFunctions.js";

let IsSetMeta = false;

export default {
  data() {
    return {
      book: {},
      error_visable: {
        online: false,
        server: false,
      },
      error_status: 0,
    };
  },
  methods: {
    async getBooks() {
      if (IsSetMeta) {
        let title = this.$route.params.bookTitle;

        const arr = title.split("");
        title = arr.map((el, i) => (i == 0 ? el.toUpperCase() : el)).join("");
        this.book = JSON.parse(localStorage.getItem(title.replace(/-/g, " ")));

        setTimeout(() => {
          this.$store.commit("appearHiddenLoader", false);
        }, 750);
      } else {
        // await fetch("/getBooks.php")
        await fetch("http://localhost/tomasz-betcher.pl/getBooks.php")
          .then((res) => {
            if (res.ok) return res.json();
            else throw new Error("Wystąpił błąd");
          })
          .then((json) => {
            const booksArr = json.results.map((book) => book.properties).reverse();

            let books = booksArr.map((book) => {
              try {
                book.id = uuidv4();
                book.title = book.Tytuł.title[0].plain_text;
                delete book.Tytuł;
                book.genre = book.Gatunek.multi_select
                  .map((genre) => genre.name)
                  .join(", ");
                delete book.Gatunek;
                book.review = book.Ocena.rich_text[0].plain_text;
                delete book.Ocena;
                book.link = book.Link.url;
                delete book.Link;
                book.bg_img = book.Zdjęcie_w_tle.files[0].file.url;
                delete book.Zdjęcie_w_tle;
                book.src = book.Zdjęcie_książki.files[0].file.url;
                delete book.Zdjęcie_książki;
                book.alt = book.Tekst_alternatywny.rich_text[0].plain_text;
                delete book.Tekst_alternatywny;
                book.like_read = book.Link_do_lubimyczytać.url;
                delete book.Link_do_lubimyczytać;
                book.desc = book.Opis.rich_text[0].plain_text;
                delete book.Opis;

                return book;
                // eslint-disable-next-line no-empty
              } catch {}
            });
            books = books.filter((book) => book !== undefined);

            const bookLink = this.$route.params.bookTitle;

            this.book = books.find((book) => book.link === `/książki/${bookLink}`);
            setTimeout(() => {
              this.$store.commit("appearHiddenLoader", false);
            }, 750);

            addMetaTags(this.book);
          })
          .catch((err) => {
            const main = document.querySelector("main");

            setTimeout(() => {
              this.$store.commit("appearHiddenLoader", false);
              if (!window.navigator.onLine) {
                this.error_visable.online = true;
                main.classList.remove("h-auto");
              } else {
                this.error_visable.server = true;
                this.error_status = err.status;
                main.classList.remove("h-auto");
              }
            }, 500);
          });
      }
    },
  },
  mounted() {
    this.getBooks();
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  beforeRouteEnter(to, _from, next) {
    let title = to.params.bookTitle;

    const arr = title.split("");
    title = arr.map((el, i) => (i == 0 ? el.toUpperCase() : el)).join("");
    const book = JSON.parse(localStorage.getItem(title.replace(/-/g, " ")));

    if (book) {
      addMetaTags(book);
      IsSetMeta = true;
    }

    next();
  },
  beforeRouteUpdate(to, _from, next) {
    let title = to.params.bookTitle;

    const arr = title.split("");
    title = arr.map((el, i) => (i == 0 ? el.toUpperCase() : el)).join("");
    const book = JSON.parse(localStorage.getItem(title).replace(/-/g, " "));
    console.log(title);

    if (book) {
      addMetaTags(book);
      IsSetMeta = true;
    }

    next();
  },
};
</script>

<style lang="scss" scoped>
.book {
  @apply grid gap-20 bg-no-repeat bg-cover p-5 justify-center relative;
  background-position: bottom;

  &__cta {
    @apply grid justify-items-center p-5 gap-y-3;
    max-width: 1300px;
    @media (min-width: 320px) {
      justify-items: normal;
    }
    @media (min-width: 950px) {
      height: 419px;
      @apply grid-flow-col justify-items-center;
    }
  }

  &__img {
    @apply rounded-3xl self-end row-start-2;
    @media (min-width: 950px) {
      @apply h-auto row-start-1;
    }
  }

  &__desc-container {
    @apply w-full h-full p-3 justify-self-start self-center grid content-start gap-2 row-start-1;
    max-height: 351px;
    @media (min-width: 1210px) {
      @apply transform -translate-x-10;
    }
  }

  &__title-book {
    @apply font-medium text-3xl;
    @media (min-width: 320px) {
      @apply text-5xl;
    }
  }

  &__genre {
    @apply font-medium text-lg;
    color: #9c9a9a;
    @media (min-width: 320px) {
      @apply text-2xl;
    }
  }

  &__review {
    @apply font-medium text-lg text-black flex flex-wrap gap-3;
    @media (min-width: 320px) {
      @apply text-2xl;
    }
  }

  &__buy {
    @apply self-end;
    @media (min-width: 500px) {
      @apply row-start-2 justify-self-end;
    }

    @media (min-width: 950px) {
      @apply row-start-1;
    }
  }
  &__btn-desc {
    @apply absolute left-0 -bottom-6 w-full text-black text-center;
    font-size: 13px;
  }

  &__desc {
    @apply p-5 bg-white bg-opacity-75 rounded-3xl justify-self-center text-xl;
    max-width: 1300px;
  }
}
</style>
