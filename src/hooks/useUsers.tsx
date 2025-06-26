import { useState, useEffect } from "react";
import type { User } from "../types/User";
import { InitialUsers } from "../utils/InitialUsers";
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUsersFromLocalStorage,
} from "../utils/LocalStorageLogic";

export const usingUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const storedUsers = getUsersFromLocalStorage();
    if (storedUsers.length === 0) {
      addUserToLocalStorage(InitialUsers);
      setUsers(InitialUsers);
    } else {
      setUsers(storedUsers);
    }
  }, []);

  const handleAddUser = (newUser: User) => {
    addUserToLocalStorage([newUser]);
    setUsers(getUsersFromLocalStorage());
  };

  const handleDeleteUser = (id: number) => {
    deleteUserFromLocalStorage(id);
    setUsers(getUsersFromLocalStorage());
  };

  const sortedUsers = [...users].sort((a, b) => {
    switch (sortOption) {
      case "a_z":
        return a.f_name.localeCompare(b.f_name);
      case "z_a":
        return b.f_name.localeCompare(a.f_name);
      case "from_newest":
        return b.id - a.id;
      case "from_oldest":
        return a.id - b.id;
      case "oldest_to_youngest":
        return b.age - a.age;
      case "youngest_to_oldest":
        return a.age - b.age;
      default:
        return 0;
    }
  });

  return {
    sortedUsers,
    sortOption,
    setSortOption,
    handleAddUser,
    handleDeleteUser,
  };
};
