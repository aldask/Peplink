import type { UserSortionProps } from "../types/User";

const UsersSortion = ({ sortOption, onChange }: UserSortionProps) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onChange(e.target.value)}
      className="text-white bg-amber-600 hover:bg-amber-700 rounded-lg font-medium px-6 py-2 shadow-md transition cursor-pointer"
    >
      <option value="asc">Sort by Name (A-Z)</option>
      <option value="desc">Sort by Name (Z-A)</option>
      <option value="newest">Sort by Newest</option>
      <option value="oldest">Sort by Oldest</option>
    </select>
  );
};

export default UsersSortion;
