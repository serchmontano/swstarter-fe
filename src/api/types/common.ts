export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  count: number
  results: T[]
  pagination: {
    current_page: number
    per_page: number
    total: number
    last_page: number
  }
  meta: {
    resource: string
    query?: string
    response_time_ms: number
  }
}

export interface SingleResponse<T> {
  success: boolean
  result: T
  meta: {
    resource: string
    id: number
    response_time_ms: number
  }
}

export interface ResourcesResponse {
  success: boolean
  resources: string[]
}

export type ResourceType = 'people' | 'films'
