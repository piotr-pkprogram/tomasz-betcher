const Start =
    import ("../views/Start.vue");
const About =
    import ("../views/About.vue");
const Contact =
    import ("../views/Contact.vue");
const Books =
    import ("../views/Books.vue");
const Book =
    import ('../views/Book.vue');

const PrivacyPolicy =
    import ("../views/PrivacyPolicy.vue");

const routes = [{
        name: 'start',
        path: '/index.html',
        component: Start,
        alias: "/"
    },
    {
        name: 'about',
        path: "/kim-jestem",
        component: About,
    },
    {
        name: 'books',
        path: "/książki",
        component: Books,
    },
    {
        name: 'contact',
        path: "/kontakt",
        component: Contact,
    },
    {
        name: 'book',
        path: "/książki/:bookTitle",
        component: Book,
    },
    {
        name: 'privacy-policy',
        path: "/polityka-prywatności",
        component: PrivacyPolicy,
    }
];

export default routes;