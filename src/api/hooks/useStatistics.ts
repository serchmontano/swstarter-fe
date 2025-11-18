import { useState, useEffect } from 'react'
import { statisticsService } from '../services'
import type { StatisticsResponse } from '../types'

export const useStatistics = () => {
  const [data, setData] = useState<StatisticsResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStatistics = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await statisticsService.getStatistics()
      setData(response)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  return { data, loading, error, refetch: fetchStatistics }
}
