import WelcomePage from '../components/welcome-page.vue';
import SampleFetch from '../components/sample-fetch.vue';
import SampleThreejs from '../components/sample-threejs.vue';
import SampleSocket from '../components/sample-socket.vue';

export default [
  { path: '/', name: 'welcome', component: WelcomePage },
  { path: '/dev/fetch', name: 'dev:fetch', component: SampleFetch },
  { path: '/dev/threejs', name: 'dev:threejs', component: SampleThreejs },
  { path: '/dev/socket', name: 'dev:socket', component: SampleSocket },
];