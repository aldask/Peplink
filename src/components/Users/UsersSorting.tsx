import type { UserSortingProps } from "../../types/User";

const UsersSorting = ({ sortOption, onChange }: UserSortingProps) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onChange(e.target.value)}
      className="md:text-left text-center w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-xl shadow hover:shadow-md focus:ring-2 focus:ring-amber-300 cursor-pointer transition "
    >
      <option value="asc">Sort by Name (A-Z)</option>
      <option value="desc">Sort by Name (Z-A)</option>
      <option value="newest">Sort by Newest</option>
      <option value="oldest">Sort by Oldest</option>
    </select>
  );
};

export default UsersSorting;
