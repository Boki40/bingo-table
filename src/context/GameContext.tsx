/* eslint-disable react-refresh/only-export-components */
import React, { PropsWithChildren, useContext, useState } from "react";
import { Game } from "../types/game";

type GameContextType = {
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

export const GameContext = React.createContext<GameContextType>(
  {} as GameContextType
);

export const GameContextProvider = ({ children }: PropsWithChildren) => {
  const [games, setGames] = useState<Game[]>([]);

  return (
    <GameContext.Provider value={{ games, setGames }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameContextType => useContext(GameContext);
