interface ProgressBarProps {
  percentage: number;
  height?: 'sm' | 'md';
}

export const ProgressBar = ({ percentage, height = 'sm' }: ProgressBarProps) => {
  const heightClass = height === 'sm' ? 'h-2' : 'h-3';
  
  return (
    <div className={`w-full bg-[#ededed] rounded-full ${heightClass}`}>
      <div
        className={`bg-[#0ab463] ${heightClass} rounded-full transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
