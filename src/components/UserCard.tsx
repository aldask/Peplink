import type { UserCardProps } from "../types/User";

const UserCard = ({ user, onDelete, onEdit }: UserCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {user.f_name}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          {user.gender} • {user.age} y/o
        </p>
        <span className="inline-block mt-2 text-xs font-medium bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(user.id)}
          className="px-4 py-1.5 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
