import type { UsersListProps } from "../../types/User";
import UserCard from "./UserCard";

const UsersList = ({ users, onDeleteUser }: UsersListProps) => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-neutral-800 mb-10 text-center">
        User Profiles
      </h1>
      {users.length === 0 ? (
        <div className="text-center mt-24 text-neutral-500">
          <p className="text-xl font-medium">No users found</p>
          <p className="text-sm text-neutral-400 mt-1">
            Start by adding a new one
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={() => onDeleteUser(user.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default UsersList;
