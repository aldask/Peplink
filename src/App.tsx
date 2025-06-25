import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import ChuckPage from "./pages/ChuckPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/chuck" element={<ChuckPage />} />
      </Routes>
    </>
  );
}

export default App;
