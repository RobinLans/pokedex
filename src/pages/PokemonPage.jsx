import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PokemonCard from "../components/PokemonCard";
import generationsJSON from "../generations.json";
import SearchAndFilter from "../components/SearchAndFilter";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [generation, setGeneration] = useState(generationsJSON[0]);
  const [changeGen, setChangeGen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [noPokemon, setNoPokemon] = useState(false);

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [generation]);

  async function fetchPokemons() {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`
    );

    const data = await result.json();

    setPokemonList(data.results);
    setNoPokemon(false);
  }

  async function searchForPokemon() {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
      );

      const data = await result.json();
      console.log([data]);

      setPokemonList([data]);
      setNoPokemon(false);
    } catch (error) {
      console.log("Pokémon couldn't be found");
      setNoPokemon(true);
    }
    setSearchQuery("");
  }

  console.log(pokemonList);

  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-3/4 h-full">
        <SearchAndFilter
          changeGen={changeGen}
          setChangeGen={setChangeGen}
          setGeneration={setGeneration}
          generation={generation}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchForPokemon={searchForPokemon}
        />
        {!noPokemon ? (
          <div className="w-full grid grid-cols-3 gap-8 mb-4">
            {pokemonList &&
              pokemonList?.map((pokemon, i) => {
                return <PokemonCard key={i} data={pokemon} />;
              })}
          </div>
        ) : (
          <div className="w-full mb-4 flex justify-center">
            <h1 className="text-[#2a477c] mt-10">No Pokémon could be found</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonPage;
