<script setup></script>
<style>
#nav {
  text-align: left;
}
.header {
  font-weight: bold;
}
</style>

<template>
  <div class="header">
    Navigation:
    <hr />
  </div>
  <div id="nav">
    <tr>
      <!-- TODO: gebruik route names ipv url's, is minder foutgevoelig bij toekomstige url-updates -->
      <router-link to="/">-Grocery List</router-link>
    </tr>
    <tr>
      <router-link to="/Create">-Add Products</router-link>
    </tr>
    <hr />
  </div>
  <router-view />
</template>
