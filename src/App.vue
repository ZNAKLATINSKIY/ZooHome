<script setup>

</script>

<template>
  <div>
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/add-animal">Add Animal</router-link> |
      <router-link to="/book">Book Shelter</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>

</style>
