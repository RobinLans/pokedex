import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pokeball from "../svg/pokeball.svg";

function PokemonCard({ data }) {
  const [pokeInfo, setPokeInfo] = useState(null);
  const [hoverCard, setHoverCard] = useState(false);

  useEffect(() => {
    fetchPokeInfo(data);
  }, []);

  async function fetchPokeInfo(poke) {
    const result = await fetch(poke.url);
    const data = await result.json();

    setPokeInfo(data);
  }

  return (
    <motion.div
      className="relative h-60 rounded-xl bg-white shadow-lg hover:shadow-none flex justify-center items-center cursor-pointer"
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      whileHover={{ scale: 1.1 }}
    >
      {pokeInfo !== null ? (
        <>
          <img
            src={pokeInfo.sprites.front_default}
            alt={pokeInfo.name + "Img"}
            className="h-52 z-20"
          />

          {hoverCard && <p className="absolute bottom-0">{pokeInfo.name}</p>}
          <p className="absolute z-10 text-7xl blur-sm top-5 opacity-50">
            #{pokeInfo.id}
          </p>
        </>
      ) : (
        <motion.img
          src={pokeball}
          alt="pokeball"
          className="h-20"
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
    </motion.div>
  );
}

export default PokemonCard;
