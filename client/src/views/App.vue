<template>
  <article class="app">
    <NavBar />
    <router-view />
  </article>
</template>

<script lang="ts">
import NavBar from '@views/NavBar.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
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