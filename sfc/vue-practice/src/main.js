import { createApp } from 'vue'
import App from './App.vue'
import AppRoute from './route';

const app = createApp(App);
app.use(AppRoute);
app.mount('#app');
