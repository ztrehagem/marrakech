<template lang="pug">
.app
  head-bar
  router-view
</template>

<script>
import HeadBar from './head-bar.vue';

export default {
  components: {
    HeadBar,
  },
};
</script>

<style lang="stylus">
</style>
