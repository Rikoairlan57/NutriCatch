import { FC } from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}): JSX.Element => {
  return (
    <div className="pb-5 flex flex-col space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border text-black ${error ? "border-red-500" : "border-gray-300"}
      rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500
      focus:border-indigo-500 sm:text-sm`}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
