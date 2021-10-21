/*eslint-disable  prettier/prettier*/
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(route => route.meta && route.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(route => route.meta && route.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(route => route.meta && route.meta.metaTags);

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    Array.from(document.querySelectorAll('[v-meta-tag]')).map(el => el.parentNode.removeChild(el));

    if (!nearestWithMeta)
        return next();

    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('v-meta-tag', '');
            return tag;
        })
        .forEach(tag => document.head.appendChild(tag));

    next();
})

export default router;