<template lang="pug">
.root-page
  h1 this is root-page
  button(@click.prevent="fetch") FETCH
  div {{fetched}}
</template>

<script>
import { getHoge } from '../modules/api';

export default {
  data: () => ({
    fetched: null,
  }),
  methods: {
    async fetch() {
      console.log('fetching...');
      const [error, fetched] = await getHoge();
      this.fetched = error || fetched;
      console.log(this.fetched);
    }
  },
}
</script>

<style lang="stylus">
</style>
