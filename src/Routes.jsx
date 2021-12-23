import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon" element={<PokemonPage />} />
  </Routes>
);

export default routes;
