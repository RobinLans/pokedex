import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import searchIcon from "../svg/search-solid.svg";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    console.log("hejan");
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

    const data = await result.json();

    setPokemonList(data.results);
  }

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-3/4 h-full">
        <div className="relative">
          <input
            type="text"
            name="search"
            className="h-10 w-[19.2rem] rounded my-4 pl-2 pr-10 text-xs"
            placeholder="Search"
          />
          <button className="absolute top-5 left-[17rem]">
            <img src={searchIcon} alt="searchIcon" className=" h-8" />
          </button>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 mb-4">
          {pokemonList &&
            pokemonList.map((pokemon, i) => {
              return <PokemonCard key={i} data={pokemon} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
