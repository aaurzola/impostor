import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PlayerEditState, PlayersState } from "./players.reducer";


export const selectPlayers = (state: AppState) => state.players;

export const selectPlayerList = createSelector(
  selectPlayers,
  (state: PlayersState) => state.players
);

export const selectEditPlayer = (state: AppState) => state.playerEdit;

export const selectEditPlayerId = createSelector(
  selectEditPlayer,
  (state: PlayerEditState) => state.playerId
)

