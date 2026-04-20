interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false
}) => {
  const base = "px-4 py-2 rounded font-medium transition-all active:scale-95";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  return (
    <button
      type={type}
      disabled={isLoading} 
      className={`${base} ${styles[variant]}`}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};