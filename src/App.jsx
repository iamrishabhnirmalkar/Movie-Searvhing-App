import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import "./index.css";

function App() {
  const [allMovieData, setallMovieData] = useState([]);
  const [searchMovie, setsearchMovie] = useState("");

  const fetchMovieData = async () => {
    try {
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
      );
      const data = await res.json();
      setallMovieData(data.Search);
      console.log(data.Search);
    } catch (error) {
      console.log("Error In The Gating Data");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg">
        <Searchbar
          searchMovie={searchMovie}
          setsearchMovie={setsearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard allMovieData={allMovieData} />
      </div>
    </>
  );
}

export default App;
