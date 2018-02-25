<template lang="pug">
.sample-chat-room
  h3 this is room {{id}}
  form(@submit.prevent="say")
    input(type="text", v-model="text")
    button(type="submit") say
  ul
    li(v-for="(message, index) in messages", :key="message.length - index") {{message}}
</template>

<script>
export default {
  props: {
    socket: { required: true },
    id: { type: String, required: true },
  },
  data: () => ({
    messages: [],
    text: '',
  }),
  created() {
    this.socket.emit('join', this.id, (ok) => {
      console.log('join', ok);
      if (!ok) {
        this.$router.push({ name: 'dev:chat:roomlist' });
      }
    });
    this.socket.on('said', (message) => {
      this.messages.unshift(message);
    });
  },
  destroyed() {
    this.socket.emit('leave', null, (ok) => {
      console.log('leave', ok);
    });
    this.socket.off('said');
  },
  methods: {
    say() {
      this.socket.emit('say', this.text, (ok) => {
        this.text = '';
      });
    },
  }
}
</script>

<style lang="stylus">
</style>
