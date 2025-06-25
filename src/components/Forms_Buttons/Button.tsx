import type { ButtonProps } from "../../types/Other";

const Button = ({ onClick, type, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-auto py-2 px-4 sm:py-2 sm:px-6 cursor-pointer font-semibold text-white bg-amber-500 rounded-xl transition shadow focus:outline-none focus:ring-2 focus:ring-amber-300 hover:bg-amber-600 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
