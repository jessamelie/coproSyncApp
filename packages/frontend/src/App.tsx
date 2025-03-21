import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Homepage } from "./pages/homepage/Homepage";
import { Profile } from "./pages/dashboard/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={""} />
        <Route path="agenda" element={<h1>Agenda</h1>} />
        <Route path="messages" element={<h1>Messagerie</h1>} />
        <Route path="copropriete" element={<h1>Copropriété</h1>} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
