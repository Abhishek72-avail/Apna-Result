<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { resultsApi, type ResultItem } from '../services/resultsApi'

const route = useRoute()
const searchQuery = ref('')
const loading = ref(false)
const results = ref<ResultItem[]>([])
const error = ref<string | null>(null)

const searchResults = async () => {
  if (!searchQuery.value.trim()) return
  
  loading.value = true
  error.value = null
  try {
    results.value = await resultsApi.searchResults(searchQuery.value)
  } catch (e) {
    error.value = 'Failed to search results. Please try again later.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (route.query.q) {
    searchQuery.value = route.query.q as string
    searchResults()
  }
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Search Results</h1>
    
    <div class="mb-8">
      <div class="flex gap-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by result name, organization, or category"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          @keyup.enter="searchResults"
        />
        <button
          @click="searchResults"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :disabled="loading"
        >
          {{ loading ? 'Searching...' : 'Search' }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center items-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="error" class="text-center py-8 text-red-600">
      {{ error }}
    </div>

    <div v-else-if="results.length > 0" class="space-y-4">
      <div v-for="result in results" :key="result.id" 
           class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ result.title }}</h2>
        <div class="text-sm text-gray-600 mb-4">
          <p>Date: {{ new Date(result.date).toLocaleDateString() }}</p>
          <p>Organization: {{ result.organization }}</p>
          <p>Category: {{ result.category }}</p>
        </div>
        <div class="flex gap-2">
          <span class="inline-block px-2 py-1 text-xs rounded-full"
                :class="{
                  'bg-green-100 text-green-800': result.status === 'active',
                  'bg-yellow-100 text-yellow-800': result.status === 'new',
                  'bg-gray-100 text-gray-800': result.status === 'closed'
                }">
            {{ result.status.charAt(0).toUpperCase() + result.status.slice(1) }}
          </span>
        </div>
        <div class="mt-4">
          <a :href="result.link" 
             target="_blank"
             class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Full Details
            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div v-else-if="searchQuery" class="text-center py-8">
      <p class="text-gray-600">No results found for "{{ searchQuery }}"</p>
    </div>
  </div>
</template>