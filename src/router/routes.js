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

const CatchAll = () =>
    import ("../views/CatchAll.vue");

const routes = [{
        name: 'start',
        path: '/index.html',
        component: Start,
        alias: "/",
        meta: {
            publicRoute: true,
            title: "Tomasz Betcher - Autor powieści obyczajowych i romantycznych poruszjący wątki społeczne.",
            metaTags: [{
                    name: 'description',
                    content: 'Cześć, jestem Tomasz betcher - pisarz i autor wielu książek literatury romantyczno - obyczajowej, w których poruszam różnorakie wątki społeczne. Interesuje Cię ta tematyka? Zapraszam po więcej.'
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher, książki tomasza betchera, literatura obyczajowa, romans, literatura piękna, romansidła, tomasz betcher pisarz, pisarz tomasz betcher, czytanie romansów, pisarz z grudziądza, autor powieści obyczajowych, wątki społeczne, autor wątki społeczne, powieści obyczajowe',
                },
                {
                    property: 'og:title',
                    content: 'Tomasz Betcher - autor powieści obyczajowych i romantycznych poruszjący wątki społeczne.'
                },
                {
                    property: 'og:description',
                    content: 'Cześć, jestem Tomasz betcher - pisarz i autor wielu książek literatury romantyczno - obyczajowej, w których poruszam różnorakie wątki społeczne. Interesuje Cię ta tematyka? Zapraszam po więcej.'
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
            title: "Kim Jestem | Tomasz Betcher",
            metaTags: [{
                    name: 'description',
                    content: 'Chcesz poznać mnie dokładniej lub interesuje Cię moja histroia jako pisarza? Zapraszam tutaj :).'
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher literatura obyczajowa, tomasz betcher literatura piękna, tomasz betcher romans, ojciec dwójki dzieci i pisarz, ojeciec dwójki dzieci, tomasz betcher, tomasz betcher debiut powieści tam gdzie jesteś, szptun, szcęście z piernika, żołnierskie serce, czas wolny z rodziną'
                },
                {
                    property: 'og:title',
                    content: 'Kim Jestem | Tomasz Betcher'
                },
                {
                    property: 'og:description',
                    content: 'Chcesz poznać mnie dokładniej lub interesuje Cię moja histroia jako pisarza? Zapraszam tutaj :).'
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
            title: "Książki | Tomasz Betcher",
            metaTags: [{
                    name: 'description',
                    content: 'Szukasz wciągających powieści pełnych emocji i róznorakich wątków? Chcesz zagłębić się w ciekawe histrie, które wzbudzą twoją wyobraźnię? Zajrzyj do moich książek, z pewnością coś przypadnie Ci do gustu.'
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher literatura obyczajowa, tomasz betcher literatura piękna, tomasz betcher romans, książki tomasza betchera, książki tomasz betcher, literatura obyczjowa, romans, literatura piękna, książki romantyczne, poezja, utwory poetyckie, utwory romantyczne'
                },
                {
                    property: 'og:title',
                    content: 'Książki | Tomasz Betcher'
                },
                {
                    property: 'og:description',
                    content: 'Szukasz wciągających powieści pełnych emocji i róznorakich wątków? Chcesz zagłębić się w ciekawe histrie, które wzbudzą twoją wyobraźnię? Zajrzyj do moich książek, z pewnością coś przypadnie Ci do gustu.'
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
            title: "Konatkt | Tomasz Betcher",
            metaTags: [{
                    name: 'description',
                    content: 'Masz jakieś pyatnia do mnie lub chcesz moje ksiązki podarować komuś z dedykacją. Skontaktuj się ze mną, a napweno się dogadamy :).'
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher, tomasz-betcher.pl, kontakt do tomasz betcher, kontakt do pisarza tomasz betcher, kontakt do pisarza tomasza betchera, tomasz betcher literatura obyczajowa, tomasz betcher literatura piękna, tomasz betcher romans'
                },
                {
                    property: 'og:title',
                    content: 'Konatkt | Tomasz Betcher'
                },
                {
                    property: 'og:description',
                    content: 'Masz jakieś pyatnia do mnie lub chcesz moje ksiązki podarować komuś z dedykacją. Skontaktuj się ze mną, a napweno się dogadamy :).'
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
            title: "Polityka Prywatności",
            metaTags: [{
                    name: 'description',
                    content: 'Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.'
                },
                {
                    property: 'keywords',
                    content: 'tomasz betcher literatura obyczajowa, tomasz betcher literatura piękna, tomasz betcher romans, polityka prywatnosci tomasza betchera, polityka prywatności tomasz-betcher.pl, polityka cookies tomasza betchera, polityka cookies tomasz-betcher.pl'
                },
                {
                    property: 'og:title',
                    content: 'Polityka Prywatności'
                },
                {
                    property: 'og:description',
                    content: 'Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.'
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
    },
    {
        name: 'error',
        path: '/:catchAll(.*)',
        component: CatchAll
    }
];

export default routes;