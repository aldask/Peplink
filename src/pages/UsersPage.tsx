import { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
import Modal from "../components/Modal";
import AddUser from "../components/AddUser";
import type { User } from "../types/User";
import { InitialUsers } from "../utils/InitialUsers";
import {
  addUserToLocalStorage,
  deleteUserFromLocalStorage,
  getUsersFromLocalStorage,
} from "../utils/LocalStorageLogic";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(false);
  };

  const handleDeleteUser = (id: number) => {
    deleteUserFromLocalStorage(id);
    setUsers(getUsersFromLocalStorage());
  };

  return (
    <>
      <div
        className={`min-h-screen py-10 px-4 transition-opacity duration-300 ${
          showModal ? "opacity-50 pointer-events-none" : "bg-gray-100"
        }`}
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Users
        </h1>

        <div className="text-center mb-10">
          <button
            onClick={() => setShowModal(true)}
            className="text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition font-medium px-6 py-2 transition"
          >
            Add User
          </button>
        </div>

        <UsersList users={users} onDeleteUser={handleDeleteUser} />
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddUser onAddUser={handleAddUser} />
      </Modal>
    </>
  );
};

export default UsersPage;
