import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import RootPage from './components/root-page.vue';
import SampleThreejs from './components/sample-threejs.vue';

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  components: { App },
  router: new VueRouter({routes: [
    { path: '/', name: 'root', component: RootPage },
    { path: '/threejs', name: 'threejs', component: SampleThreejs },
  ]}),
});
