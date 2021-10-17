import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

const TextLinks = defineAsyncComponent(() =>
    import ("./components/UI/TextLinks.vue")
)
const BaseButton = defineAsyncComponent(() =>
    import ("./components/UI/BaseButton.vue")
)
const BaseInput = defineAsyncComponent(() =>
    import ("./components/UI/BaseInput.vue")
)
const ErrorBox = defineAsyncComponent(() =>
    import ("./components/UI/ErrorBox.vue"));

const app = createApp(App);

app.use(store)
app.use(router)

app.component('text-links', TextLinks);
app.component('base-button', BaseButton);
app.component('base-input', BaseInput);
app.component('error-box', ErrorBox);

app.mount("#app");