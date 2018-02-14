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
import { getHoge, postHoge } from '../modules/api';

export default {
  data: () => ({
    text: '',
    fetched: null,
  }),
  methods: {
    async submit() {
      console.log('submitting...');
      const [error, response] = await postHoge(this.text);
      console.log(response);
    },
    async fetch() {
      console.log('fetching...');
      const [error, fetched] = await getHoge();
      this.fetched = error || fetched;
      console.log(this.fetched);
    },
  },
}
</script>

<style lang="stylus">
</style>
