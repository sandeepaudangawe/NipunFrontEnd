import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navigation from '../src/components/Navigation.vue'

const app = createApp(App)

app.use(router)
app.component('navigationBar', navigation)
app.mount('#app')
