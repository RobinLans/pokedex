import React from "react";

function PokeInfoSection({ pokeInfo, speciesInfo }) {
  return (
    <div className="ml-4 flex flex-col">
      <h1 className="cursor-pointer text-[#FECE15] mb-2">{pokeInfo.name}</h1>

      <h1 className="text-[#FECE15] text-sm border-t-4 border-[#FECE15] pt-4 h-[12rem] overflow-auto">
        {speciesInfo !== null && speciesInfo.flavor_text_entries[0].flavor_text}
      </h1>
      <div>
        <div className="flex text-[#FECE15] text-lg justify-between mb-2">
          <p>Type:</p>
          <p>bajs</p>
        </div>
        <div className="flex text-[#FECE15] text-lg justify-between mb-2">
          <p>Height:</p>
          <p>{pokeInfo.height}</p>
        </div>
        <div className="flex text-[#FECE15] text-lg justify-between mb-2">
          <p>Weight:</p>
          <p>{pokeInfo.weight}</p>
        </div>
      </div>
    </div>
  );
}

export default PokeInfoSection;
