import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';

import {
  switchMap,
  catchError,
  map,
  tap
} from 'rxjs/operators';
import { of } from 'rxjs';

import { GameService } from './../../providers/game.service';
import { State } from '../../state/app.reducer';
import {
  GameActionTypes,
  InitGame,
  InitGameSuccess
} from './game.actions';

@Injectable()
export class GameFacade {
  @Effect()
  initGame$ = this.actions$.pipe(
    ofType<InitGame>(GameActionTypes.INIT_GAME),
    tap(() => console.log('InitGameSuccess from FACADE')),
    switchMap(() =>
      this.gameService.initGame().pipe(
        map(res => new InitGameSuccess(res))
      )
    )
  );

  constructor(
    private store: Store<State>,
    private actions$: Actions,
    private gameService: GameService,
  ) {}
}
