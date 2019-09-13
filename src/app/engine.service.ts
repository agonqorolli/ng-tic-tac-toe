import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  versus: string;
  gameLine: Array<number> = new Array(9).fill(0);
  turn: number = 1; //1 for X and -1 for O
  isOver: boolean = false;
  xResult: number = 0;
  oResult: number = 0;
  resultSubject: Subject<object> = new Subject<object>();

  constructor() {
  }

  setAdversary(versus: string) { this.versus = versus; }
  getAdversary(): string { return this.versus; }

  setGameLine(line: Array<number>) { this.gameLine = line; }
  getGameLine(): Array<number> { return this.gameLine; }

  setTurn(turn: number) { this.turn = turn; }
  getTurn(): number { return this.turn; }

  reload() {
    this.isOver = false;
    this.setGameLine(new Array(9).fill(0));
  }

  playTurn(index: number) {
    if (this.gameLine[index] !== 0 || this.isOver) return; //don't allow playing the position twice
    this.gameLine[index] = this.turn;

    if (this.isWon()) {
      this.isOver = true;
      if (this.turn === 1) this.resultSubject.next({ x: ++this.xResult, o: this.oResult });

      if (this.turn === -1) this.resultSubject.next({ x: this.xResult, o: ++this.oResult });
      console.log('WOOOOOOOOOOOOON', this.xResult, this.oResult);
    }

    this.setTurn(this.turn * -1); //this will allways return 1 or -1
  }

  isWon(): boolean {
    let isWon: boolean = false;

    let sumOfPositions: Array<number> = [
      this.sumOfPositions(0, 1, 2),
      this.sumOfPositions(3, 4, 5),
      this.sumOfPositions(6, 7, 8),
      this.sumOfPositions(0, 3, 6),
      this.sumOfPositions(1, 4, 7),
      this.sumOfPositions(2, 5, 8),
      this.sumOfPositions(0, 4, 8),
      this.sumOfPositions(2, 4, 6)
    ];

    if (sumOfPositions.includes(3) || sumOfPositions.includes(-3)) isWon = true;

    return isWon
  }

  sumOfPositions(i: number, ii: number, iii: number) {
    let sum: number = 0;
    sum = this.gameLine[i] + this.gameLine[ii] + this.gameLine[iii];
    return sum;
  }
}
