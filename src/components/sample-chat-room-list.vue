<template lang="pug">
.sample-chat-room-list
  h3 room list
  button(@click.prevent="create") create
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
    create() {
      this.socket.emit('create', null, (id) => {
        if (!id) return;
        this.$router.push({ name: 'dev:chat:room', params: { id } });
      });
    },
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
