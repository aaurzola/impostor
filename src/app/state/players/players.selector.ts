import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PlayersState } from "./players.reducer";


export const selectPlayers = (state: AppState) => state.players;

export const selectPlayerList = createSelector(
  selectPlayers,
  (state: PlayersState) => state.players
);

