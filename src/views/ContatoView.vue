<template>
  <section class="min-h-screen bg-white py-12 px-6">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-blue-600 mb-6">Entre em Contato</h2>
      <form class="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md">
        <div>
          <label class="block text-gray-700 mb-2">Nome</label>
          <input type="text" class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input type="email" class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300" />
        </div>
        <div>
          <label class="block text-gray-700 mb-2">Mensagem</label>
          <textarea rows="4" class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300"></textarea>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Enviar
        </button>
      </form>

      <div class="mt-8 text-center">
        <p class="text-gray-600">Ou me encontre nas redes sociais:</p>
        <div class="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/seuusuario" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/seuusuario" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
