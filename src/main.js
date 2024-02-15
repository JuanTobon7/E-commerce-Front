import './assets/main.css'
import PrimeVue from 'primevue/config';
import 'vue3-carousel/dist/carousel.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true });

app.mount('#app')
