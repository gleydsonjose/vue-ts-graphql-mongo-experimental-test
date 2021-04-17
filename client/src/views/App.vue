<template>
  <article class="app">
    <NavBar />
    <router-view />
  </article>
</template>

<script lang="ts">
import NavBar from '@views/NavBar.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: {
    NavBar
  },
})
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
}
</style>