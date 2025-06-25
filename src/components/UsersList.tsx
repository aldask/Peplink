import type { User } from "../types/User";
import UserCard from "./UserCard";

interface UsersListProps {
  users: User[];
  onDeleteUser: (id: number) => void;
}

const UsersList = ({ users, onDeleteUser }: UsersListProps) => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-neutral-800 mb-8 sm:mb-10 text-center">
        User Profiles
      </h1>

      {users.length === 0 ? (
        <div className="text-center mt-16 sm:mt-24 text-neutral-500">
          <p className="text-lg sm:text-xl font-medium">No users found</p>
          <p className="text-sm text-neutral-400 mt-1">
            Add a new user to get started
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
