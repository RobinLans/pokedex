import React from "react";
import { useParams } from "react-router-dom";

function PokemonDetailsPage() {
  const pokeName = useParams();

  console.log(pokeName.pokemonName);

  return (
    <div>
      <h1>{pokeName.pokemonName}</h1>
    </div>
  );
}

export default PokemonDetailsPage;
