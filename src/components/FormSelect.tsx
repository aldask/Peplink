import type { FormSelectProps } from "../types/User";

const FormSelect = ({ label, children, ...props }: FormSelectProps) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label className="text-sm font-medium text-gray-700">{label}</label>
    )}
    <select
      {...props}
      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      {children}
    </select>
  </div>
);

export default FormSelect;
