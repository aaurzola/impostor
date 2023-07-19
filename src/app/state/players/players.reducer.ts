import { createReducer, on } from '@ngrx/store';
import { decrementPlayers, incrementPlayers } from './players.actions';

export interface PlayersState {
  count: number;
}

export const initialState: PlayersState = {
  count: 3,
};

export const playersReducer = createReducer(
  initialState,
  on(incrementPlayers, (state) => ({ ...state, count: state.count + 1 })),
  on(decrementPlayers, (state) => ({
    ...state,
    count: Math.max(0, state.count - 1),
  }))
);
