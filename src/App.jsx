import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accueil from "./pages/Accueil";
import Header from "./components/Header";
import Personnages from "./pages/Personnages";
import Comic from "./pages/Comic";
import Comics from "./pages/Comics";

function App() {
  const [home, setHome] = useState(false);
  return (
    <Router>
      <Header home={home} setHome={setHome} />
      <Routes>
        <Route
          path="/"
          element={<Accueil home={home} setHome={setHome} />}
        ></Route>
        <Route
          path="/personnages"
          element={<Personnages home={home} setHome={setHome} />}
        />
        <Route
          path="/comics/:characterId"
          element={<Comic home={home} setHome={setHome} />}
        ></Route>
        <Route path="/comics" element={<Comics setHome={setHome} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
