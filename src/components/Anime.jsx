import React from "react";
import "./anime.css";
function Anime({ name, rating, score, image }) {
  return (
    <div className="anime">
      <img src={image} alt="lol.png" />
      <h1>{name}</h1>
      <p>Rating:{rating}</p>
      <p>Score:{score}</p>
    </div>
  );
}

export default Anime;
