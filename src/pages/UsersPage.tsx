import { useState } from "react";
import UsersList from "../components/Users/UsersList";
import Modal from "../components/Modal";
import AddUser from "../components/Users/AddUser";
import { usingUsers } from "../hooks/useUsers";
import Navbar from "../components/Navbar/Navbar";

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
      <Navbar
        onAddClick={() => setShowModal(true)}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <div
        className={`pt-24 transition-opacity duration-300 max-w-5xl mx-auto px-4 sm:px-6 ${
          showModal ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="text-center py-4 sm:py-6 sm:mb-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
            User Management
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Manage your users efficiently with our intuitive interface.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <UsersList users={sortedUsers} onDeleteUser={handleDeleteUser} />
        </div>
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
