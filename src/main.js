import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMobileDetection from 'vue-mobile-detection';
import './assets/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(VueMobileDetection)

app.mount('#app')
