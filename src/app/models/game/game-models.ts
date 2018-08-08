export namespace GameModels {
  export class Game {
    id: number;
    players: {
      player1: Player;
      player2: Player;
    };
    table: Table;
    activeTurn: Turn;
    completedTurns: Turn[];
    sessionType: number;
    gameType: number;
    gameWinner: Player;
  }

  export class Player {
    name: string;
    solidColor: boolean;
    turns: Turn[];
  }

  export class Table {
    holes: Hole[];
    balls: Ball[];
  }

  export class Turn {
    playerName: string;
    turnNumber: number;
    shot: Shot;
  }

  export class Shot {
    calledShot: ShotCall;
    shotSuccessful: boolean;
  }

  export class ShotCall {
    ball: Ball;
    hole: Hole;
    shotResult: number;
  }

  export class Hole {
    name: string;
    balls: Ball[];
  }

  export class Ball {
    number: number;
    color: string;
    solidColor: boolean;
    drop: Drop;
  }

  export class Drop {
    turnNumber: number;
    accidental: boolean;
  }
}
