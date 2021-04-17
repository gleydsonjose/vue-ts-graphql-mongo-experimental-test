<template>
  <nav class="menu-main">
    <ul class="menu-main__btn-group">
      <li class="menu-main__btn-body">
        <router-link
          to="/phones-list"
          class="menu-main__btn-link"
        >
          <i class="fas fa-mobile-alt menu-main__btn-icon" />
          <span class="menu-main__btn-text">Phones list</span>
        </router-link>        
      </li>
      <li class="menu-main__btn-body">
        <router-link
          to="/register-phone"
          class="menu-main__btn-link menu-main__btn-link--mr-0"
        >
          <i class="fas fa-file-alt menu-main__btn-icon" />
          <span class="menu-main__btn-text">Register a phone</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar'
})
</script>

<style scoped>
.menu-main {
  background-color: #53c0ff;
  width: 100%;
  display: flex;
  justify-content: center;
}

.menu-main__btn-group {
  list-style: none;
  display: flex;
  padding: .2em 1em;
  width: 100%;
  max-width: 1150px;
}

.menu-main__btn-body {
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

.menu-main__btn-body:hover {
  transform: scale(1.2);
}

.menu-main__btn-link {
  padding: .5em .8em;
  text-decoration: none;
  color: #ffffff;
  margin-right: .7em;
  font-size: 12pt;
}

.menu-main__btn-link--mr-0 {
  margin-right: 0;
}

.menu-main__btn-text {
  margin-left: .4em;
}
</style>