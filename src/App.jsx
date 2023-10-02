import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import "./index.css";

function App() {
  const [allMovieData, setallMovieData] = useState([]);
  const [searchMovie, setsearchMovie] = useState("");

  return (
    <>
      <Navbar />
      <div className="bg">
        <Searchbar />
        <MovieCard />
      </div>
    </>
  );
}

export default App;
