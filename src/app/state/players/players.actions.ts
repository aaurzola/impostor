import { createAction, props } from "@ngrx/store";


export const incrementPlayers = createAction('[Players] Increment Player Count');
export const decrementPlayers = createAction('[Players] Decrement Player Count');
export const startEditingName = createAction('[Player-Info] Start Editing Player Name', props<{playerId: number}>());
export const editName = createAction('[player-Info] Edit Player Name', props<{playerId: number, newName: string}>())
export const stopEditingName = createAction('[Player-Info] Stop Editing Player Name');
