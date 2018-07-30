import { Injectable } from '@angular/core';

import { GameModels } from '../models/game/game-models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: GameModels.Game;
  // table: GameModels.Table;
  // balls: GameModels.Ball[];
  // players: GameModels.Player[];
  // gameType: number;
  // sessionType: number;

  constructor() { }

  startGame() {
    this.game = new GameModels.Game();

    this.setTable();
    this.setBalls();
    this.setPlayers();
    this.startTurns();
    this.declareWinner();
  }

  setTable() {
    const table: GameModels.Table = {
      topLeft: { balls: <GameModels.Ball[]> [] },
      topRight: { balls: <GameModels.Ball[]> [] },
      middleRight: { balls: <GameModels.Ball[]> [] },
      bottomRight: { balls: <GameModels.Ball[]> [] },
      bottomLeft: { balls: <GameModels.Ball[]> [] },
      middleLeft: { balls: <GameModels.Ball[]> [] },
    };

    this.game.table = table;
  }

  setBalls() {
    const balls: GameModels.Ball[] = [
      {
        number: 1,
        color: 'yellow',
        solidColor: true,
        drop: null
      },
      {
        number: 2,
        color: 'blue',
        solidColor: true,
        drop: null
      },
      {
        number: 3,
        color: 'red',
        solidColor: true,
        drop: null
      },
      {
        number: 4,
        color: 'purple',
        solidColor: true,
        drop: null
      },
      {
        number: 5,
        color: 'orange',
        solidColor: true,
        drop: null
      },
      {
        number: 6,
        color: 'green',
        solidColor: true,
        drop: null
      },
      {
        number: 7,
        color: 'maroon',
        solidColor: true,
        drop: null
      },
      {
        number: 8,
        color: 'black',
        solidColor: true,
        drop: null
      },
      {
        number: 9,
        color: 'yellow',
        solidColor: false,
        drop: null
      },
      {
        number: 10,
        color: 'blue',
        solidColor: false,
        drop: null
      },
      {
        number: 11,
        color: 'red',
        solidColor: false,
        drop: null
      },
      {
        number: 12,
        color: 'purple',
        solidColor: false,
        drop: null
      },
      {
        number: 13,
        color: 'orange',
        solidColor: false,
        drop: null
      },
      {
        number: 14,
        color: 'green',
        solidColor: false,
        drop: null
      },
      {
        number: 15,
        color: 'maroon',
        solidColor: false,
        drop: null
      }
    ];

    this.game.balls = balls;
  }

  setPlayers() {
    const players = [
      { name: 'Player1', solidColor: true },
      { name: 'Player2', solidColor: false }
    ];

    this.game.players = players;
  }

  // Set the type of session, whether single device, live session, or practice
  // setSessionType() {}

  // Set the type of game, whether 8 ball, 9 ball, or trick shots
  // setGameType() {}

  startTurns() {
    const turns = [];
    const latestTurn = this.game.turns.length - 1;
    let player;

    if (this.game.turns.length === 0) {
      player = this.game.players.find(item => item.name === 'Player1');
    } else if (this.game.turns[latestTurn].shotSuccessful === true) {
      player = this.game.turns[latestTurn].player;
    } else {
      player = this.game.players.find(item => item.name !== this.game.turns[latestTurn].player.name);
    }

    if (this.game.gameWinner === null) {
      this.takeTurn(player);
    }
  }

  declareWinner() {

  }

  takeTurn(player: GameModels.Player) {
    const currentTurn = this.game.turns.length;
    const shot: GameModels.Shot = this.takeShot();
    let shotSuccess;

    if (shot.shotResult < 2) {
      shotSuccess = false;
    } else {
      shotSuccess = true;
    }

    const turn: GameModels.Turn = {
      turnNumber: currentTurn,
      player: player,
      calledShot: shot,
      shotSuccessful: shotSuccess
    };

    this.game.turns.push(turn);
  }

  takeShot() {
    // Create methodology for setting shot properties
    return new GameModels.Shot();
  }

}
