import { useState } from "react";
import UsersList from "../components/UsersList";
import Modal from "../components/Modal";
import AddUser from "../components/AddUser";
import UsersSortion from "../components/UsersSortion";
import { usingUsers } from "../hooks/usingUsers";

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    sortedUsers,
    sortOption,
    setSortOption,
    handleAddUser,
    handleDeleteUser,
  } = usingUsers();

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

        <div className="text-center mb-10 space-x-4">
          <button
            onClick={() => setShowModal(true)}
            className="inline-block text-white bg-amber-600 hover:bg-amber-700 rounded-lg font-medium px-6 py-2 shadow-md transition"
          >
            Add User
          </button>

          <span className="inline-block">
            <UsersSortion sortOption={sortOption} onChange={setSortOption} />
          </span>
        </div>

        <UsersList users={sortedUsers} onDeleteUser={handleDeleteUser} />
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddUser
          onAddUser={(user) => {
            handleAddUser(user);
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
};

export default UsersPage;
