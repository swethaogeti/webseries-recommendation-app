import React from "react";
import "./styles.css";
import { useState } from "react";

const webseriesDB = {
  Action: [
    { name: "Money Heist", seasons: "4", rating: "4.5/5" },
    { name: "Narcos", seasons: "3", rating: "4.5/5" },
    { name: "Sherlock", seasons: "4", rating: "4/5" },
    { name: "Cobra Kai", seasons: "3", rating: "4/5" },
    { name: "Peaky Blinder", seasons: "5", rating: "3/5" }
  ],

  SciFi: [
    { name: "Dark", seasons: "3", rating: "5/5" },
    { name: "Stranger Things", seasons: "4", rating: "4.5/5" },
    { name: "Counterpart", seasons: "2", rating: "4/5" },
    { name: "Maniac", seasons: "1", rating: "4/5" },
    { name: "The Magician", seasons: "5", rating: "3.5/5" }
  ],

  Drama: [
    { name: "Game of Thrones", seasons: "8", rating: "5/5" },
    { name: "Queen's Gamebit", seasons: "1", rating: "4.5/5" },
    { name: "Ozark", seasons: "3", rating: "4.5/5" },
    { name: "Lucifer", seasons: "6", rating: "4/5" },
    { name: "The Crown", seasons: "4", rating: "3.5/5" }
  ],

  KDrama: [
    { name: "Squid Games", seasons: "1", rating: "5/5" },
    { name: "It's okay not to be okay", seasons: "1", rating: "4.5/5" },
    { name: "Itaewon Class", seasons: "1", rating: "4/5" },
    { name: "Goblin", seasons: "1", rating: "4/5" },
    { name: "Crash Landing on you", seasons: "1", rating: "3.5/5" }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Drama");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  const webseriesGenre = Object.keys(webseriesDB);

  return (
    <div className="App">
      <h1>🎬 WEBSERIES </h1>
      <p style={{ font: "smaller" }}>
        Checkout my favorite webseries to get started 📺
      </p>

      <div>
        {webseriesGenre.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.8rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {webseriesDB[genre].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "24px" }}>{series.name}</div>
              <div style={{ fontSize: "20px" }}>Seasons - {series.seasons}</div>
              <div style={{ fontSize: "18px" }}>{series.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
