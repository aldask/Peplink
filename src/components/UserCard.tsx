import type { UserCardProps } from "../types/User";

const UserCard = ({ user, onDelete }: UserCardProps) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm p-6 flex flex-col justify-between transition duration-200 hover:scale-[1.01] hover:shadow-md">
      <div>
        <h2 className="text-lg font-semibold text-neutral-800">
          {user.f_name}
        </h2>
        <p className="text-sm text-neutral-600">
          {user.gender} • {user.age} y/o
        </p>
        <span className="inline-block mt-2 text-xs font-medium bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        {/* <button
          onClick={() => onEdit(user.id)}
          className="px-4 py-1.5 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition"
        >
          Edit
        </button> */}
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-1.5 text-sm font-medium text-white bg-neutral-700 hover:bg-neutral-800 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
