import { Component, OnInit } from '@angular/core';

import { GameService } from './../../../providers/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }
}
