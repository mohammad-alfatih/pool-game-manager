import { Action } from '@ngrx/store';

import { GameModels } from '../../models/game/game-models';

export enum GameActionTypes {
  INIT_GAME = '[Game] initiate game',
  INIT_GAME_SUCCESS = '[Game] initiate game success',
  ASSIGN_TURN = '[Game] assign turn',
  TAKE_SHOT = '[Game] take shot',
  SUBMIT_TURN = '[Game] submit turn'
}

export class InitGame {
  readonly type = GameActionTypes.INIT_GAME;
  constructor() {}
}

export class InitGameSuccess {
  readonly type = GameActionTypes.INIT_GAME_SUCCESS;
  constructor(public payload: GameModels.Table) {}
}

export class AssignTurn {
  readonly type = GameActionTypes.ASSIGN_TURN;
  constructor(public payload: { turn: GameModels.Turn }) {}
}

export class TakeShot {
  readonly type = GameActionTypes.TAKE_SHOT;
  constructor(public payload: { shot: GameModels.Shot }) {}
}

export class SubmitTurn {
  readonly type = GameActionTypes.SUBMIT_TURN;
  constructor(public payload: GameModels.Turn) {}
}

export type GameActions
  = InitGame
  | InitGameSuccess
  | AssignTurn
  | TakeShot
  | SubmitTurn
  ;
