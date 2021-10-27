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
        setBookLocalStorage(_, item) {
            localStorage.setItem(item.title, JSON.stringify(item));
        },
        appearHiddenLoader(_, switchLoader) {
            const loader = document.querySelector('.loading');
            const main = document.querySelector('main');

            if (switchLoader) {
                loader.classList.remove("animate-hidden");
                loader.classList.add("grid");
                main.classList.remove("overflow-visible", "h-auto");
            } else {
                loader.classList.add("animate-hidden");
                loader.classList.remove("grid");
                main.classList.add("overflow-visible", "h-auto")
            }
        }
    },
    actions: {
        setLocalStorage(ctx, item) {
            ctx.commit('setLocalStorage', item);
        },
    },
    modules: {},
});