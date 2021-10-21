const Start = () =>
    import ("../views/Start.vue");
const About = () =>
    import ("../views/About.vue");
const Contact = () =>
    import ("../views/Contact.vue");
const Books = () =>
    import ("../views/Books.vue");
const Book = () =>
    import ('../views/Book.vue');

const PrivacyPolicy = () =>
    import ("../views/PrivacyPolicy.vue");

const routes = [{
        name: 'start',
        path: '/index.html',
        component: Start,
        alias: "/",
        meta: {
            publicRoute: true,
            title: "",
            metaTags: [{
                    name: 'description',
                    content: ''
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher, książki tomasza betchera, literatura obyczajowa, romans, literatura piękna, romansidła, tomasz betcher pisarz, pisarz tomasz betcher, czytanie romansów, pisarz z grudziądza, autor powieści obyczajowych, wątki społeczne, autor wątki społeczne, powieści obyczajowe',
                },
                {
                    property: 'og:title',
                    content: ''
                },
                {
                    property: 'og:description',
                    content: ''
                },
                {
                    property: 'og:site_name',
                    content: 'Start'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://tomasz-betcher.pl/'
                },
                {
                    property: 'og:image',
                    content: 'https://tomasz-betcher.pl/img/logo.caf0f5a3.png'
                },
            ]
        },
    },
    {
        name: 'about',
        path: "/kim-jestem",
        component: About,
        meta: {
            publicRoute: true,
            title: "",
            metaTags: [{
                    name: 'description',
                    content: ''
                },
                {
                    property: 'keywords',
                    content: 'ojciec dwójki dzieci i pisarz, ojeciec dwójki dzieci, tomasz betcher, tomasz betcher debiut powieści tam gdzie jesteś, szptun, szcęście z piernika, żołnierskie serce, czas wolny z rodziną'
                },
                {
                    property: 'og:title',
                    content: ''
                },
                {
                    property: 'og:description',
                    content: ''
                },
                {
                    property: 'og:site_name',
                    content: 'Kim Jestem'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://tomasz-betcher.pl/kim-jestem'
                },
                {
                    property: 'og:image',
                    content: 'https://tomasz-betcher.pl/img/logo.caf0f5a3.png'
                },
            ]
        },
    },
    {
        name: 'books',
        path: "/książki",
        component: Books,
        meta: {
            publicRoute: true,
            title: "",
            metaTags: [{
                    name: 'description',
                    content: ''
                },
                {
                    property: 'keywords',
                    content: ''
                },
                {
                    property: 'og:title',
                    content: ''
                },
                {
                    property: 'og:description',
                    content: ''
                },
                {
                    property: 'og:site_name',
                    content: 'Książki'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://tomasz-betcher.pl/książki'
                },
                {
                    property: 'og:image',
                    content: 'https://tomasz-betcher.pl/img/logo.caf0f5a3.png'
                },
            ]

        },
    },
    {
        name: 'contact',
        path: "/kontakt",
        component: Contact,
        meta: {
            publicRoute: true,
            title: "",
            metaTags: [{
                    name: 'description',
                    content: ''
                },
                {
                    property: 'keywords',
                    content: ''
                },
                {
                    property: 'og:title',
                    content: ''
                },
                {
                    property: 'og:description',
                    content: ''
                },
                {
                    property: 'og:site_name',
                    content: 'Kontakt'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://tomasz-betcher.pl/kontakt'
                },
                {
                    property: 'og:image',
                    content: 'https://tomasz-betcher.pl/img/logo.caf0f5a3.png'
                },
            ]
        },
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
        meta: {
            publicRoute: true,
            title: "",
            metaTags: [{
                    name: 'description',
                    content: ''
                },
                {
                    property: 'keywords',
                    content: ''
                },
                {
                    property: 'og:title',
                    content: ''
                },
                {
                    property: 'og:description',
                    content: ''
                },
                {
                    property: 'og:site_name',
                    content: 'Poiltyka Prywatości'
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: 'https://tomasz-betcher.pl/polityka-prywatności'
                },
                {
                    property: 'og:image',
                    content: 'https://tomasz-betcher.pl/img/logo.caf0f5a3.png'
                },
            ]
        }
    }
];

export default routes;