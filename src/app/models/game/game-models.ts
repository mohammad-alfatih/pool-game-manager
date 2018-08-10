export namespace GameModels {
  export class Game {
    id: number;
    players: Player[];
    table: Table;
    activeTurn: Turn;
    completedTurns: Turn[];
    sessionType: number;
    gameType: number;
    gameWinner: {
      playerName: string;
      turnNumber: number;
      shotSummary: string;
    };
  }

  export class Player {
    name: string;
    solidColor: boolean;
    associatedTurns: number[];
  }

  export class Table {
    holes: Hole[];
    balls: Ball[];
  }

  export class Turn {
    playerName: string;
    turnNumber: number;
    shot: Shot;
    shotSummary: string;
  }

  export class Shot {
    calledShot: ShotCall;
    dropIds: string[];
    shotSuccessful: boolean;
  }

  export class ShotCall {
    breakShot: boolean;
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
    id: string;
    turnNumber: number;
    player: string;
    accidental: boolean;
  }
}
