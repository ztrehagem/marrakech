<template lang="pug">
.head-bar
  router-link.link.-title(:to="{ name: 'welcome' }") Marrakech
  router-link.link(:to="{ name: 'dev:fetch' }") fetch
  router-link.link(:to="{ name: 'dev:threejs' }") three
  router-link.link(:to="{ name: 'dev:socket' }") socket
  router-link.link(:to="{ name: 'dev:chat:roomlist' }") chat
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.head-bar {
  & {
    display: flex;
    align-items: center;
    background-color: gray;
    padding: 0.3rem;
  }

  > .link {
    text-decoration: none;
    color: black;
    display: block;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem;
    background-color: lightgray;
    transition: background-color 0.1s ease;

    &:hover {
      background-color: white;
    }

    &.-title {
      background-color: inherit;
      font-weight: bold;
      color: white;
      &:hover { background-color: inherit; }
    }
  }
}
</style>
