<template lang="pug">
.sample-socket
  div this is sample-socket
  div
    input(type="text" v-model="text")
    button(@click.prevent="submit") say
</template>

<script>
import io from 'socket.io-client';

export default {
  data: () => ({
    socket: null,
    text: '',
  }),
  created() {
    this.socket = io('/sample');
    this.socket.on('greeting', this.onGreeting);
  },
  destroyed() {
    this.socket.close();
  },
  methods: {
    onGreeting(data) {
      console.log('greeted:', data);
    },
    submit() {
      this.socket.emit('echo', this.text, (data) => {
        console.log('response:', data);
      });
    },
  },
}
</script>

<style lang="stylus">
</style>
