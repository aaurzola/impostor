
export interface GameState {
  currentPlayerId: number | null
  startingPlayerId: number | null
  currentWordSet: string[]
}

const initialGameState: GameState = {
  currentPlayerId: null,
  startingPlayerId: null,
  currentWordSet: []
}



