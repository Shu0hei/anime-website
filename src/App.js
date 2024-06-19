import { useEffect, useState } from "react";
import "./App.css";
import { getTopAnime } from "./api";

const App = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    getTopAnime().then((result) => {
      setTopAnime(result);
    });
  }, []);

  const TopAnimeList = () => {
    return topAnime.map((anime, i) => {
      return (
        <div className="Anime-wrapper" key={i}>
          <img className="Anime-images" src={anime.images.jpg.image_url}></img>
          <div className="Anime-title">{anime.title}</div>
          <div className="Anime-type">{anime.genres.map((genre) => genre.name)}</div>
          <div className="Anime-synopsis">{anime.synopsis}</div>
          <div className="Anime-episode">{anime.episodes}</div>
          <div className="Anime-durasi">{anime.duration}</div>
          <div className="Anime-popularity">{anime.popularity}</div>
          <div className="Anime-score">{anime.score}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Anime-container">
          <TopAnimeList></TopAnimeList>
        </div>
      </header>
    </div>
  );
};

export default App;
