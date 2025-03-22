import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Homepage } from "./pages/homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={""} />
        <Route path="agenda" element={<h1>Agenda</h1>} />
        <Route path="messages" element={<h1>Messagerie</h1>} />
        <Route path="administration" element={<h1>Gestion administrative</h1>}/>
        <Route path="technical" element={<h1>Gestion technique</h1>} />
        <Route path="financial" element={<h1>Gestion financière</h1>} />
        <Route path="profile" element={<h1>Votre profile</h1>} />
        <Route path="union_council" element={<h1>Conseil syndical</h1>} />
        <Route path="co_owners" element={<h1>Conseil syndical</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
