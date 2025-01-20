import axios from 'axios'

export interface ResultItem {
  id: string
  title: string
  date: string
  category: string
  link: string
  status: 'new' | 'active' | 'closed'
  organization: string
}

// Mock data for development
const mockResults: ResultItem[] = [
  {
    id: '1',
    title: 'UPSC Civil Services Final Results 2024',
    date: '2024-03-15',
    category: 'Civil Services',
    link: '#',
    status: 'new',
    organization: 'UPSC'
  },
  {
    id: '2',
    title: 'SSC CGL Tier I Results 2024',
    date: '2024-03-10',
    category: 'Government',
    link: '#',
    status: 'active',
    organization: 'SSC'
  },
  {
    id: '3',
    title: 'IBPS PO Final Results 2024',
    date: '2024-03-05',
    category: 'Banking',
    link: '#',
    status: 'active',
    organization: 'IBPS'
  },
  {
    id: '4',
    title: 'Railway RRB NTPC Results',
    date: '2024-03-01',
    category: 'Railway',
    link: '#',
    status: 'closed',
    organization: 'Indian Railways'
  },
  {
    id: '5',
    title: 'NEET PG Results 2024',
    date: '2024-02-28',
    category: 'Medical',
    link: '#',
    status: 'active',
    organization: 'NBE'
  }
]

// Simulated delay to mimic API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const resultsApi = {
  async getLatestResults(): Promise<ResultItem[]> {
    await delay(800) // Simulate network delay
    return mockResults
  },

  async searchResults(query: string): Promise<ResultItem[]> {
    await delay(800) // Simulate network delay
    const searchTerm = query.toLowerCase()
    return mockResults.filter(result => 
      result.title.toLowerCase().includes(searchTerm) ||
      result.organization.toLowerCase().includes(searchTerm) ||
      result.category.toLowerCase().includes(searchTerm)
    )
  }
}