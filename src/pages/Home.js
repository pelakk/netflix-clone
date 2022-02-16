import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./HomeStyles.css";
import axios from "axios";
import requests from "../requests";
import Row from "../components/Row";

function Home() {
  const [featuredMovie, setFeaturedMovie] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const result = await axios.get(requests.fetchNetflixOriginals);
      setFeaturedMovie(result.data.results[1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING</h1>
      </div>
    );
  }

  return (
    <div className="home_container">
      <div
        className="home_header"
        style={{
          background: `linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.8) 100%
          ), url('https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}')`,
        }}
      >
        <Navbar />
        <div className="home_headerContent">
          <h1 className="home_headerTitle">{featuredMovie.name}</h1>
          <div className="home_headerButtons">
            <button>Play</button>
            <button>My list</button>
          </div>
          <h4 className="home_headerDesc">{featuredMovie.overview}</h4>
        </div>
      </div>
      <div className="home_content">
        <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
        <div style={{ height: 100 }} />
      </div>
    </div>
  );
}

export default Home;
