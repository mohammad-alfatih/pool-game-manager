import { createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { GameActions, GameActionTypes } from './game.actions';

import { map } from 'rxjs/operators';

import { GameModels } from '../../models/game/game-models';

export const gameAdapter = createEntityAdapter<GameModels.Game>();
export interface State extends EntityState<GameModels.Game> {
  id: number;
  players: GameModels.Player[];
  table: GameModels.Table;
  activeTurn: GameModels.Turn;
  completedTurns: GameModels.Turn[];
  sessionType: number;
  gameType: number;
  gameWinner: string;
}

export const initialGameState: State = gameAdapter.getInitialState({
  id: 123,
  players: null,
  table: null,
  activeTurn: null,
  completedTurns: [],
  sessionType: undefined,
  gameType: undefined,
  gameWinner: null,
});

export function reducer(
  state = initialGameState,
  action: GameActions
): State {
  switch (action.type) {

    // case GameActionTypes.CREATE_TABLE:
    //   return {
    //     ...state,
    //     table: action.payload.table
    //   };

    // case GameActionTypes.CREATE_PLAYERS:
    //   return {
    //     ...state,
    //     players: action.payload.players
    //   };

    case GameActionTypes.INIT_GAME_SUCCESS:
      return {
        ...state,
        id: 0,
        table: action.payload
      };

    case GameActionTypes.ASSIGN_TURN:
      return {
        ...state,
        activeTurn: action.payload.turn
      };

    case GameActionTypes.TAKE_SHOT:
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          shot: action.payload.shot
        }
      };

    case GameActionTypes.SUBMIT_TURN:
      return {
        ...state,
        completedTurns: [
          ...state.completedTurns,
          action.payload
        ]
      };

    default:
      return state;
  }
}

export const getGameState = createFeatureSelector<State>('game');
export const {
  selectIds,
  selectEntities,
} = gameAdapter.getSelectors(getGameState);
