import { useLocation } from "react-router-dom";
import { Game } from "../types/game";
import koccLogo from "../assets/kocc-logo.png";
import { useState } from "react";

import "./GamePage.css";

export default function GamePage() {
  const [revealedIndexes, setRevaledIndexes] = useState<number[]>([]);

  const location = useLocation();
  const gamesToDisplay = location.state.games as Game[];

  return (
    <div className="bg-slate-900 p-5 flex flex-col items-center relative">
      <div className="game-title" style={{ fontFamily: "Rubik Vinyl" }}>
        Egyedi ivós Danger Bingó szabályok (powered by Kocc{" "}
        <img
          alt="kocc-logo"
          src={koccLogo}
          width="40px"
          className="text-center inline"
        />
        )
      </div>
      <div
        className="revealed-bar-container"
        style={{ fontFamily: "Rubik Vinyl" }}
      >
        <div className="revealed-bar">
          {revealedIndexes.map((number, index) => (
            <div
              className="revealed-number"
              style={{ fontFamily: "Rubik Vinyl" }}
              key={index}
            >
              {number + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="board-grid">
        {gamesToDisplay.map((game, index) => (
          <div className="relative" key={index}>
            <div
              onClick={() => setRevaledIndexes((prev) => [...prev, index])}
              className={`board-cell-title
              ${!revealedIndexes.includes(index) && "unrevealed"}`}
              style={{ fontFamily: "Rubik Vinyl" }}
            >
              <div
                className={`board-cell-number  ${
                  !revealedIndexes.includes(index) ? "unrevealed" : "revealed"
                }`}
              >
                {index + 1}
              </div>{" "}
              <div>{game.cimke}</div>
            </div>
            <div className="h-[50px]" />
            <div
              className={`board-cell-text ${
                !revealedIndexes.includes(index) && "unrevealed"
              }`}
              style={{ fontFamily: "Kalam" }}
            >
              {game.szoveg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
