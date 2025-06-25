import type { UserCardProps } from "../types/User";

const UserCard = ({ user, onDelete }: UserCardProps) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between transition duration-200 hover:scale-[1.02] hover:shadow-md">
      <div>
        <h2 className="text-lg font-semibold text-neutral-900">
          {user.f_name}
        </h2>
        <p className="text-sm text-neutral-600">
          {user.gender} • {user.age} y/o
        </p>
        <span className="inline-block mt-2 text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
          {user.role}
        </span>
      </div>
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => onDelete(user.id)}
          className="bg-neutral-700 hover:bg-neutral-800 text-white font-semibold px-6 py-2 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-0.5 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
