<template lang="pug">
.app
  nav
    ul
      li: router-link(:to="{ name: 'root' }") ROOT
      li: router-link(:to="{ name: 'threejs' }") THREEJS
  hr
  router-view
</template>

<script>
export default {
  mounted() {
    console.log('app mounted');
  },
};
</script>

<style lang="stylus">
</style>
