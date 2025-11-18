interface DividerProps {
  className?: string;
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div 
      className={`w-full h-px my-2 bg-[#c4c4c4] ${className}`}
    />
  );
};
