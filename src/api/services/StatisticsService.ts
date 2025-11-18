import { apiClient } from '../client'
import type { StatisticsResponse } from '../types'

class StatisticsService {
  /**
   * Get statistics
   */
  async getStatistics(): Promise<StatisticsResponse> {
    return apiClient.get<StatisticsResponse>('/api/statistics')
  }
}

export const statisticsService = new StatisticsService()
