import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { GameState } from "./game.reducer";



export const selectGame = (state: AppState) => state.game;

export const selectStartingPlayer = createSelector(
  selectGame,
  (state: GameState) => state.startingPlayerId
)

export const selectWordList = createSelector(
  selectGame,
  (state: GameState) => state.currentWordSet
)

export const selectCurrentPlayer = createSelector(
  selectGame,
  (state: GameState) => state.currentPlayerId
)

