import { Typography } from "../atoms";

interface SectionHeaderProps {
  icon: string;
  title: string;
}

export const SectionHeader = ({ icon, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      <Typography type="subtitle">{title}</Typography>
    </div>
  );
};
