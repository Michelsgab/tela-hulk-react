import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rodape from "./src/components/Footer";
import Cabecalho from "./src/components/Header";
import App from "./src/App";
import PersonagensMarvel from "./src/pages/PersonagensMarvel";
import { useState } from "react";
import { StyledPage } from "./src/utils/style";

export default function AppRouter() {
  const [idCharacter, setIdCharacter] = useState<number | null>(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PersonagensMarvel setIdCharacter={setIdCharacter} />}
        />
        <Route path="/personagem" element={<App idCharacter={idCharacter} />} />
      </Routes>
    </Router>
  );
}
