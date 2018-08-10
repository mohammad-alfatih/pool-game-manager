import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GameModels } from '../models/game/game-models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: GameModels.Game;

  constructor() { }

  initGame(): Observable<GameModels.Table> {
    return Observable.create(this.setTable());
  }

  startGame() {
    this.game = new GameModels.Game();

    this.setTable();
    this.setBalls();
    this.setPlayers();
  }

  setTable() {
    return <GameModels.Table> {
      holes: this.setHoles(),
      balls: this.setBalls()
    };
  }

  setHoles() {
    return <GameModels.Hole[]> [
      {
        name: 'Top Left',
        balls: <GameModels.Ball[]> []
      },
      {
        name: 'Top Right',
        balls: <GameModels.Ball[]> []
      },
      {
        name: 'Middle Right',
        balls: <GameModels.Ball[]> []
      },
      {
        name: 'Bottom Right',
        balls: <GameModels.Ball[]> []
      },
      {
        name: 'Bottom Left',
        balls: <GameModels.Ball[]> []
      },
      {
        name: 'Middle Left',
        balls: <GameModels.Ball[]> []
      }
    ];
  }

  setBalls() {
    return <GameModels.Ball[]> [
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
  }

  setPlayers() {
    const players = [
      { name: 'Player1', solidColor: true, associatedTurns: [] },
      { name: 'Player2', solidColor: false, associatedTurns: [] }
    ];

    this.game.players = players;
  }

  setActivePlayer(player: GameModels.Player) {
    if (!this.game.completedTurns) {
      this.game.completedTurns = [];
    }
    console.log(player.name, 'is up, for turn #', this.game.completedTurns.length);

    this.startNewTurn(player);
  }

  startNewTurn(player: GameModels.Player) {
    const newTurn = this.game.completedTurns.length;

    this.game.completedTurns.push(<GameModels.Turn> {
      turnNumber: newTurn,
      playerName: player.name,
      shot: null,
      shotSummary: null
    });
  }

  takeShot(shot: GameModels.Shot) {
    const activeTurn = this.game.completedTurns.length - 1;
    let player;

    this.game.completedTurns[activeTurn].shot = this.setShotResult(shot);

    this.checkForWinner(shot);

    if (!!this.game.gameWinner) {
      console.log('Game Over:', this.game.completedTurns[activeTurn].playerName, 'is the winner!');

      return;
    }

    if (!!shot.shotSuccessful) {
      const playerName = this.game.completedTurns[activeTurn].playerName;
      player = this.game.players[playerName];
    } else {
      player = this.game.players
      .find(item => item.name !== this.game.completedTurns[activeTurn].playerName);
    }

    this.setActivePlayer(player);
  }

  checkForWinner(shot: GameModels.Shot) {
    const activeTurn = this.game.completedTurns.length - 1;

    if (shot.calledShot.ball.number === 8) {
      if (shot.shotSuccessful) {
        this.game.gameWinner.playerName = this.game.completedTurns[activeTurn].playerName;
      }
    }
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
