import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonPage from "./pages/PokemonPage";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon" element={<PokemonPage />} />
    <Route path="/pokemon/:pokemonName" element={<PokemonDetailsPage />} />
  </Routes>
);

export default routes;
