export namespace GameModels {
  export class Game {
    players: Player[];
    table: Table;
    turns: Turn[];
    balls: Ball[];
    sessionType: number;
    gameType: number;
    gameWinner: Player;
  }

  export class Player {
    name: string;
    solidColor: boolean;
  }

  export class Table {
    topLeft: Hole;
    topRight: Hole;
    middleRight: Hole;
    bottomRight: Hole;
    bottomLeft: Hole;
    middleLeft: Hole;
  }

  export class Turn {
    turnNumber: number;
    player: Player;
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
