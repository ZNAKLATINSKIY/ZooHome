<template>
  <div id="app">
    <Home v-if="currentView === 'home'" :navigate="navigate" />
    <AnimalDetail v-else-if="currentView === 'animal-detail'" :id="currentAnimalId" :navigate="navigate" />
    <Bookings v-else-if="currentView === 'bookings'" :navigate="navigate" />
    <Profile v-else-if="currentView === 'profile'" :navigate="navigate" />
    <Admin v-else-if="currentView === 'admin'" :navigate="navigate" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Home from './pages/Home.vue'
import AnimalDetail from './pages/AnimalDetail.vue'
import Bookings from './pages/Bookings.vue'
import Profile from './pages/Profile.vue'
import Admin from './pages/Admin.vue'

const currentView = ref('home')
const currentAnimalId = ref(null)

function navigate(view, id = null) {
  currentAnimalId.value = id
  currentView.value = view
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
