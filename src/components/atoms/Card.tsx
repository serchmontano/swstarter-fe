interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white p-4 rounded-[2px] md:border-[0.5px] md:border-solid md:border-[#dadada] md:shadow-[0_0.5px_1px_0_rgba(151,151,151,0.75)] ${className}`}
    >
      {children}
    </div>
  );
};
