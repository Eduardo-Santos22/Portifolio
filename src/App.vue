<template>
  <div>
    <NavbarComponents />
    <router-view />
    <FooterComponents />
  </div>
</template>

<script setup>
import NavbarComponents from './components/NavbarComponents.vue'
import FooterComponents from './components/FooterComponents.vue'
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
