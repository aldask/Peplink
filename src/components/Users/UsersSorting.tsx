import type { UserSortingProps } from "../../types/User";

const UsersSorting = ({ sortOption, onChange }: UserSortingProps) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onChange(e.target.value)}
      className="md:text-left text-center w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 sm:py-2 sm:px-6 rounded-xl shadow hover:shadow-md focus:ring-2 focus:ring-amber-300 cursor-pointer transition "
    >
      <option value="0">Default Sorting</option>
      <option value="a_z">Name: A to Z</option>
      <option value="z_a">Name: Z to A</option>
      <option value="from_newest">Newest First</option>
      <option value="from_oldest">Oldest First</option>
      <option value="youngest_to_oldest">Age: Youngest to Oldest</option>
      <option value="oldest_to_youngest">Age: Oldest to Youngest</option>
    </select>
  );
};

export default UsersSorting;
