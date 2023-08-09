import { createReducer, on } from "@ngrx/store"
import { loadGame, nextPlayer, startGame } from "./game.actions"
import { gameWord } from "@app/model/gameWord"

export interface GameState {
  currentPlayerId: number
  startingPlayerId: number
  currentWordSet: gameWord[]
}

const initialGameState: GameState = {
  currentPlayerId: 1,
  startingPlayerId: 0,
  currentWordSet: []
}

export const gameReducer = createReducer(
  initialGameState,
  on(loadGame, state => ({...state })),
  on(startGame, (state, action) => (
    {...state,
      currentWordSet: action.wordList,
      startingPlayerId: action.startingPlayerId,
      currentPlayerId: 1
    }
  )),
  on(nextPlayer, (state) => ( {...state, currentPlayerId: state.currentPlayerId + 1}))
);





