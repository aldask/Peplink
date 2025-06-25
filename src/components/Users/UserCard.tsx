import type { UserCardProps } from "../../types/User";

const UserCard = ({ user, onDelete }: UserCardProps) => {
  return (
    <div className="bg-white border border-amber-400 rounded-3xl shadow-lg p-6 sm:p-7 flex flex-col justify-between transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
          {user.f_name}
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          {user.gender} • {user.age} y/o
        </p>
        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onDelete(user.id)}
          className="bg-neutral-700 hover:bg-neutral-800 text-white font-medium text-sm px-4 py-2 rounded-xl shadow transition duration-150"
          aria-label={`Delete user ${user.f_name}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
