import { ActionReducerMap } from "@ngrx/store";
import { PlayerEditState, PlayersState, playerEditReducer, playersReducer } from "./players/players.reducer";


export interface AppState {
  players: PlayersState;
  playerEdit: PlayerEditState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  players: playersReducer,
  playerEdit: playerEditReducer
}
