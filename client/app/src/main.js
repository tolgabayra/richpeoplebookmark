import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css"
import router from "./router.js"
import {appAxios} from "./utils/appAxios.js"

const app = createApp(App)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')

