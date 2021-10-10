import Start from "../views/Start.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Books from "../views/Books.vue";

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
    }
];

export default routes;