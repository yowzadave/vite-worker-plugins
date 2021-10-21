import { createApp } from 'vue';
import App from './App.vue';
import Worker from './worker.js?worker&inline';


createApp(App).mount('#app');

const worker = new Worker();
worker.postMessage('ping');
