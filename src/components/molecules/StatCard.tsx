import { Card, Typography } from "../atoms";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
}

export const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <Typography type="paragraph" textColor="#666">
            {label}
          </Typography>
          <Typography type="title" variant="secondary" className="mt-2">
            {value}
          </Typography>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </Card>
  );
};
