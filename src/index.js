import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import routes from './config/routes';
import App from './components/app.vue';

Vue.use(VueRouter);

const router = new VueRouter({ routes });
const app = new Vue({ el: '#app', components: { App }, router });
