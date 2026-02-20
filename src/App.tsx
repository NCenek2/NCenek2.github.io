import { Navigate, Route, Routes } from "react-router-dom";
import RigelIndex from "./Front End Development/Rigel/RigelIndex";
import SnakeWrapper from "./Front End Development/Snake_Game/SnakeWrapper";
import VizIndex from "./Front End Development/Viz/VizIndex";
import Wordle from "./Front End Development/Wordle/Wordle";
import Home from "./Main/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="snake-game" element={<SnakeWrapper />} />
        <Route path="/rigel/*" element={<RigelIndex />} />
        <Route path="/viz/*" element={<VizIndex />} />
        <Route path="wordle" element={<Wordle />} />
        <Route
          path="/Pandemic/*"
          element={<Navigate to="/Pandemic" replace />}
        />
      </Routes>
    </>
  );
};

export default App;
