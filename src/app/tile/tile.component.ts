import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() player: number;
  label: string;

  constructor() { }

  ngOnInit() {
    if (this.player === 1) this.label = 'X';
    if (this.player === -1) this.label = 'O';
    if (this.player === 0) this.label = '';
  }
}
