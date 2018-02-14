<template lang="pug">
.welcome-page
  h2 ユーザーセッションの作成
  form(@submit.prevent="submit")
    div
      label
        span ニックネーム
        input(type="text" v-model="nickname")
    div
      button(type="submit" :disabled="!nickname.length") 決定
</template>

<script>
export default {
  data: () => ({
    nickname: '',
  }),
  methods: {
    submit() {
      console.log('submit', this.nickname);
    },
  },
}
</script>

<style lang="stylus">
</style>
