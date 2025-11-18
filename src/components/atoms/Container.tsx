interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-5xl my-4 gap-4 ${className}`}>
      {children}
    </div>
  );
};
