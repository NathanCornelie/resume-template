import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createMemoryHistory, createRouter} from 'vue-router'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Home from "./components/Home.vue";
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const vuetify = createVuetify({
    components,
    directives,
})
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {path: '/', component: Home}
    ]
})

const app = createApp(App)
app.use(router)
app.use(mdiVue, {
    icons: mdijs
})
app.use(vuetify)
app.mount('#app')
