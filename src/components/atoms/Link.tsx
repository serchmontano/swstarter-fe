interface LinkProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ onClick, children, className = '' }: LinkProps) => {
  return (
    <span 
      onClick={onClick}
      className={`text-blue-600 hover:text-blue-800 cursor-pointer hover:underline ${className}`}
    >
      {children}
    </span>
  );
};
