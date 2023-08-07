import { ActionReducerMap } from "@ngrx/store";
import { PlayersState, playersReducer } from "./players/players.reducer";


export interface AppState {
  players: PlayersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  players: playersReducer,
}
