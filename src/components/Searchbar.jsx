import React from "react";

function Searchbar() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <input
          placeholder="Search here"
          className="bg-gray-600 px-2 mt-3 py-2 w-80 border-2 border-gray-500 text-white outline-none rounded-l-lg"
        />
        <button className="bg-blue-600 mt-3 rounded-r-lg text-white px-4 py-2  border-b-2 border-r-2 border-t-2 border-blue-500">
          Search
        </button>
      </div>
    </>
  );
}

export default Searchbar;
