import { apiClient } from '../client'
import type { ResourcesResponse, BatchResponse, ResourceType } from '../types'

class StarWarsService {
  /**
   * Get available resources
   */
  async getResources(): Promise<ResourcesResponse> {
    return apiClient.get<ResourcesResponse>('/api/starwars/resources')
  }

  /**
   * Get multiple resources by IDs
   */
  async getBatch(ids: number[], resourceType: ResourceType): Promise<BatchResponse> {
    return apiClient.post<BatchResponse>('/api/starwars/batch', {
      ids,
      resource_type: resourceType,
    })
  }
}

export const starWarsService = new StarWarsService()
