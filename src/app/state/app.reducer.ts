import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { storeFreeze } from 'ngrx-store-freeze';
import * as fromGame from '../game/state/game.reducer';

export interface State {
  game: fromGame.State;
}

export const reducers: ActionReducerMap<State> = {
  game: fromGame.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getGameState = createFeatureSelector<State, fromGame.State>(
  'game'
);
