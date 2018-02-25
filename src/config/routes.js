import WelcomePage from '../components/welcome-page.vue';
import SampleFetch from '../components/sample-fetch.vue';
import SampleThreejs from '../components/sample-threejs.vue';
import SampleSocket from '../components/sample-socket.vue';
import SampleChat from '../components/sample-chat.vue';
import SampleChatRoomList from '../components/sample-chat-room-list.vue';
import SampleChatRoom from '../components/sample-chat-room.vue';

export default [
  { path: '/', name: 'welcome', component: WelcomePage },
  { path: '/dev/fetch', name: 'dev:fetch', component: SampleFetch },
  { path: '/dev/threejs', name: 'dev:threejs', component: SampleThreejs },
  { path: '/dev/socket', name: 'dev:socket', component: SampleSocket },
  { path: '/dev/chat', component: SampleChat, children: [
    { path: '', name: 'dev:chat:roomlist', component: SampleChatRoomList },
    { path: ':id', name: 'dev:chat:room', component: SampleChatRoom, props: true },
  ] },
];
