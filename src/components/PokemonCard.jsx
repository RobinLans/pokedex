import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import pokeball from "../svg/pokeball.svg";

function PokemonCard({ data }) {
  const navigate = useNavigate();
  const [pokeInfo, setPokeInfo] = useState(null);
  const [hoverCard, setHoverCard] = useState(false);

  useEffect(() => {
    if (data.id) {
      setPokeInfo(data);
    }
    fetchPokeInfo(data);
  }, [data]);

  async function fetchPokeInfo(poke) {
    const result = await fetch(poke.url);
    const data = await result.json();

    setPokeInfo(data);
  }

  function handleClick() {
    navigate(`/pokemon/${data.name}`);
  }

  return (
    <motion.div
      className="pokeCard"
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
    >
      {pokeInfo !== null ? (
        <>
          <img
            src={pokeInfo.sprites.front_default}
            alt={pokeInfo.name + "Img"}
            className="h-52 z-20"
          />

          {hoverCard && (
            <p className="absolute bottom-0 text-[#2a477c]">{pokeInfo.name}</p>
          )}
          <p className="pokeNr">#{pokeInfo.id}</p>
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
