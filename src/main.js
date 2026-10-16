import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './store'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')