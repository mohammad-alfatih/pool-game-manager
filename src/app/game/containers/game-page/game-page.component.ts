import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as gameActions from '../../state/game.actions';
import * as fromGameState from '../../state/game.reducer';

import { GameService } from './../../../providers/game.service';
import { GameModels } from '../../../models/game/game-models';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  game$: Observable<any>;

  poolTable;
  poolBalls;
  player1;
  player2;
  shot;

  shotSelection: FormGroup;

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder,
    private store: Store<fromGameState.State>
  ) {
    this.store.dispatch(new gameActions.InitGame());
    console.log('InitGame Action Dispatched');
  }

  ngOnInit() {
    this.game$ = this.store.select(fromGameState.getGameState);

    this.game$.subscribe(res => console.log('Game Property from GamePageComponent', res));
    // this.player1 = this.gameService.game.players
    // .find(item => item.name === 'Player1');

    // this.player2 = this.gameService.game.players
    // .find(item => item.name === 'Player2');

    // this.gameService.setActivePlayer(this.player1);


    // this.shot = {
    //   calledShot: {
    //     ball: this.poolBalls[8],
    //     hole: this.poolTable.topLeft,
    //     shotResult: 1
    //   },
    //   shotSuccessful: null
    // };

    this.shotSelection = this.formBuilder.group({
      hole: [null, Validators.required],
      ball: [null, Validators.required],
      shotResult: [null, Validators.required]
    });
  }

  onSubmit() {
    const shotCall: GameModels.ShotCall = {
      breakShot: false,
      hole: this.shotSelection.controls['hole'].value,
      ball: this.shotSelection.controls['ball'].value,
      shotResult: this.shotSelection.controls['shotResult'].value
    };
    const shot: GameModels.Shot = {
      calledShot: shotCall,
      dropIds: null,
      shotSuccessful: null
    };

    this.gameService.takeShot(shot);
    this.shotSelection.reset();
  }

  testShot() {
    const shot = {
      calledShot: {
        ball: this.poolBalls[5],
        hole: this.poolTable.topLeft,
        shotResult: 1
      },
      shotSuccessful: null
    };

  }

  printSelections() {
    const selections = {
      ball: this.shotSelection.controls['ball'].value,
      hole: this.shotSelection.controls['hole'].value,
      result: this.shotSelection.controls['shotResult'].value
    };

    console.log(selections);
  }
}
