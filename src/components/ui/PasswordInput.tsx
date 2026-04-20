import { useState } from "react";

interface PasswordInputProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  register,
  error,
  placeholder,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"} 
          placeholder={placeholder}
          {...register(name)}
          className="border rounded px-3 py-2 w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-2 text-sm text-blue-600 font-medium"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};