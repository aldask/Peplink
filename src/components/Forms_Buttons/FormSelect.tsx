import type { FormSelectProps } from "../../types/Other";

const FormSelect = ({ label, error, children, ...props }: FormSelectProps) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm font-medium text-gray-700">{label}</label>
    )}
    <select
      {...props}
      className={`border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2
        ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-orange-400"
        }`}
    >
      {children}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default FormSelect;
