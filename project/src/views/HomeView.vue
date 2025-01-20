<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LatestResults from '../components/LatestResults.vue'

const router = useRouter()
const searchQuery = ref('')
const showLatestResults = ref(false)

const handleSearch = () => {
  if (searchQuery.value) {
    router.push({
      path: '/search',
      query: { q: searchQuery.value }
    })
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Sakari Results Portal</h1>
      <p class="text-xl text-gray-600 mb-8">
        Find your exam results quickly and easily
      </p>
      <div class="max-w-xl mx-auto">
        <div class="flex gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Enter your roll number or name"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            @keyup.enter="handleSearch"
          />
          <button
            @click="handleSearch"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Latest Results</h3>
        <LatestResults />
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Quick Search</h3>
        <p class="text-gray-600">Search results by roll number, name, or examination date.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Help & Support</h3>
        <p class="text-gray-600">Need assistance? Contact our support team for help.</p>
      </div>
    </div>
  </div>
</template>