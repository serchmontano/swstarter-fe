import { apiClient } from '../client'
import type { ResourcesResponse } from '../types'

class StarWarsService {
  /**
   * Get available resources
   */
  async getResources(): Promise<ResourcesResponse> {
    return apiClient.get<ResourcesResponse>('/api/starwars/resources')
  }
}

export const starWarsService = new StarWarsService()
