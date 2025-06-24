import UsersList from "../components/UsersList";

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Users
      </h1>
      <UsersList />
    </div>
  );
};

export default UsersPage;
