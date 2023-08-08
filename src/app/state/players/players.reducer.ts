import { createReducer, on } from '@ngrx/store';
import { decrementPlayers, startEditingName, incrementPlayers, editName, stopEditingName } from './players.actions';
import { Player } from '@app/model/player';
import { playerScore } from '../score/score.actions';

export interface PlayersState {
  players: Player[]
}

export interface PlayerEditState {
  playerId: number | null
}

export const initialState: PlayersState = {
  players: [
    {id: 1, name: 'player 1', score: 0 },
    {id: 2, name: 'player 2', score: 0 },
    {id: 3, name: 'player 3', score: 0 },
  ]
};

export const initialPlayerEditState: PlayerEditState = {
  playerId: null
}

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
    players: [...state.players, newPlayer]}}),

  on(decrementPlayers, (state) => {
    return {
      ...state,
      players: state.players.slice(0, Math.max(3, state.players.length - 1))
    };
  }),

  on(playerScore.increment, (state, { playerId }) => {
    const updatedPlayers = state.players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: player.score + 1 };
      }
      return player;
    });

    return {
      ...state,
      players: updatedPlayers,
    };
  }),

  on(playerScore.decrement, (state, { playerId }) => {
    const updatedPlayers = state.players.map((player) => {
      if (player.id === playerId) {
        return { ...player, score: Math.max(0, player.score - 1) };
      }
      return player;
    });

    return {
      ...state,
      players: updatedPlayers,
    };
  }),

  on(editName, (state, action) => {
    const updatedPlayers = state.players.map((player) => {
      if (player.id === action.playerId) {
        return {...player, name: action.newName}
      }
      return player;
    });

    return {
      ...state,
      players: updatedPlayers,
    }
  })
);

export const playerEditReducer = createReducer(
  initialPlayerEditState,
  on(startEditingName, (state, action) => ({...state, playerId: action.playerId})),
  on(stopEditingName, (state) => ({...state, playerId: null}))
);

