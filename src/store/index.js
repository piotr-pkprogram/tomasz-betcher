/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

import { v4 as uuidv4 } from "uuid";

export default createStore({
    state: {
        menuElements: [{
                id: uuidv4(),
                href: "/",
                textValue: "Start",
            },
            {
                id: uuidv4(),
                href: "/kim-jestem",
                textValue: "Kim Jestem",
            },
            {
                id: uuidv4(),
                href: "/książki",
                textValue: "Książki",
            },
            {
                id: uuidv4(),
                href: "/kontakt",
                textValue: "Kontakt",
            },
        ],
        socialMedia: [{
                id: uuidv4(),
                href: "https://www.facebook.com/tomaszbetcherfanpage",
                iconSrc: "facebook.png",
                alt: "Facebook"
            },
            {
                id: uuidv4(),
                href: "https://lubimyczytac.pl/autor/174267/tomasz-betcher?fbclid=IwAR3syTNsqHYM3ijxTu1XZuBG49ha3yYQeL5Y4juKH0WB7Od_Z9B-pKofPTo",
                iconSrc: "lubimyczytac.png",
                alt: "Lubimyczytac"
            },
        ],
        isPhoneMenuOpen: false,
        IsFiframeTransform: false,
        books: [{
                id: uuidv4(),
                title: "Szeptun",
                genre: "Literatura obyczajowa, romans",
                review: "7,3 / 10",
                link: "/książki/szeptun",
                bg_img: require("../assets/img/books/ogromna-zielona-łąka-z-drzewami-w-niektórych-miejscach.jpg"),
                src: require("../assets/img/books/książka-szeptun-tomasza-betchera.jpg"),
                alt: "Okładka książki Szeptun Tomasza Betcher, przedstawiająca kobietę i mężczyznę przytulających się do sibie, który znajdują się w lesie na jakiejś skale i wpatrują się w góry."
            },
            {
                id: uuidv4(),
                title: "Wigilijne Opowieści",
                genre: "Literatura piękna",
                review: "7,1 / 10",
                link: "/książki/wigilijne-opowieści",
                bg_img: require("../assets/img/books/kilka-świątecznych-prezentów-leżących-na-ciemnobrązowym-stole.jpg"),
                src: require("../assets/img/books/książka-wigilijne-opowieści-tomasza-betchera.jpg"),
                alt: "Okładka Książki Wigilijne Opowieści Tomasza Betchera przedstawiająca czerwone woreczki świateczne z jakimiś prezentami, ułożone w czterech rzędach na białym tle."
            },
            {
                id: uuidv4(),
                title: "Szczęście z piernika",
                genre: "Literatura obyczajowa, romans",
                review: "7,2 / 10",
                link: "/książki/szczęście-z-piernika",
                bg_img: require("../assets/img/books/kilka-świeżych-pierników-leżących-w-misce-do-okołagałązki-świerku.jpg"),
                src: require("../assets/img/books/okładka-książki-szczęście-z-piernika-tomasza-betchera.jpg"),
                alt: "Okładka książki Szczęście z piernika Tomasza Betchera przedstawiająca łańcuszek ze świątecznych ozdub na zielonym tle."
            },
            {
                id: uuidv4(),
                title: "Tam gdzie jesteś",
                genre: "Literatura obyczajowa, romans",
                review: "7,5 / 10",
                link: "/książki/tam-gdzie-jesteś",
                bg_img: require("../assets/img/books/mężczyzna-płynący-po-jeziorze-łódką-wśród-lasu-i-gór.jpg"),
                src: require("../assets/img/books/okładka-ksiązki-tam-gdzie-jesteś-tomasza-betcher.jpg"),
                alt: "Okładka książki Tam gdzie jesteś Tomasza Betchera przedstawiająca kobietę i mężczyznę całujących się na białym tle, a u góry samotną łódkę znajdującą się na jeziorze"
            },
        ]
    },
    getters: {
        menuElements(state) {
            return state.menuElements;
        },
        socialMedia(state) {
            return state.socialMedia;
        },
        isPhoneMenuOpen(state) {
            return state.isPhoneMenuOpen;
        },
        IsFiframeTransform(state) {
            return state.IsFiframeTransform;
        },
        books(state) {
            return state.books;
        }
    },
    mutations: {
        openClosePhoneMenu(state) {
            const phoneMenu = document.querySelector('.phone-menu');
            const burgerBtnElements = document.querySelectorAll('.phone-header__btn-element');

            if (state.isPhoneMenuOpen && document.body.offsetWidth < 768) {
                phoneMenu.classList.remove("animate-openPhoneMenu");
                phoneMenu.classList.add("animate-closePhoneMenu");

                burgerBtnElements[0].classList.add("animate-unAnimateBurgerElement1");
                burgerBtnElements[0].classList.remove("border-f6");
                burgerBtnElements[0].classList.remove("animate-burgerElement1");

                burgerBtnElements[2].classList.add("animate-unAnimateBurgerElement3");
                burgerBtnElements[2].classList.remove("border-f6");
                burgerBtnElements[2].classList.remove("animate-burgerElement3");

                setTimeout(() => {
                    burgerBtnElements[1].classList.add("opacity-1");
                    burgerBtnElements[1].classList.remove("opacity-0");
                }, 125);

                setTimeout(() => {
                    phoneMenu.classList.remove("block");
                }, 500);
                state.isPhoneMenuOpen = false;
            } else if (document.body.offsetWidth < 768) {
                phoneMenu.classList.remove("animate-closePhoneMenu");
                phoneMenu.classList.add("block");
                phoneMenu.classList.add("animate-openPhoneMenu");

                burgerBtnElements[0].classList.add("animate-burgerElement1");
                burgerBtnElements[0].classList.add("border-f6");
                burgerBtnElements[0].classList.remove("animate-unAnimateBurgerElement1");

                burgerBtnElements[2].classList.add("animate-burgerElement3");
                burgerBtnElements[2].classList.add("border-f6");
                burgerBtnElements[2].classList.remove("animate-unAnimateBurgerElement3");

                setTimeout(() => {
                    burgerBtnElements[1].classList.add("opacity-0");
                    burgerBtnElements[1].classList.remove("opacity-1");
                }, 125);

                state.isPhoneMenuOpen = true;
            }
        },
        setLocalStorage(_, item) {
            localStorage.setItem(item.name, item.value);
        },
    },
    actions: {
        setLocalStorage(ctx, item) {
            ctx.commit('setLocalStorage', item);
        },
    },
    modules: {},
});