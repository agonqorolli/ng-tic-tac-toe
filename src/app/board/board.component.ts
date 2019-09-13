import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  gameLine: Array<number>;
  turn: number;

  constructor(
    private engineService: EngineService,
  ) { }

  clickedTile(tile: number) {
    this.engineService.playTurn(tile);
    this.turn = this.engineService.getTurn();
  }

  reload() {
    this.engineService.reload();
    this.gameLine = this.engineService.getGameLine();
  }

  ngOnInit() {
    this.turn = this.engineService.getTurn();
    this.gameLine = this.engineService.getGameLine();
  }
}
