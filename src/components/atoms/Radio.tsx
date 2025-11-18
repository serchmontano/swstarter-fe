interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({ id, name, value, label, checked, onChange }: RadioProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="appearance-none w-4 h-4 rounded-full border border-gray-400 cursor-pointer checked:bg-[#0ab463] checked:border-[#0ab463] relative
                   before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
                   before:w-1 before:h-1 before:rounded-full before:bg-white before:opacity-0 checked:before:opacity-100"
      />
      <label 
        htmlFor={id}
        className="text-sm font-semibold cursor-pointer"
        style={{
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {label}
      </label>
    </div>
  );
};
