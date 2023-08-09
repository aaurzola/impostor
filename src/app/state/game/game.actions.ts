import { createAction, props } from "@ngrx/store";


export const loadGame = createAction('[Game] Load Game', props<{numberOfPlayers: number}>());
export const startGame = createAction('[Game] Start Game', props<{numberOfPlayers: number, startingPlayerId: number, wordList: string[]}>());
export const endGame = createAction('[Game] End Game');
export const nextPlayer = createAction('[Game] Next Player');
