import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Homepage } from "./pages/homepage/Homepage";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
