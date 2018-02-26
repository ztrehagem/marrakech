<template lang="pug">
.sample-chat-lobby
  .title チャットロビー
  .name(v-if="!edittingName")
    span なまえ：{{name || '（ななし）'}}
    button(type="button", @click.prevent="editName") 名前を変える
  form(@submit.prevent="setName", v-if="edittingName")
    label
      span なまえ：
      input(type="text", v-model="nameTemp")
      button(type="submit") 保存
  button(@click.prevent="create") 新しい部屋を作成して入る
  sample-chat-room-list(:socket="socket")
</template>

<script>
import SampleChatRoomList from './sample-chat-room-list.vue';

export default {
  components: {
    SampleChatRoomList,
  },
  props: {
    socket: { required: true },
  },
  data: () => ({
    name: window.sessionStorage.getItem('chat:name'),
    nameTemp: null,
    edittingName: false,
  }),
  created()  {
    this.submitName();
  },
  methods: {
    editName() {
      this.edittingName = true;
      this.nameTemp = this.name;
    },
    setName() {
      this.name = this.nameTemp;
      this.edittingName = false;
      window.sessionStorage.setItem('chat:name', this.name);
      this.submitName();
    },
    submitName() {
      this.socket.emit('name', this.name);
    },
    create() {
      this.socket.emit('create', null, (id) => {
        if (!id) return;
        this.$router.push({ name: 'dev:chat:room', params: { id } });
      });
    },
  },
}
</script>

<style lang="stylus">
.sample-chat-lobby {

}
</style>
