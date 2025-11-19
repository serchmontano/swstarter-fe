interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button = ({ children, disabled = false, loading = false, onClick, type = 'button', className = '' }: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`py-1 rounded-2xl border-[0.5px] border-solid px-4 text-white uppercase text-center font-bold  text-sm
                  transition-all duration-150 
                  ${!isDisabled ? 'bg-[#0ab463] border-[#0ab463] hover:bg-[#089954] hover:border-[#089954] active:scale-95 active:opacity-80' : 'bg-[#c4c4c4] border-[#c4c4c4] cursor-not-allowed'} 
                  ${className}`}
    >
      {loading ? 'Searching...' : children}
    </button>
  );
};
