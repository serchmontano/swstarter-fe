import { useState, useCallback } from 'react'
import { starWarsService } from '../services'
import type { BatchItem, ResourceType } from '../types'

interface UseFetchBatchReturn {
  fetchBatch: (ids: number[], resourceType: ResourceType) => Promise<void>
  data: BatchItem[]
  loading: boolean
  error: string | null
  clear: () => void
}

export const useFetchBatch = (): UseFetchBatchReturn => {
  const [data, setData] = useState<BatchItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBatch = useCallback(async (ids: number[], resourceType: ResourceType) => {
    if (ids.length === 0) {
      setData([])
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await starWarsService.getBatch(ids, resourceType)
      
      if (response.success) {
        setData(response.results)
      } else {
        setError('Failed to fetch batch data')
        setData([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setData([])
    } finally {
      setLoading(false)
    }
  }, [])

  const clear = useCallback(() => {
    setData([])
    setError(null)
    setLoading(false)
  }, [])

  return {
    fetchBatch,
    data,
    loading,
    error,
    clear,
  }
}
