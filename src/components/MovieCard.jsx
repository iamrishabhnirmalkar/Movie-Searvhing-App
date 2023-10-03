import React from "react";

function MovieCard({ allMovieData }) {
  return (
    <>
      <div className="flex flex-wrap px-4 lg:px-10">
        {allMovieData.map((item, index) => (
          <div className="p-2 md:w-1/4 w-full" key={index}>
            <div className="p-3 rounded-2xl shadow-lg hover:bg-green-400 border-2 border-gray-600">
              <img
                src={item.Poster}
                alt=""
                className="rounded-lg w-full mb-2"
              />
              <h2 className="text-xl text-white font-bold">{item.Title}</h2>
              <h3 className="text-lg text-white mb-2">{item.Description}</h3>
              <h3 className="text-lg text-white mb-2">{item.Year}</h3>
              <h3 className="text-lg text-white mb-2">{item.Type}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
