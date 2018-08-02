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
    // this.startTurn();
    // this.declareWinner();
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

  // startTurn() {

  //   while (!this.game.gameWinner) {
  //     const activeTurn = this.game.turns.length;

  //     if (!!this.shot) {
  //       this.game.turns.push(this.createTurn(activeTurn));
  //       this.game.turns[activeTurn].shot = this.setShotResult(this.shot);

  //       this.shot = null;
  //     }
  //   }
  // }

  startNewTurn(player: GameModels.Player) {
    const newTurn = this.game.turns.length;

    if (!this.game.turns) {
      this.game.turns = [];
    }

    this.game.turns.push(<GameModels.Turn> {
      turnNumber: newTurn,
      player: player,
      shot: null
    });
  }

  setActivePlayer(player: GameModels.Player) {
    console.log(player, 'is up');

    this.startNewTurn(player);
  }

  checkForWinner(shot: GameModels.Shot) {
    const activeTurn = this.game.turns.length - 1;

    if (shot.calledShot.ball.number === 8) {
      if (shot.shotSuccessful) {
        this.game.gameWinner = this.game.turns[activeTurn].player;
      }
    }
  }

  takeShot(shot: GameModels.Shot) {
    const activeTurn = this.game.turns.length - 1;
    let player;

    this.game.turns[activeTurn].shot = this.setShotResult(shot);

    this.checkForWinner(shot);

    if (!!this.game.gameWinner) {
      console.log('Game Over:', this.game.turns[activeTurn].player.name, 'is the winner!');

      return;
    }

    if (!!shot.shotSuccessful) {
      player = this.game.turns[activeTurn].player;
    } else {
      player = this.game.players
      .find(item => item.name !== this.game.turns[activeTurn].player.name);
    }

    this.setActivePlayer(player);
  }

  setShotResult(shot: GameModels.Shot) {
    if (shot.calledShot.shotResult < 2) {
      shot.shotSuccessful = false;
    } else {
      shot.shotSuccessful = true;
    }

    console.log('Shot result:', shot);

    return shot;
  }

}
