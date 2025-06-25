import type { UserSortionProps } from "../types/User";

const UsersSortion = ({ sortOption, onChange }: UserSortionProps) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onChange(e.target.value)}
      className="sm:text-left text-center w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer text-sm sm:text-base"
    >
      <option value="asc">Sort by Name (A-Z)</option>
      <option value="desc">Sort by Name (Z-A)</option>
      <option value="newest">Sort by Newest</option>
      <option value="oldest">Sort by Oldest</option>
    </select>
  );
};

export default UsersSortion;
