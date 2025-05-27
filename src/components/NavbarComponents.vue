<template>
  <nav class="bg-purple-600 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center text-white">
        <div class="text-2xl font-bold">
          Eduardo Santos
        </div>
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="hover:text-purple-200 transition">Início</router-link>
          <router-link to="/sobre" class="hover:text-purple-200 transition">Sobre</router-link>
          <router-link to="/contato" class="hover:text-purple-200 transition">Contato</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
