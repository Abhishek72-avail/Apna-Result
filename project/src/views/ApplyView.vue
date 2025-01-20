<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Apply for Jobs</h1>
    
    <div class="bg-white rounded-lg shadow-md p-6">
      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" 
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" 
                 class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
        </div>
        
        <div>
          <label for="job" class="block text-sm font-medium text-gray-700">Select Job</label>
          <select id="job" name="job" 
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select a job</option>
            <option value="upsc">UPSC Civil Services 2024</option>
            <option value="ssc">SSC CGL 2024</option>
          </select>
        </div>
        
        <div>
          <label for="resume" class="block text-sm font-medium text-gray-700">Upload Resume</label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" 
                 class="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100" />
        </div>
        
        <div>
          <button type="submit" 
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  </div>
</template>