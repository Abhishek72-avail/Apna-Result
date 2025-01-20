<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Job {
  id: string
  title: string
  organization: string
  lastDate: string
  category: string
  status: 'new' | 'active' | 'closed'
}

const jobs = ref<Job[]>([
  {
    id: '1',
    title: 'UPSC Civil Services 2024',
    organization: 'UPSC',
    lastDate: '2024-04-15',
    category: 'Civil Services',
    status: 'new'
  },
  {
    id: '2',
    title: 'SSC CGL 2024',
    organization: 'SSC',
    lastDate: '2024-04-10',
    category: 'Government',
    status: 'active'
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Latest Jobs</h1>
    
    <div class="grid gap-6">
      <div v-for="job in jobs" :key="job.id" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ job.title }}</h2>
        <div class="text-sm text-gray-600 space-y-1 mb-4">
          <p>Organization: {{ job.organization }}</p>
          <p>Last Date: {{ new Date(job.lastDate).toLocaleDateString() }}</p>
          <p>Category: {{ job.category }}</p>
        </div>
        <div class="flex gap-2 mb-4">
          <span class="inline-block px-2 py-1 text-xs rounded-full"
                :class="{
                  'bg-green-100 text-green-800': job.status === 'active',
                  'bg-yellow-100 text-yellow-800': job.status === 'new',
                  'bg-gray-100 text-gray-800': job.status === 'closed'
                }">
            {{ job.status.charAt(0).toUpperCase() + job.status.slice(1) }}
          </span>
        </div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>