<template lang="pug">
.sample-chat-room
  h3 room: {{id}}
  button(type="button", @click.prevent="leave") 退室
  form(@submit.prevent="say")
    input(type="text", v-model="text")
    button(type="submit") say
  ul.messages
    li.message(v-for="(message, index) in messages", :key="messages.length - index", :class="{ '-system': message.system }")
      span.name {{message.name}}
      span ：
      span.text {{message.text}}
      span.date （{{message.date}}）
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
      if (!ok) this.$router.push({ name: 'dev:chat:lobby' });
    });
    this.socket.on('said', this.onSaid);
    this.socket.on('joined', this.onJoined);
    this.socket.on('leaved', this.onLeaved);
  },
  destroyed() {
    this.socket.emit('leave', null, (ok) => {
      console.log('leave', ok);
    });
    this.socket.off('said');
    this.socket.off('joined');
    this.socket.off('leaved');
  },
  methods: {
    say() {
      this.socket.emit('say', this.text, (ok) => {
        this.text = '';
      });
    },
    leave() {
      this.$router.push({ name: 'dev:chat:lobby' });
    },
    onSaid({ name, message, date }) {
      this.messages.unshift({
        name,
        text: message,
        date: new Date(date).toLocaleString(),
      });
    },
    onJoined({ name, date }) {
      this.messages.unshift({
        system: true,
        name: 'システム',
        text: `${name}さんが入室しました`,
        date: new Date(date).toLocaleString(),
      });
    },
    onLeaved({ name, date }) {
      this.messages.unshift({
        system: true,
        name: 'システム',
        text: `${name}さんが退室しました`,
        date: new Date(date).toLocaleString(),
      });
    },
  },
}
</script>

<style lang="stylus">
.sample-chat-room {
  > .messages {
    > .message {
      > .name {
        font-weight: bold;
      }
      > .date {
        color: gray;
        font-size: 0.6em;
        padding-left: 1em;
      }
      &.-system {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
