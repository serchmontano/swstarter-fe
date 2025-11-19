import { Typography, ProgressBar } from "../atoms";

interface ProgressItemProps {
  label: string;
  count: number;
  percentage: number;
  progressPercentage: number;
  height?: 'sm' | 'md';
}

export const ProgressItem = ({ 
  label, 
  count, 
  percentage, 
  progressPercentage,
  height = 'sm'
}: ProgressItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Typography type="paragraph" className="flex-1 capitalize">
          {label}
        </Typography>
        <div className="flex items-center gap-4">
          <Typography type="paragraph" textColor="#666">
            {count} searches
          </Typography>
          <Typography type="paragraph" variant="secondary">
            {percentage.toFixed(1)}%
          </Typography>
        </div>
      </div>
      <ProgressBar percentage={progressPercentage} height={height} />
    </div>
  );
};
