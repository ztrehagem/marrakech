<template lang="pug">
.sample-chat
  router-view(:socket="socket")
</template>

<script>
import io from 'socket.io-client';

export default {
  data: () => ({
    socket: null,
  }),
  created() {
    // TODO ローカルストレージにニックネームを保存しておき，最初のemitで送信する
    // CookieやSessionは要らない
    this.socket = io('/chat');
  },
  destroyed() {
    this.socket.close();
  },
}
</script>

<style lang="stylus">
</style>
