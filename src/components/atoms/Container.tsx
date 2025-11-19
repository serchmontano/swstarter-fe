interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-5xl gap-4 flex-1 overflow-y-auto ${className}`}>
      {children}
    </div>
  );
};
