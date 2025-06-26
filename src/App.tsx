import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ChuckPage from "./pages/ChuckPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-100 to-amber-300 px-4 sm:px-10">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/chuck" element={<ChuckPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
