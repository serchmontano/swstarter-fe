interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div 
      className={`bg-white p-4 rounded-[2px] border-[0.5px] border-solid border-[#dadada] ${className}`}
      style={{
        boxShadow: '0 0.5px 1px 0 rgba(151, 151, 151, 0.75)',
      }}
    >
      {children}
    </div>
  );
};
