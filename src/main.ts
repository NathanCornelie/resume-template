import {createApp} from 'vue'
import './style.css'
import {createMemoryHistory, createRouter} from 'vue-router'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//icons
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
//Components
import App from './App.vue'
import Home from "./components/Home.vue";
import Articles from "./components/Articles.vue";

const vuetify = createVuetify({
    components,
    directives,
})
export const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {path: '/', component: Home},
        {name:"articles",path: '/articles',component: Articles}
    ]
})

const app = createApp(App)
app.use(router)
app.use(mdiVue, {
    icons: mdijs
})
app.use(vuetify)
app.mount('#app')
