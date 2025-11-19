import { Card, Typography, Divider } from "../atoms";
import { StatCard, ProgressItem, SectionHeader } from "../molecules";
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
        <StatCard 
          label="Total Searches" 
          value={data.total_searches.toLocaleString()} 
          icon="🔍" 
        />
        <StatCard 
          label="Response Time" 
          value={`${data.avg_response_time_ms.toFixed(2)} ms`} 
          icon="⚡" 
        />
        <StatCard 
          label="Resources Queried" 
          value={data.resource_distribution.length} 
          icon="💾" 
        />
      </div>

      <Card>
        <SectionHeader icon="🔍" title="Most Popular Searches" />
        <Divider className="mb-4" />
        <div className="space-y-3">
          {data.top_queries.map((query, index) => (
            <ProgressItem
              key={index}
              label={query.query}
              count={query.count}
              percentage={query.percentage}
              progressPercentage={(query.count / maxQueryCount) * 100}
              height="sm"
            />
          ))}
        </div>
      </Card>

      <Card>
        <SectionHeader icon="🕐" title="Most Active Hours" />
        <Divider className="mb-4" />
        <div className="space-y-3">
          {data.popular_hours.map((hour, index) => (
            <ProgressItem
              key={index}
              label={formatHour(hour.hour)}
              count={hour.count}
              percentage={(hour.count / data.total_searches) * 100}
              progressPercentage={(hour.count / maxHourCount) * 100}
              height="sm"
            />
          ))}
        </div>
      </Card>

      <Card>
        <SectionHeader icon="💾" title="Resource Distribution" />
        <Divider className="mb-4" />
        <div className="space-y-4">
          {data.resource_distribution.map((resource, index) => (
            <ProgressItem
              key={index}
              label={resource.resource}
              count={resource.count}
              percentage={(resource.count / data.total_searches) * 100}
              progressPercentage={(resource.count / maxResourceCount) * 100}
              height="md"
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
