<template lang="pug">
.sample-chat-room-list
  strong room list
  button(type="button", @click.prevent="index") 更新
  ul
    li(v-for="room in rooms", :key="room")
      router-link(:to="{ name: 'dev:chat:room', params: { id: room } }") {{room}}
</template>

<script>
export default {
  props: {
    socket: { required: true },
  },
  data: () => ({
    rooms: null,
  }),
  async created() {
    await this.index();
  },
  methods: {
    index() {
      this.socket.emit('index', null, (rooms) => {
        this.rooms = rooms;
      });
    },
  }
}
</script>

<style lang="stylus">
</style>
