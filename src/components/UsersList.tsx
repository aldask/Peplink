import { useState, useEffect } from "react";
import {
  addUserToLocalStorage,
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

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.f_name}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
