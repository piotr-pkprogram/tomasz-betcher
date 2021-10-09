import Start from "../views/Start.vue";
import About from "../views/About.vue";

const routes = [{
        name: 'start',
        path: '/index.html',
        component: Start,
        alias: "/"
    },
    {
        path: "/kim-jestem",
        component: About,
    }

];

export default routes;