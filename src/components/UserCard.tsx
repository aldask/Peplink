import type { UserCardProps } from "../types/User";

const UserCard = ({ user, onDelete }: UserCardProps) => {
  return (
    <div className="bg-white border border-amber-300 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between transition duration-200 hover:scale-[1.02] hover:shadow-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{user.f_name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          {user.gender} • {user.age} y/o
        </p>
        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onDelete(user.id)}
          className="bg-neutral-700 hover:bg-neutral-800 text-white font-medium px-4 py-1.5 rounded-2xl text-sm shadow-sm hover:shadow-md transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
