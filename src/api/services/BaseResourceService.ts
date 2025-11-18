import { apiClient } from '../client'
import type { PaginatedResponse, SingleResponse } from '../types'

export abstract class BaseResourceService<T> {
  protected abstract resourceName: string

  /**
   * Search resources with optional query
   */
  async search(query?: string, page: number = 1): Promise<PaginatedResponse<T>> {
    const url = query 
      ? `/api/starwars/${this.resourceName}?query=${encodeURIComponent(query)}&page=${page}`
      : `/api/starwars/${this.resourceName}?page=${page}`
    
    return apiClient.get<PaginatedResponse<T>>(url)
  }

  /**
   * Get a single resource by ID
   */
  async getById(id: number): Promise<SingleResponse<T>> {
    return apiClient.get<SingleResponse<T>>(`/api/starwars/${this.resourceName}/${id}`)
  }

  /**
   * Get all resources (without query)
   */
  async getAll(page: number = 1): Promise<PaginatedResponse<T>> {
    return this.search(undefined, page)
  }
}
