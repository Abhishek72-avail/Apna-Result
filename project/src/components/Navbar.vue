<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-blue-600 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center">
          <span class="text-xl font-bold">Apna Results</span>
        </RouterLink>
        <div class="flex space-x-4">
          <RouterLink to="/" class="hover:bg-blue-700 px-3 py-2 rounded-md">Home</RouterLink>
          <RouterLink to="/latest-results" class="hover:bg-blue-700 px-3 py-2 rounded-md">Latest Results</RouterLink>
          <RouterLink to="/latest-jobs" class="hover:bg-blue-700 px-3 py-2 rounded-md">Latest Jobs</RouterLink>
          <RouterLink to="/apply" class="hover:bg-blue-700 px-3 py-2 rounded-md">Apply</RouterLink>
          <RouterLink to="/jobs" class="hover:bg-blue-700 px-3 py-2 rounded-md">All Jobs</RouterLink>
          <RouterLink to="/search" class="hover:bg-blue-700 px-3 py-2 rounded-md">Search</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>