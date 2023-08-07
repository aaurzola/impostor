import { createReducer, on } from '@ngrx/store';
import { decrementPlayers, incrementPlayers } from './players.actions';
import { Player } from '@app/model/player';

export interface PlayersState {
  count: number;
  players: Player[]
}

export const initialState: PlayersState = {
  count: 3,
  players: [
    {id: 1, name: 'player 1', score: 0 },
    {id: 2, name: 'player 2', score: 0 },
    {id: 3, name: 'player 3', score: 0 },
  ]
};

export const playersReducer = createReducer(
  initialState,
  on(incrementPlayers, (state) => {
    const playerId = state.players.length + 1;
    const newPlayerName = `player ${playerId}`;
    const newPlayer: Player = {
      id: playerId,
      name: newPlayerName,
      score: 0
    }

    return {
    ...state,
    count: state.count + 1,
    players: [...state.players, newPlayer]}}),

  on(decrementPlayers, (state) => {
    const newCount = Math.max(3, state.count - 1);
    const newPlayers = state.players.slice(0, newCount);

    return {
      ...state,
      count: newCount,
      players: newPlayers
    };
  })
);
