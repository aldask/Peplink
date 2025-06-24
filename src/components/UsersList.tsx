import { useState, useEffect } from "react";
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUsersFromLocalStorage,
} from "../utils/LocalStorageLogic";
import { InitialUsers } from "../utils/InitialUsers";
import type { User } from "../types/User";
import UserCard from "./UserCard";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = getUsersFromLocalStorage();
    if (storedUsers.length === 0) {
      addUserToLocalStorage(InitialUsers);
      setUsers(InitialUsers);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  const handleDeleteUser = (id: number) => {
    deleteUserFromLocalStorage(id);
    setUsers(getUsersFromLocalStorage());
  };

  const handleEditUser = (id: number) => {
    console.log("Edit user", id);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        User Profiles
      </h1>

      {users.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-lg font-medium">No users found</p>
          <p className="text-sm text-gray-400">Start by adding a new one.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handleDeleteUser}
              onEdit={handleEditUser}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default UsersList;
