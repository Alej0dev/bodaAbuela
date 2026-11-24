import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitation from "./pages/Invitation";
import Links from "./pages/Links";

// /?cupos=1, /?cupos=2 ... → invitación válida para ese número de personas
// /enlaces       → lista de enlaces para copiar y enviar
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/enlaces" element={<Links />} />
        <Route path="/" element={<Invitation />} />
        <Route path="*" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}
