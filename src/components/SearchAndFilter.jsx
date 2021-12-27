import React from "react";
import { motion } from "framer-motion";
import CustomSelector from "../components/CustomSelector";
import arrow from "../svg/caret-down-solid.svg";
import { FaSearch } from "react-icons/fa";

function SearchAndFilter({
  changeGen,
  setGeneration,
  generation,
  setChangeGen,
  searchQuery,
  setSearchQuery,
  searchForPokemon,
}) {
  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") searchForPokemon();
  }

  return (
    <div className="searchAndFilter">
      <input
        type="text"
        name="search"
        className="inputStyle"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="searchBtn group"
        onClick={() => {
          searchForPokemon();
        }}
      >
        <FaSearch className="text-xl font-bold text-[#2a477c] group-hover:text-[#FECE15]" />
      </button>
      <div
        className="customSelect"
        onClick={() => {
          setChangeGen(!changeGen);
        }}
      >
        <p className="text-[#2a477c]">{generation.name}</p>
        <div className="imgContainer">
          <motion.img
            src={arrow}
            alt="arrow"
            className="h-12"
            animate={{
              rotate: changeGen ? "180deg" : "0deg",
            }}
          />
        </div>
        {changeGen && <CustomSelector setGeneration={setGeneration} />}
      </div>
    </div>
  );
}

export default SearchAndFilter;
