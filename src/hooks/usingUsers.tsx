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
  const [sortOption, setSortOption] = useState("asc");

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
      case "asc":
        return a.f_name.localeCompare(b.f_name);
      case "desc":
        return b.f_name.localeCompare(a.f_name);
      case "newest":
        return b.id - a.id;
      case "oldest":
        return a.id - b.id;
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
