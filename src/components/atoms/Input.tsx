interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

export const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  name 
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`h-10 p-2 rounded-sm border-1/2 border-solid border-[#c4c4c4] bg-white w-full text-sm font-bold placeholder:text-[#c4c4c4] ${className}`}
      style={{
        boxShadow: 'inset 0 0.5px 1.5px 0 rgba(132, 132, 132, 0.75)',
      }}
    />
  );
};
