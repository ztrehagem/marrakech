<template lang="pug">
.fetch
  div
    input(type="text" v-model="text")
    button(@click.prevent="submit") SUBMIT
  div
    button(@click.prevent="fetch") FETCH
    div {{fetched}}
</template>

<script>
import * as hoge from '../api/hoge';

export default {
  data: () => ({
    text: '',
    fetched: null,
  }),
  methods: {
    async submit() {
      console.log('submitting...');
      const [error, response] = await hoge.post(this.text);
      console.log(response);
    },
    async fetch() {
      console.log('fetching...');
      const [error, fetched] = await hoge.get();
      this.fetched = error || fetched;
      console.log(this.fetched);
    },
  },
}
</script>

<style lang="stylus">
</style>
