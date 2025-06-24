import { useState, useEffect } from "react";
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUsersFromLocalStorage,
} from "../utils/LocalStorageLogic";
import { InitialUsers } from "../utils/InitialUsers";
import type { User } from "../types/User";

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
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-lg"
            >
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
                  onClick={() => handleEditUser(user.id)}
                  className="px-4 py-1.5 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-4 py-1.5 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UsersList;
