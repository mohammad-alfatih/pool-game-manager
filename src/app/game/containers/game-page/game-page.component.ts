import { Component, OnInit } from '@angular/core';

import { GameService } from './../../../providers/game.service';
import { GameModels } from '../../../models/game/game-models';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  poolTable;
  poolBalls;
  player1;
  player2;
  shot;

  shotSelection: FormGroup;

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder
  ) {
    this.gameService.startGame();
  }

  ngOnInit() {
    this.player1 = this.gameService.game.players
    .find(item => item.name === 'Player1');

    this.player2 = this.gameService.game.players
    .find(item => item.name === 'Player2');

    this.gameService.setActivePlayer(this.player1);

    this.poolTable = this.gameService.game.table;
    this.poolBalls = this.gameService.game.balls;
    this.shot = {
      calledShot: {
        ball: this.poolBalls[8],
        hole: this.poolTable.topLeft,
        shotResult: 1
      },
      shotSuccessful: null
    };

    this.shotSelection = this.formBuilder.group({
      hole: ['', Validators.required],
      ball: ['', Validators.required],
      shotResult: ['', Validators.required]
    });
  }

  onSubmit(shot: GameModels.Shot) {

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

  this.gameService.takeShot(shot);
  }
}
