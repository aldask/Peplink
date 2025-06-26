import UsersList from "../components/Users/UsersList";
import type { UsersListProps } from "../types/User";

const UsersPage = ({ users, onDeleteUser }: UsersListProps) => {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center py-4 sm:py-6 sm:mb-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
          User Management
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Manage your users efficiently with our intuitive interface.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <UsersList users={users} onDeleteUser={onDeleteUser} />
      </div>
    </div>
  );
};

export default UsersPage;
