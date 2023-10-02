import React from "react";
import logo from "/public/Image/LogoDark.png";

function Navbar() {
  return (
    <>
      <div className="main flex justify-center items-center bg-black w-full h-20 px-2">
        <img src={logo} alt="" className="w-40 h-40" />
        <h2 className="font-bold text-white">MoviesOOK</h2>
      </div>
    </>
  );
}

export default Navbar;
