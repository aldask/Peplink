import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ChuckPage from "./pages/ChuckPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal";
import AddUser from "./components/Users/AddUser";
import { usingUsers } from "./hooks/useUsers";

function App() {
  const {
    sortedUsers,
    sortOption,
    setSortOption,
    handleAddUser,
    handleDeleteUser,
  } = usingUsers();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-100 to-amber-300 px-4 sm:px-10">
      <Navbar
        onAddClick={() => setShowModal(true)}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <UsersPage users={sortedUsers} onDeleteUser={handleDeleteUser} />
            }
          />
          <Route path="/chuck" element={<ChuckPage />} />
        </Routes>
      </main>
      <Footer />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddUser
          onAddUser={(user) => {
            handleAddUser(user);
            setShowModal(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default App;
