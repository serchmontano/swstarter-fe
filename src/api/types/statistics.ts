export interface TopQuery {
  count: number
  query: string
  percentage: number
}

export interface PopularHour {
  hour: number
  count: number
}

export interface ResourceDistribution {
  count: number
  resource: string
}

export interface Statistics {
  top_queries: TopQuery[]
  avg_response_time_ms: number
  popular_hours: PopularHour[]
  resource_distribution: ResourceDistribution[]
  total_searches: number
  computed_at: string
}

export interface StatisticsResponse {
  success: boolean
  data: Statistics
}
