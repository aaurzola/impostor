import { gameWord } from "@app/model/gameWord";
import { createAction, props } from "@ngrx/store";


export const loadGame = createAction('[Game] Load Game', props<{numberOfPlayers: number}>());
export const startGame = createAction('[Game] Start Game', props<{numberOfPlayers: number, wordList: gameWord[]}>());
export const endGame = createAction('[Game] End Game');
export const nextPlayer = createAction('[Game] Next Player');
