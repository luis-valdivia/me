import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'

import "./assets/css/style.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home}, 
        {path: '/projects', component: Projects},
        {path: '/about', component: About},
    ]
})

createApp(App).use(router).mount('#app')
