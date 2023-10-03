import React from "react";
import logo from "/Image/LogoDark.png";

function Navbar() {
  return (
    <>
      <div className="main flex justify-center items-center bg-black w-full h-20 px-2">
        <img src={logo} alt="" className="w-40 h-40" />
      </div>
    </>
  );
}

export default Navbar;
