import { createAction } from "@ngrx/store";


export const incrementPlayers = createAction('[Players] Increment Player Count');
export const decrementPlayers = createAction('[Players] Decrement Player Count');
