import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PokeInfoSection from "../components/PokeInfoSection";
import pokeball from "../svg/pokeball.svg";

function PokemonDetailsPage() {
  const pokeName = useParams();
  const navigate = useNavigate();
  const [pokeInfo, setPokeInfo] = useState(null);
  const [speciesInfo, setSpeciesInfo] = useState(null);

  async function searchForPokemon() {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName.pokemonName}`
      );

      const data = await result.json();

      setPokeInfo(data);
      getSpeciesInfo(data.species.url);
    } catch (error) {
      console.log("Pokémon couldn't be found");
    }
  }

  async function getSpeciesInfo(url) {
    try {
      const result = await fetch(url);

      const data = await result.json();

      setSpeciesInfo(data);
    } catch (error) {
      console.log("Pokémon couldn't be found");
    }
  }

  useEffect(() => {
    searchForPokemon();
  }, []);

  function handleGoBack() {
    navigate("/pokemon");
  }

  return (
    <div className="flex justify-center w-full h-full ">
      {pokeInfo !== null ? (
        <div className="w-[56rem] h-[25.5rem] bg-[#3C66B2] flex mt-8 rounded-xl p-4">
          <div className="flex flex-col justify-between mr-4">
            <h1
              className="cursor-pointer text-[#FECE15]"
              onClick={handleGoBack}
            >
              Go Back
            </h1>
            <div className="w-[21rem] h-[18rem] bg-white flex justify-center items-center rounded-lg">
              <img
                src={pokeInfo.sprites?.front_default}
                alt="pokemon"
                className="w-64 h-64"
              />
            </div>
            <div className="flex justify-center">
              <button className="border-4 border-[#FECE15] text-[#FECE15] w-10 rounded m-2">
                1
              </button>
              <button className="border-4 border-[#FECE15] text-[#FECE15] w-10 rounded m-2">
                2
              </button>
              <button className="border-4 border-[#FECE15] text-[#FECE15] w-10 rounded m-2">
                3
              </button>
            </div>
          </div>
          <PokeInfoSection pokeInfo={pokeInfo} speciesInfo={speciesInfo} />
        </div>
      ) : (
        <motion.img
          src={pokeball}
          alt="pokeball"
          className="h-20 mt-32"
          animate={{
            rotateZ: [0, 360],
            transition: {
              loop: Infinity,
              ease: "easeInOut",
              duration: 1,
            },
          }}
        />
      )}
    </div>
  );
}

export default PokemonDetailsPage;
