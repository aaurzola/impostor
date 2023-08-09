import { ActionReducerMap } from "@ngrx/store";
import { PlayerEditState, PlayersState, playerEditReducer, playersReducer } from "./players/players.reducer";
import { GameState, gameReducer } from "./game/game.reducer";


export interface AppState {
  players: PlayersState;
  playerEdit: PlayerEditState;
  game: GameState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  players: playersReducer,
  playerEdit: playerEditReducer,
  game: gameReducer
}
