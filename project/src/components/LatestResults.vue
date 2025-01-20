<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { resultsApi, type ResultItem } from '../services/resultsApi'

const results = ref<ResultItem[]>([])
const selectedResult = ref<ResultItem | null>(null)
const loading = ref(false)
const error = ref<string | null>(null)

const fetchLatestResults = async () => {
  loading.value = true
  error.value = null
  try {
    results.value = await resultsApi.getLatestResults()
  } catch (e) {
    error.value = 'Failed to load latest results. Please try again later.'
  } finally {
    loading.value = false
  }
}

const showResultDetails = (result: ResultItem) => {
  selectedResult.value = result
}

const closeDetails = () => {
  selectedResult.value = null
}

onMounted(() => {
  fetchLatestResults()
})
</script>

<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center py-4">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="error" class="text-red-600 p-4 text-center">
      {{ error }}
    </div>

    <div v-else class="space-y-4">
      <div v-for="result in results" :key="result.id" 
           class="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
           @click="showResultDetails(result)">
        <h4 class="font-semibold text-gray-800">{{ result.title }}</h4>
        <p class="text-sm text-gray-600">{{ new Date(result.date).toLocaleDateString() }}</p>
        <div class="flex gap-2 mt-2">
          <span class="inline-block px-2 py-1 text-xs rounded-full"
                :class="{
                  'bg-green-100 text-green-800': result.status === 'active',
                  'bg-yellow-100 text-yellow-800': result.status === 'new',
                  'bg-gray-100 text-gray-800': result.status === 'closed'
                }">
            {{ result.status.charAt(0).toUpperCase() + result.status.slice(1) }}
          </span>
          <span class="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            {{ result.category }}
          </span>
        </div>
      </div>
    </div>

    <!-- Result Details Modal -->
    <div v-if="selectedResult" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-lg w-full p-6">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-semibold text-gray-900">{{ selectedResult.title }}</h3>
          <button @click="closeDetails" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">
            Date: {{ new Date(selectedResult.date).toLocaleDateString() }}
          </p>
          <p class="text-sm text-gray-600 mb-2">
            Organization: {{ selectedResult.organization }}
          </p>
          <div class="mt-4">
            <a :href="selectedResult.link" 
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
    </div>
  </div>
</template>