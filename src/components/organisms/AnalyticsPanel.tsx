import { Card, Typography, Divider } from "../atoms";
import type { Statistics } from "../../api/types";

interface AnalyticsPanelProps {
  data: Statistics | null;
  isLoading: boolean;
}

export const AnalyticsPanel = ({ data, isLoading }: AnalyticsPanelProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Typography type="paragraph">Loading statistics...</Typography>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Typography type="paragraph">No data available</Typography>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatHour = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  };

  const maxQueryCount = Math.max(...data.top_queries.map(q => q.count));
  const maxHourCount = Math.max(...data.popular_hours.map(h => h.count));
  const maxResourceCount = Math.max(...data.resource_distribution.map(r => r.count));

  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Typography type="title">Search Analytics</Typography>
          <Typography type="paragraph" textColor="#666" className="mt-1">
            Last updated: {formatDate(data.computed_at)}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl">📊</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <Typography type="paragraph" textColor="#666">
                Total Searches
              </Typography>
              <Typography type="title" variant="secondary" className="mt-2">
                {data.total_searches.toLocaleString()}
              </Typography>
            </div>
            <span className="text-2xl">🔍</span>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <Typography type="paragraph" textColor="#666">
                Response Time
              </Typography>
              <Typography type="title" variant="secondary" className="mt-2">
                {data.avg_response_time_ms.toFixed(2)} ms
              </Typography>
            </div>
            <span className="text-2xl">⚡</span>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <Typography type="paragraph" textColor="#666">
                Resources Queried
              </Typography>
              <Typography type="title" variant="secondary" className="mt-2">
                {data.resource_distribution.length}
              </Typography>
            </div>
            <span className="text-2xl">💾</span>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔍</span>
          <Typography type="subtitle">Most Popular Searches</Typography>
        </div>
        <Divider className="mb-4" />
        <div className="space-y-3">
          {data.top_queries.map((query, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Typography type="paragraph" className="flex-1">
                  {query.query}
                </Typography>
                <div className="flex items-center gap-4">
                  <Typography type="paragraph" textColor="#666">
                    {query.count} searches
                  </Typography>
                  <Typography type="paragraph" variant="secondary">
                    {query.percentage.toFixed(1)}%
                  </Typography>
                </div>
              </div>
              <div className="w-full bg-[#ededed] rounded-full h-2">
                <div
                  className="bg-[#0ab463] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(query.count / maxQueryCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🕐</span>
          <Typography type="subtitle">Most Active Hours</Typography>
        </div>
        <Divider className="mb-4" />
        <div className="space-y-3">
          {data.popular_hours.map((hour, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Typography type="paragraph" className="flex-1">
                  {formatHour(hour.hour)}
                </Typography>
                <Typography type="paragraph" textColor="#666">
                  {hour.count} searches
                </Typography>
              </div>
              <div className="w-full bg-[#ededed] rounded-full h-2">
                <div
                  className="bg-[#0ab463] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(hour.count / maxHourCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">💾</span>
          <Typography type="subtitle">Resource Distribution</Typography>
        </div>
        <Divider className="mb-4" />
        <div className="space-y-4">
          {data.resource_distribution.map((resource, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Typography type="paragraph" className="flex-1 capitalize">
                  {resource.resource}
                </Typography>
                <div className="flex items-center gap-4">
                  <Typography type="paragraph" textColor="#666">
                    {resource.count} searches
                  </Typography>
                  <Typography type="paragraph" variant="secondary">
                    {((resource.count / data.total_searches) * 100).toFixed(1)}%
                  </Typography>
                </div>
              </div>
              <div className="w-full bg-[#ededed] rounded-full h-3">
                <div
                  className="bg-[#0ab463] h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(resource.count / maxResourceCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
