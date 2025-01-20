import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import LatestResultsView from '../views/LatestResultsView.vue'
import LatestJobsView from '../views/LatestJobsView.vue'
import ApplyView from '../views/ApplyView.vue'
import JobsView from '../views/JobsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/latest-results',
      name: 'latest-results',
      component: LatestResultsView
    },
    {
      path: '/latest-jobs',
      name: 'latest-jobs',
      component: LatestJobsView
    },
    {
      path: '/apply',
      name: 'apply',
      component: ApplyView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    }
  ]
})

export default router