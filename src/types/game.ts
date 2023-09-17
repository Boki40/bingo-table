import { FunctionComponent } from "react";

export type Game = {
  cimke: string;
  szoveg: string;
  customComponent?: (
    activatedInRound: number,
    currentIndex: number
  ) => JSX.Element;
};
