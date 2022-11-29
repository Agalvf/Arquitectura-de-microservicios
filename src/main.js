import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import App from './App.vue'
import router from "./router/router.js";

createApp(App).use(router).mount('#app')
