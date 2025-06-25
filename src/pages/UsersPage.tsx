import { useState } from "react";
import UsersList from "../components/UsersList";
import Modal from "../components/Modal";
import AddUser from "../components/AddUser";
import UsersSortion from "../components/UsersSortion";
import { usingUsers } from "../hooks/usingUsers";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    sortedUsers,
    sortOption,
    setSortOption,
    handleAddUser,
    handleDeleteUser,
  } = usingUsers();

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`transition-opacity duration-300 max-w-5xl mx-auto ${
          showModal ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <h1 className="text-5xl font-extrabold text-center mb-14 text-gray-800 tracking-tight drop-shadow-sm">
          User Management
        </h1>

        <div className="mb-14 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="w-[80%] sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Add User
          </button>

          <div className="w-[80%] sm:w-auto">
            <UsersSortion sortOption={sortOption} onChange={setSortOption} />
          </div>

          <button
            onClick={() => navigate("/chuck")}
            className="w-[80%] sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-semibold px-7 py-3 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Go to Chuck Norris
          </button>
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
