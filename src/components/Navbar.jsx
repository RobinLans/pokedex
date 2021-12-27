import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../svg/user-circle-regular.svg";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="text-[#FECE15] text-3xl w-60 ml-6">
        Pokédex
      </Link>
      <div>
        <Link to="/pokemon" className="text-[#FECE15] m-4">
          Pokémon
        </Link>
        <Link to="/memory" className="text-[#FECE15] m-4">
          Memory
        </Link>
        <Link to="/favorites" className="text-[#FECE15] m-4">
          Favorites
        </Link>
      </div>
      <div className=" w-60 flex justify-end mr-6">
        <img src={userIcon} alt="user" className="h-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
