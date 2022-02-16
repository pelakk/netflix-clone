import React, { useEffect, useState } from "react";
import "./RowStyles.css";
import axios from "axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row_container">
      <h3>{title}</h3>
      <div className="row_movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            style={{ maxHeight: "100px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
