import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style/leadingPage.css'

app.use(router)
app.mount('#app')
