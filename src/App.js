import "./App.css";
import Anime from "./components/Anime";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const [word, setWord] = useState("");

  async function getData() {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    console.log(resData.data);
    setData(resData.data);
  }
  useEffect(() => {
    getData();
  }, [search]);

  function clear() {
    setSearch("");
    setWord("");
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Anime Api</h1>
        <input
          type="text"
          value={word}
          onChange={(e) => {
            return setWord(e.target.value);
          }}
        />
        <div className="button">
          <button onClick={() => setSearch(word)}>Search</button>
          <button onClick={() => clear()}>Clear</button>
        </div>
      </div>
      <div className="list">
        {data.map((anime, index) => {
          return (
            <Anime
              key={index}
              name={anime.title}
              rating={anime.rating}
              score={anime.score}
              image={anime.images.webp.image_url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
