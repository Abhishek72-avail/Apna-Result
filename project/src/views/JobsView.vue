<script setup lang="ts">
import { ref } from 'vue'

interface Job {
  id: string
  title: string
  organization: string
  lastDate: string
  category: string
  status: 'new' | 'active' | 'closed'
  location: string
  salary: string
}

const jobs = ref<Job[]>([
  {
    id: '1',
    title: 'UPSC Civil Services 2024',
    organization: 'UPSC',
    lastDate: '2024-04-15',
    category: 'Civil Services',
    status: 'new',
    location: 'All India',
    salary: 'As per 7th CPC'
  },
  {
    id: '2',
    title: 'SSC CGL 2024',
    organization: 'SSC',
    lastDate: '2024-04-10',
    category: 'Government',
    status: 'active',
    location: 'Multiple Locations',
    salary: '₹9,300 - ₹34,800'
  },
  {
    id: '3',
    title: 'Bank PO Recruitment 2024',
    organization: 'IBPS',
    lastDate: '2024-04-20',
    category: 'Banking',
    status: 'new',
    location: 'Pan India',
    salary: '₹23,700 - ₹42,300'
  }
])

const categories = ref([
  'All',
  'Civil Services',
  'Banking',
  'Railway',
  'Defense',
  'Teaching',
  'Government'
])

const selectedCategory = ref('All')

const filteredJobs = computed(() => {
  if (selectedCategory.value === 'All') {
    return jobs.value
  }
  return jobs.value.filter(job => job.category === selectedCategory.value)
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">All Jobs</h1>
    
    <div class="mb-8">
      <label for="category" class="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
      <select v-model="selectedCategory"
              id="category"
              class="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <div class="grid gap-6">
      <div v-for="job in filteredJobs" :key="job.id" 
           class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">{{ job.title }}</h2>
            <p class="text-sm text-gray-600">{{ job.organization }}</p>
          </div>
          <span class="inline-block px-2 py-1 text-xs rounded-full"
                :class="{
                  'bg-green-100 text-green-800': job.status === 'active',
                  'bg-yellow-100 text-yellow-800': job.status === 'new',
                  'bg-gray-100 text-gray-800': job.status === 'closed'
                }">
            {{ job.status.charAt(0).toUpperCase() + job.status.slice(1) }}
          </span>
        </div>
        
        <div class="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div>
            <p class="font-medium">Location:</p>
            <p>{{ job.location }}</p>
          </div>
          <div>
            <p class="font-medium">Salary:</p>
            <p>{{ job.salary }}</p>
          </div>
          <div>
            <p class="font-medium">Last Date:</p>
            <p>{{ new Date(job.lastDate).toLocaleDateString() }}</p>
          </div>
          <div>
            <p class="font-medium">Category:</p>
            <p>{{ job.category }}</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Details
          </button>
          <RouterLink :to="{ name: 'apply' }" 
                     class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Apply Now
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>