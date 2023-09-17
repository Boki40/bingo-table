import { useLocation } from "react-router-dom";
import { Game } from "../types/game";
import koccLogo from "../assets/kocc-logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

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
            <motion.div
              key={index}
              animate={{
                rotate: [0, 270, 180, 0],
                x: [50, 0],
              }}
            >
              <div
                className="revealed-number"
                style={{ fontFamily: "Rubik Vinyl" }}
              >
                {number + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="board-grid"
        animate={{
          borderRadius: ["50%", "45%", "40%", "30%", "3rem"],
        }}
      >
        {gamesToDisplay.map((game, index) => (
          <motion.div
            className="relative"
            key={index}
            animate={{
              opacity: [0, 0, 0, 0, 0, 0, 1],
              scale: [0, 0, 0, 0, 0, 0, 0, 0.5, 1.3, 1],
            }}
          >
            <motion.div
              onClick={() => setRevaledIndexes((prev) => [...prev, index])}
              className={`board-cell-title
              ${!revealedIndexes.includes(index) && "unrevealed"}`}
              style={{ fontFamily: "Rubik Vinyl" }}
              animate={
                revealedIndexes.includes(index) ? "revealed" : "unrevealed"
              }
              variants={titleVariants}
              transition={{ duration: 0.2 }}
            >
              <div
                className={`board-cell-number  ${
                  !revealedIndexes.includes(index) ? "unrevealed" : "revealed"
                }`}
              >
                <div>{index + 1}</div>
              </div>
              <div>{game.cimke}</div>
            </motion.div>
            <div className="h-[50px]" />
            <div
              className={`board-cell-text ${
                !revealedIndexes.includes(index) && "unrevealed"
              }`}
              style={{ fontFamily: "Kalam" }}
            >
              {game.szoveg}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const titleVariants = {
  revealed: { x: 0, y: 0, scale: 1 },
  unrevealed: { x: "50%", y: "50%", scale: 1.6 },
};
