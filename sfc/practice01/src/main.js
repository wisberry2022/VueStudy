import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import SubTest from './components/SubTest.vue';

const app = createApp(App);
app.component('SubTest', SubTest);
app.mount('#app');
