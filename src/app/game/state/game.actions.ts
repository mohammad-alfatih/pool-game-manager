import { Action } from '@ngrx/store';

import { GameModels } from '../../models/game/game-models';

export enum GameActionTypes {
  CREATE_TABLE = '[Game] create table',
  CREATE_PLAYERS = '[Game] create players',
  ASSIGN_TURN = '[Game] assign turn',
  TAKE_SHOT = '[Game] take shot',
  SUBMIT_TURN = '[Game] submit turn'
}

export class CreateTable {
  readonly type = GameActionTypes.CREATE_TABLE;
  constructor(public payload: { table: GameModels.Table }) {}
}

export class CreatePlayers {
  readonly type = GameActionTypes.CREATE_PLAYERS;
  constructor(public payload: { players: { player1: GameModels.Player, player2: GameModels.Player }}) {}
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
  = CreateTable
  | CreatePlayers
  | AssignTurn
  | TakeShot
  | SubmitTurn
  ;
