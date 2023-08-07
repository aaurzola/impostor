import { createActionGroup, props } from "@ngrx/store";


export const playerScore = createActionGroup({
  source: 'Score',
  events: {
    'increment': props<{playerId: number}>(),
    'decrement': props<{playerId: number}>()
}});
