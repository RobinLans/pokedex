import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../svg/user-circle-regular.svg";

function Navbar() {
  return (
    <div className="bg-[#3C66B2] w-full h-20 flex items-center justify-between border-b-4 border-[#FECE15]">
      <Link to="/" className="text-[#FECE15] text-3xl w-60 ml-6">
        Pokédex
      </Link>
      <div>
        <Link to="/pokemon" className="text-[#FECE15] m-4">
          Pokémon
        </Link>
        <Link to="#" className="text-[#FECE15] m-4">
          Locations
        </Link>
        <Link to="#" className="text-[#FECE15] m-4">
          Items
        </Link>
      </div>
      <div className=" w-60 flex justify-end mr-6">
        <img src={userIcon} alt="user" className="h-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
