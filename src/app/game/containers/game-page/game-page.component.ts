import { Component, OnInit } from '@angular/core';

import { GameService } from './../../../providers/game.service';
import { GameModels } from '../../../models/game/game-models';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  poolBalls;

  constructor(private gameService: GameService) {
    this.gameService.startGame();
  }

  ngOnInit() {
    this.poolBalls = this.gameService.game.balls;
  }

  takeShot(shot: GameModels.Shot) {
    this.gameService.takeShot(shot);
  }
}
