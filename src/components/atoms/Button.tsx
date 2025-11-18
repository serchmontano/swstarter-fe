interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button = ({ children, disabled = false, onClick, type = 'button', className = '' }: ButtonProps) => {
  const backgroundColor = disabled ? '#c4c4c4' : '#0ab463';
  const borderColor = disabled ? '#c4c4c4' : '#0ab463';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`py-1 rounded-2xl border-[0.5px] border-solid w-full text-white uppercase text-center font-bold ${className}`}
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      {children}
    </button>
  );
};
